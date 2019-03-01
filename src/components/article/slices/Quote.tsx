import React from 'react';

export interface QuoteProps {
  __typename: 'Prime_Quote';
  content: string;
  author: {
    name: string;
    photo: string;
  };
}

export const Quote = ({ content, author }: QuoteProps) => (
  <blockquote>
    {content}- {author.name}
  </blockquote>
);
