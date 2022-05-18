import type { NextApiHandler } from "next";
import { Client } from '@notionhq/client';

const handler: NextApiHandler = async (req, res) => {

  if (req.method == "GET") {
    await post(req, res);
  } else {
    res.status(405).end();
    return;
  }
};

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
                database_id: "e4e03e2676c54de09cc3fb46a56c90df",
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