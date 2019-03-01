/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    query {
      prime {
        allArticle {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.prime.allArticle.edges.forEach(({ node }) => {
      createPage({
        path: `article/${node.slug}`,
        component: path.resolve(`./src/templates/Article.tsx`),
        context: node,
      });
    });
  });
};
