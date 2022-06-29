import { Client } from '@notionhq/client';
import { ListBlockChildrenResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { map, result } from 'lodash';
import fs from "fs";
import fetch from "node-fetch";

type ArrayElement<ArrayType extends readonly unknown[]> = 
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type BlockOrPartial = ArrayElement<ListBlockChildrenResponse["results"]>;
type ItemExtractor<Match extends Partial<BlockOrPartial>> = Extract<BlockOrPartial, Match>

type DBResponse = ArrayElement<QueryDatabaseResponse["results"]>;


interface ItemsToUpdate {
  items?: Array<{
    contents?: ListBlockChildrenResponse["results"];
    fileMD?: string;
    id?: string;
  }>;
  results?: DBResponse[];
}

export class NotionCms {

  database_id: string;
  notion: Client;
  itemsToUpdate: ItemsToUpdate;

  constructor(database_id: string) {
    this.database_id = database_id;
    this.notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });
    this.itemsToUpdate = {}
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
          if("properties" in item) {
            itemsToUpdate.items.push({
              id: item.id,
              contents: blocks.results,
              fileMD: ''
            })
          }
        }
        this.set_items_to_update(itemsToUpdate)
        console.log('items to update : ', this.itemsToUpdate)
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
      case 'numbered_list_item': 
        return '1.' + await this.format_sentence(block[`${blockType}`].rich_text) + ' \n'
      case 'quote': 
        return '> ' + await this.format_sentence(block[`${blockType}`].rich_text) + ' \n\n'
      case 'image': 
        blockk = block as ItemExtractor<{ type: 'image' }>
        if('file' in blockk.image){
          console.log('in image ', numberImage)
          await this.fetch_and_write(blockk.image.file.url, `${name}_${numberImage}.png`, 'public/images/guides', false)
        }
        return `![Image](/images/guides/${name}_${numberImage}.png)` + ' \n'
      case 'paragraph':
        return '' + await this.format_sentence(block[`${blockType}`].rich_text) + ' \n'
    }
  }

  add_related = async (indexItem: number, name_prop: string, name_md: string) => {
    if(this.itemsToUpdate?.results && this.itemsToUpdate?.items) {
      let item = this.itemsToUpdate?.results[indexItem]
      this.itemsToUpdate.items[indexItem].fileMD = this.itemsToUpdate.items[indexItem].fileMD?.concat(
        `${name_md}: `
      )
      let result = this.itemsToUpdate?.results[indexItem]
      if("properties" in result && "relation" in result.properties[name_prop]) {
        let relations = result.properties[name_prop]
        if("relation" in relations) {
          for(let relation of relations.relation) {
            this.itemsToUpdate.items[indexItem].fileMD = this.itemsToUpdate.items[indexItem].fileMD?.concat( 
              await this.notion.pages.retrieve({
                page_id: relation.id
              }).then((relative) => {
                if("properties" in relative && "title" in relative.properties.Name && "text" in relative.properties.Name.title[0])
                return ` \n  - ` + relative.properties.Name.title[0].text.content
              }) + '',
            )
          }
          this.itemsToUpdate.items[indexItem].fileMD = this.itemsToUpdate.items[indexItem].fileMD?.concat(`\n`)
        }
      }
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
    if(this.itemsToUpdate !== undefined) {
      let index = 0
      for(let result of this.itemsToUpdate.results || []) {
        if(this.itemsToUpdate.items && "properties" in result) {
            if("rich_text" in result.properties?.name
            && "rich_text" in result.properties?.acronym
            && "rich_text" in result.properties?.short
            && "rich_text" in result.properties?.description
            && "rich_text" in result.properties?.contact
            && "rich_text" in result.properties?.annuaire
            && "rich_text" in result.properties?.site 
            && "rich_text" in result.properties?.siteOpenData
            && "select" in result.properties?.type
            && "files" in result.properties?.logo) {
            this.itemsToUpdate.items[index].fileMD = `--- \n`.concat(
              `name: ` + result.properties?.name.rich_text[0].plain_text + '\n',
              `acronym: ` + result.properties?.acronym.rich_text[0].plain_text + '\n',
              `type: ` + result.properties?.type.select?.name + '\n',
              `logo: ` + result.properties?.logo.files[0].name + '\n',
              `short: ` + result.properties?.short.rich_text[0].plain_text + '\n',
              `description: ` + result.properties?.description.rich_text[0].plain_text.replace(/\n/g, "\n  ") + '\n',
              `contact: ${result.properties?.contact.rich_text[0] ? result.properties?.contact.rich_text[0].plain_text : ''}` + ' \n',
              `annuaire: ${result.properties?.annuaire.rich_text[0] ? result.properties?.annuaire.rich_text[0].plain_text : ''}` + ' \n',
              `site: ${result.properties?.site.rich_text[0] ? result.properties?.site.rich_text[0].plain_text : ''}` + ' \n',
              `siteOpenData: ${result.properties?.siteOpenData.rich_text[0] ? result.properties?.siteOpenData.rich_text[0].plain_text : ''}` + ' \n',
              `--- \n\n`
            )
            if("file" in result.properties?.logo.files[0])
            await this.fetch_and_write(result.properties?.logo.files[0].file.url, `${result.properties?.logo.files[0].name}`, 'public/images/api-logo', false)
            if('title' in result.properties?.Name && "text" in result.properties?.Name.title[0])
            await this.write_file(`${result.properties?.Name.title[0].text.content}.md`, this.itemsToUpdate.items[index].fileMD || '', '_data/producteurs')  
          }
          index++
        }
      }
    }
  }

}


export class RessourcesCms extends NotionCms {

  constructor (database_id: string) {
    super(database_id)
  }

  construct_and_write_file = async () => {

    if(this.itemsToUpdate !== undefined) {
      let index = 0
      for(let result of this.itemsToUpdate.results || []) {
        if(this.itemsToUpdate.items && "properties" in result) {
            if("rich_text" in result.properties?.title
            && "rich_text" in result.properties?.tagline
            && "multi_select" in result.properties?.keywords
            && "multi_select" in result.properties?.themes
            && "select" in result.properties?.conditions_utilisation 
            && "relation" in result.properties?.Producteur
            && "select" in result.properties?.type
            && "url" in result.properties?.documentation
            && "url" in result.properties?.link
            && "title" in result.properties?.Name) {
            this.itemsToUpdate.items[index].fileMD = `--- \n`.concat(
              `title: ` + ''.concat(... map(result.properties?.title.rich_text, 'plain_text')) + '\n',
              `tagline: ${result.properties?.tagline.rich_text[0] ? ''.concat(... map(result.properties?.tagline.rich_text, 'plain_text')).replace(':', '') : ''} ` + '\n',
              `kind: ` + '\n  - ' + result.properties?.type.select?.name + '\n',
              `doc_tech_link: ${result.properties?.documentation.url ? result.properties?.documentation.url : ''}` + '\n',
              `doc_tech_external: ${result.properties?.link.url ? result.properties?.link.url : ''}` + '\n',
              `producer: ` + await this.notion.pages.retrieve({
                page_id: result.properties?.Producteur.relation[0].id
              }).then((producer) => {
                if("properties" in producer && "title" in producer.properties.Name && "text" in producer.properties.Name.title[0])
                return producer.properties.Name.title[0].text.content
              }) + '\n',
              `is_open:` + (result.properties?.conditions_utilisation.select?.name === 'Ouverte' ? ' 1' : result.properties?.conditions_utilisation.select?.name === 'Ouverte sur demande' ? ' 0' : ' -1') + '\n',
              `themes: \n` + result.properties?.themes.multi_select.map((theme:any) => {
                return '  - ' + theme.name + '\n'
              }).toString().replace(/,/g, '') + '\n',
              `keywords: \n` + result.properties?.keywords.multi_select.map((theme:any) => {
                return '  - ' + theme.name + '\n'
              }).toString().replace(/,/g, '') + '\n',
              `--- \n\n`
            )
            for(let block of this.itemsToUpdate.items[index].contents || []) {
              if("type" in block)
              this.itemsToUpdate.items[index].fileMD = this.itemsToUpdate.items[index].fileMD?.concat(
                await this.format_blocks(block.type || '', block) || ''
              )
            }
            await this.write_file(`${''.concat(... map(result.properties?.Name.title, 'text.content'))}.md`.replace('/', '_'), this.itemsToUpdate.items[index].fileMD || '', '_data/api') 
          }
          index++
        }
      }
    }
  }

}


export class ArticlesCms extends NotionCms {

  constructor (database_id: string) {
    super(database_id)
  }

  construct_and_write_file = async () => {

    if(this.itemsToUpdate !== undefined) {
      let index = 0
      for(let result of this.itemsToUpdate.results || []) {
        if(this.itemsToUpdate.items && "properties" in result) {
            if("rich_text" in result.properties?.title
            && "rich_text" in result.properties?.tagline
            && "multi_select" in result.properties?.tags
            && "relation" in result.properties?.related_ressources
            && "files" in result.properties?.image) {
            this.itemsToUpdate.items[index].fileMD = `--- \n`.concat(
              `title: ` + result.properties?.title.rich_text[0].plain_text + '\n',
              `tagline: ` + result.properties?.tagline.rich_text[0].plain_text + '\n',
              `tags: ` + map(result.properties?.tags.multi_select, 'name') + '\n',
              `image: ` + result.properties?.image.files[0].name + '\n',
              `noindex: false # this page will appear on Google \n`,
              `publish: true # this page will appear on /guides page \n`
            )
            if(result.properties?.related_ressources.relation[0]) {
              await this.add_related(index, 'related_ressources', 'api')
            }
            this.itemsToUpdate.items[index].fileMD = this.itemsToUpdate.items[index].fileMD?.concat(
              `--- \n\n`
            )
            if("file" in result.properties?.image.files[0])
            await this.fetch_and_write(result.properties?.image.files[0].file.url, `${result.properties?.image.files[0].name}`, 'public/images/guides', true)
            let numberImage = 0
            for(let block of this.itemsToUpdate.items[index].contents || []) {
              if("type" in block && block.type === 'image')numberImage++
              if("type" in block && "title" in result.properties?.Name && "text" in result.properties?.Name.title[0])
              this.itemsToUpdate.items[index].fileMD = this.itemsToUpdate.items[index].fileMD?.concat(
                await this.format_blocks(block.type || '', block, numberImage, result.properties?.Name.title[0].text.content.replace(/ /g,"_")) || ''
              )
            }
            if("title" in result.properties?.Name && "text" in result.properties?.Name.title[0])
            await this.write_file(`${result.properties?.Name.title[0].text.content}.md`, this.itemsToUpdate.items[index].fileMD || '', '_data/guides')
          }
          index++
        }
      }
    }
  }

}


export class UsecaseCms extends NotionCms {

  constructor (database_id: string) {
    super(database_id)
  }

  construct_and_write_file = async () => {

    if(this.itemsToUpdate !== undefined) {
      let index = 0
      for(let result of this.itemsToUpdate.results || []) {
        if(this.itemsToUpdate.items && "properties" in result) {
            if("rich_text" in result.properties?.title
            && "rich_text" in result.properties?.tagline
            && "multi_select" in result.properties?.tags
            && "relation" in result.properties?.related_ressources
            && "relation" in result.properties?.related_guides
            && "files" in result.properties?.image) {
            this.itemsToUpdate.items[index].fileMD = `--- \n`.concat(
              `title: ` + result.properties?.title.rich_text[0].plain_text + '\n',
              `tagline: ` + result.properties?.tagline.rich_text[0].plain_text + '\n',
              `tags: ` + map(result.properties?.tags.multi_select, 'name') + '\n',
              `image: ` + result.properties?.image.files[0].name + '\n',
              `noindex: false # this page will appear on Google \n`,
              `publish: true # this page will appear on /guides page \n`
            )
            if(result.properties?.related_ressources.relation[0]) {
              await this.add_related(index, 'related_ressources', 'related_ressources')
            }
            if(result.properties?.related_guides.relation[0]) {
              await this.add_related(index, 'related_guides', 'related_guides')
            }
            this.itemsToUpdate.items[index].fileMD = this.itemsToUpdate.items[index].fileMD?.concat(
              `--- \n\n`
            )
            
            if("file" in result.properties?.image.files[0])
            await this.fetch_and_write(result.properties?.image.files[0].file.url, `${result.properties?.image.files[0].name}`, 'public/images/usecases', false)
            let numberImage = 0
            for(let block of this.itemsToUpdate.items[index].contents || []) {
              if("type" in block && block.type === 'image')numberImage++
              if("type" in block && "title" in result.properties?.Name && "text" in result.properties?.Name.title[0])
              this.itemsToUpdate.items[index].fileMD = this.itemsToUpdate.items[index].fileMD?.concat(
                await this.format_blocks(block.type || '', block, numberImage, result.properties?.Name.title[0].text.content.replace(/ /g,"_")) || ''
              )
            }
            if("title" in result.properties?.Name && "text" in result.properties?.Name.title[0])
            await this.write_file(`${result.properties?.Name.title[0].text.content}.md`, this.itemsToUpdate.items[index].fileMD || '', '_data/usecases')
          }
          index++
        }
      }
    }
  }

}