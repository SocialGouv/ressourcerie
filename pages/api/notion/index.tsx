import type { NextApiHandler } from "next";
import { Client } from '@notionhq/client';

import { ArticlesCms, ProducteurCms, RessourcesCms, UsecaseCms } from '../../../utils/notion_connector'

const handler: NextApiHandler = async (req, res) => {

  if (req.method == "POST") {
    await post(req, res);
  } else if (req.method == "GET") {
    await get(req, res)
  } else {
    res.status(405).end();
    return;
  }
};

const get: NextApiHandler = async (req, res) => {

  try {

    const ProducteursConnector = new ProducteurCms( process.env.NOTION_PRODUCTEURS_BASE_ID || '')
    await ProducteursConnector.querry_items_and_content()
    await ProducteursConnector.construct_and_write_file()
    await ProducteursConnector.update_need_pull()
  
    const RessourcesConnector = new RessourcesCms( process.env.NOTION_RESSOURCES_BASE_ID || '')
    await RessourcesConnector.querry_items_and_content()
    await RessourcesConnector.construct_and_write_file()
    await RessourcesConnector.update_need_pull()
  
    const ArticlesConnector = new ArticlesCms( process.env.NOTION_ARTICLES_BASE_ID || '')
    await ArticlesConnector.querry_items_and_content()
    await ArticlesConnector.construct_and_write_file()
    await ArticlesConnector.update_need_pull()
  
    const UsecaseConnector = new UsecaseCms( process.env.NOTION_USECASES_BASE_ID || '')
    await UsecaseConnector.querry_items_and_content()
    await UsecaseConnector.construct_and_write_file()
    await UsecaseConnector.update_need_pull()

    res.status(200).json({ itemsUpdated: {
      producteurs : ProducteursConnector.get_items_to_update(),
      ressources : RessourcesConnector.get_items_to_update(),
      articles : ArticlesConnector.get_items_to_update(),
      usecases : UsecaseConnector.get_items_to_update(),
    } });

  } catch(e) {
    console.log(e)
    res.status(500).json(e)
  }
}

const post: NextApiHandler = async (req, res) => {
    const email = req.query.email as string

    const notion = new Client({ auth: process.env.NOTION_INTEGRATION_TOKEN });

    if(process.env.NOTION_INTEGRATION_TOKEN == undefined) {
        res.status(405).end();
        return;
    }

    try {
        (async () => {
            const response = await notion.pages.create({
              parent: {
                database_id: process.env.NOTION_BASE as string,
              },
                 icon: {
                  type: "emoji",
                      emoji: "🥬"
                },
                cover: {
                    type: "external",
                  external: {
                      url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Tuscankale.jpg"
                  }
                },
              properties: {
                Name: {
                  title: [
                    {
                      text: {
                        content: email,
                      },
                    },
                  ],
                },
                email: {
                  rich_text: [
                    {
                      text: {
                        content: email,
                      },
                    },
                  ],
                }
              }
            });
            console.log(response);
          })();
    
        res.status(200).json({ message: "Commentaire ajouté" });
    } catch(e) {
        console.log(e)
    }
};

export default handler;