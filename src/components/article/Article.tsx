import React from 'react';
import s from './Article.scss';
import { Code, CodeProps } from './slices/Code';
import { Quote, QuoteProps } from './slices/Quote';
import { Text, TextProps } from './slices/Text';

type Slice = CodeProps | TextProps | QuoteProps;

interface ArticleProps {
  id: string;
  title: string;
  slug: string;
  body: Slice[];
}

const slices = {
  Prime_Code: Code,
  Prime_Text: Text,
  Prime_Quote: Quote,
};

const mapSlice = (slice: Slice, index: number) => {
  const SliceComponent = slices[slice.__typename];
  if (SliceComponent) {
    return <SliceComponent key={index} {...slice as any} />;
  }
};

export const Article = ({ title, body }: ArticleProps) => {
  return (
    <article className={s.article}>
      <h1 className={s.title}>{title}</h1>
      {body.map(mapSlice)}
    </article>
  );
};
