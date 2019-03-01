import React from 'react';
import ReactMarkdown from 'react-markdown';
import s from './Text.scss';

export interface TextProps {
  __typename: 'Prime_Text';
  content: string;
}

export const Text = ({ content }: TextProps) => (
  <ReactMarkdown className={s.text} source={content} />
);
