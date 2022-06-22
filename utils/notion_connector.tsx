import { Client } from '@notionhq/client';
import { ListBlockChildrenResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { map } from 'lodash';
import fs from "fs";
import fetch from "node-fetch";

type ArrayElement<ArrayType extends readonly unknown[]> = 
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type BlockOrPartial = ArrayElement<ListBlockChildrenResponse["results"]>;

type ItemExtractor<Match extends Partial<BlockOrPartial>> = Extract<BlockOrPartial, Match>


interface ItemsToUpdate {
  items?: Array<{
    properties?: any[];
    contents?: ListBlockChildrenResponse["results"];
    fileMD?: string;
    id?: string;
  }>;
  results?: QueryDatabaseResponse["results"];
}

export class NotionCms {

  database_id: string;
  notion: Client;
  itemsToUpdate?: ItemsToUpdate;

  constructor(database_id: string) {
    this.database_id = database_id;
    this.notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });
  }

  set_items_to_update = (itemsToUpdate: ItemsToUpdate) => {
    this.itemsToUpdate = itemsToUpdate
  }

  get_items_to_update = ():ItemsToUpdate | undefined => {
    return this.itemsToUpdate
  }

  querry_items_database = async ():Promise<ItemsToUpdate> => { 
    let itemsToUpdate : ItemsToUpdate = {}
    let items = await this.notion.databases.query({
      database_id: this.database_id,
      filter: {
          property: "system_need_pull",
          checkbox: {
              equals: true
          }
      }
    })
    itemsToUpdate.results = items.results
    return itemsToUpdate
  }

  querry_items_and_content = async () => {
      let itemsToUpdate = await this.querry_items_database()
      itemsToUpdate.items = []
      if(itemsToUpdate !== undefined) {
        for(let item of itemsToUpdate.results || []) {
          let blocks = await this.notion.blocks.children.list({
            block_id: item.id
          })
          itemsToUpdate.items.push({
            id: item.id,
            properties: item.properties,
            contents: blocks.results,
            fileMD: ''
          })
        }
        this.set_items_to_update(itemsToUpdate)
        return itemsToUpdate
      }
  }

  write_file = async (name: string, content: string | Buffer, path: string) => {
    fs.writeFile(`${path}/${name}`, content, err => {
      if (err) {
        console.error(err);
      }
    });
  }

  fetch_and_write = async (url: string, name: string, path: string, thumbnail: Boolean) => {
    fetch(url)
    .then(
      async (res) => {
        const buffer = await res.buffer();
        this.write_file(name, buffer, path)
        if(thumbnail) {
          this.write_file(`thumbnail_${name}`, buffer, path)
        }
      }
    )
  }

  format_sentence = async (blocks: any[]) => {
    let string = ''
    for (let text of blocks) {
      string = string.concat(
        text.annotations.bold ? '**' : '',
        text.annotations.italic ? '*' : '',
        text.href !== null ? `[${text.plain_text}](${text.href})` : text.plain_text,
        text.annotations.italic ? '*' : '',
        text.annotations.bold ? '**' : ''
        )
    }
    return string + ' \n\n'
  }

  format_blocks = async (blockType: string, block: any, numberImage: number = 0, name: string = '') => {
    let blockk
    switch(blockType) {
      case 'heading_1': 
        return '## ' + await this.format_sentence(block[`${blockType}`].rich_text) + ' \n\n'
      case 'heading_2': 
        return '## **' + await this.format_sentence(block[`${blockType}`].rich_text) + '** \n\n'
      case 'heading_3': 
        return '### ' + await this.format_sentence(block[`${blockType}`].rich_text) + ' \n\n'
      case 'bulleted_list_item': 
        return '* ' + await this.format_sentence(block[`${blockType}`].rich_text) + ' \n'
      case 'quote': 
        return '> ' + await this.format_sentence(block[`${blockType}`].rich_text) + ' \n\n'
      case 'image': 
        blockk = block as ItemExtractor<{ type: 'image' }>
        if(block.image.type === 'file'){
          console.log('in image ', numberImage)
          await this.fetch_and_write(blockk.image.file.url, `${name}_${numberImage}.png`, 'public/images/guides', false)
        }
        return `![Image](/images/guides/${name}_${numberImage}.png)` + ' \n'
      case 'paragraph':
        return '' + await this.format_sentence(block[`${blockType}`].rich_text) + ' \n'
    }
  }

  update_need_pull = async () => {
    for(let item of this.itemsToUpdate?.results || []) {
      console.log('page id : ', item.id)
      const date = new Date()
      const response = await this.notion.pages.update({
        page_id: item.id,
        properties: {
            system_last_pull: {
                date: {
                  start: date.toISOString()
                }
              }
        }
      })
    }
  }

}


export class ProducteurCms extends NotionCms {

  constructor (database_id: string) {
    super(database_id)
  }

  construct_and_write_file = async () => {
    if(this.itemsToUpdate) {
      for(let item of this.itemsToUpdate?.items || []) {
        item.fileMD = `--- \n`.concat(
          `name: ` + item.properties?.name.rich_text[0].plain_text + '\n',
          `acronym: ` + item.properties?.acronym.rich_text[0].plain_text + '\n',
          `type: ` + item.properties?.type.select.name + '\n',
          `logo: ` + item.properties?.logo.files[0].name + '\n',
          `short: ` + item.properties?.short.rich_text[0].plain_text + '\n',
          `description: ` + item.properties?.description.rich_text[0].plain_text.replace(/\n/g, "\n  ") + '\n',
          `contact: ${item.properties?.contact.rich_text[0] ? item.properties?.contact.rich_text[0].plain_text : ''}` + ' \n',
          `annuaire: ${item.properties?.annuaire.rich_text[0] ? item.properties?.annuaire.rich_text[0].plain_text : ''}` + ' \n',
          `site: ${item.properties?.site.rich_text[0] ? item.properties?.site.rich_text[0].plain_text : ''}` + ' \n',
          `siteOpenData: ${item.properties?.siteOpenData.rich_text[0] ? item.properties?.siteOpenData.rich_text[0].plain_text : ''}` + ' \n',
          `--- \n\n`
        )
        fetch(item.properties?.logo.files[0].file.url)
        .then(
          async (res) => {
            const buffer = await res.buffer();
            this.write_file(`${item.properties?.logo.files[0].name}`, buffer, 'public/images/api-logo')
          }
        )
        await this.fetch_and_write(item.properties?.logo.files[0].file.url, `${item.properties?.logo.files[0].name}`, 'public/images/api-logo', false)
        await this.write_file(`${item.properties?.Name.title[0].text.content}.md`, item.fileMD, '_data/producteurs')
      }
    }
  }

}


export class RessourcesCms extends NotionCms {

  constructor (database_id: string) {
    super(database_id)
  }

  construct_and_write_file = async () => {
    if(this.itemsToUpdate) {
      for(let item of this.itemsToUpdate?.items || []) {
        console.log('item : ', item.properties?.title.rich_text[0].plain_text)
        item.fileMD = `--- \n`.concat(
          `title: ` + ''.concat(... map(item.properties?.title.rich_text, 'plain_text')) + '\n',
          `tagline: ${item.properties?.tagline.rich_text[0] ? ''.concat(... map(item.properties?.tagline.rich_text, 'plain_text')).replace(':', '') : ''} ` + '\n',
          `kind: ` + '\n  - ' + item.properties?.type.select.name + '\n',
          `doc_tech_link: ${item.properties?.documentation.url ? item.properties?.documentation.url : ''}` + '\n',
          `doc_tech_external: ${item.properties?.link.url ? item.properties?.link.url : ''}` + '\n',
          `producer: ` + await this.notion.pages.retrieve({
            page_id: item.properties?.Producteur.relation[0].id
          }).then((producer) => {
            return producer.properties.Name.title[0].text.content
          }) + '\n',
          `is_open:` + (item.properties?.conditions_utilisation.select.name === 'Ouverte' ? ' 1' : item.properties?.conditions_utilisation.select.name === 'Ouverte sur demande' ? ' 0' : ' -1') + '\n',
          `themes: \n` + item.properties?.themes.multi_select.map((theme:any) => {
            return '  - ' + theme.name + '\n'
          }).toString().replace(/,/g, '') + '\n',
          `keywords: \n` + item.properties?.keywords.multi_select.map((theme:any) => {
            return '  - ' + theme.name + '\n'
          }).toString().replace(/,/g, '') + '\n',
          `--- \n\n`
        )
        for(let block of item.contents || []) {
          item.fileMD = item.fileMD.concat(
            await this.format_blocks(block.type || '', block) || ''
          )
        }
        await this.write_file(`${''.concat(... map(item.properties?.Name.title, 'text.content'))}.md`.replace('/', '_'), item.fileMD, '_data/api')
      }
    }
  }

}


export class ArticlesCms extends NotionCms {

  constructor (database_id: string) {
    super(database_id)
  }

  construct_and_write_file = async () => {
    if(this.itemsToUpdate) {
      for(let item of this.itemsToUpdate?.items || []) {
        item.fileMD = `--- \n`.concat(
          `title: ` + item.properties?.title.rich_text[0].plain_text + '\n',
          `tagline: ` + item.properties?.tagline.rich_text[0].plain_text + '\n',
          `tags: ` + map(item.properties?.tags.multi_select, 'name') + '\n',
          `image: ` + item.properties?.image.files[0].name + '\n',
          `noindex: false # this page will appear on Google \n`,
          `publish: true # this page will appear on /guides page \n`
        )
        if(item.properties?.related_ressources.relation[0]) {
          item.fileMD = item.fileMD.concat(
            `api: ` + await this.notion.pages.retrieve({
              page_id: item.properties?.related_ressources.relation[0].id
            }).then((producer) => {
              return ` \n  - ` + producer.properties.Name.title[0].text.content
            }) + '\n',
            `--- \n\n`
          )
        } else {
          item.fileMD = item.fileMD.concat(
            `--- \n\n`
          )
        }
        await this.fetch_and_write(item.properties?.image.files[0].file.url, `${item.properties?.image.files[0].name}`, 'public/images/guides', true)
        let numberImage = 0
        for(let block of item.contents || []) {
          if(block.type === 'image')numberImage++
          item.fileMD = item.fileMD.concat(
            await this.format_blocks(block.type || '', block, numberImage, item.properties?.Name.title[0].text.content.replace(/ /g,"_")) || ''
          )
        }
        await this.write_file(`${item.properties?.Name.title[0].text.content}.md`, item.fileMD, '_data/guides')
      }
    }
  }

}