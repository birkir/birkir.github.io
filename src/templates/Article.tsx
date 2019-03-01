import { graphql } from 'gatsby';
import React from 'react';
import { Article } from '../components/article/Article';

export const query = graphql`
  query Article($id: ID!) {
    prime {
      Article(id: $id) {
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
`;

export default ({ data }: any) => {
  if (!data.prime.Article) {
    return <p>Whoops. Could not find article.</p>;
  }

  return <Article {...data.prime.Article} />;
};
