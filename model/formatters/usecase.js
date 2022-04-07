// used by node, therefore in plain js
const frontmatter = require('front-matter');

const formatUsecase = (slug, data) => {
  const document = frontmatter(data);

  return {
    //@ts-ignore
    ...document.attributes,
    body: document.body,
    path: `/usecases/${slug}`,
    slug,
  };
};
module.exports = {
  formatUsecase,
};
