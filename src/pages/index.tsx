import { graphql } from 'gatsby';
import React from 'react';
import { ArticlePreview } from '../components/article-preview/ArticlePreview';

export const query = graphql`
  fragment ArticleBodyFragment on Prime_Article_body {
    ... on Prime_Code {
      source
      language
    }

    ... on Prime_Quote {
      content
      author {
        name
        photo
      }
    }

    ... on Prime_Text {
      content
    }
  }

  query {
    prime {
      allArticle(sort: [{ date: DESC }]) {
        edges {
          node {
            id
            slug
            title
            date
            body {
              ...ArticleBodyFragment
            }
          }
        }
      }
    }
  }
`;

export default ({
  data: {
    prime: {
      allArticle: { edges },
    },
  },
}: any) => (
  <>
    {edges.map(({ node }: any) => (
      <ArticlePreview key={node.id} {...node} />
    ))}
  </>
);
