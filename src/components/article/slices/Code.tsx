import React from 'react';
import PrismCode from 'react-prism';

export interface CodeProps {
  __typename: 'Prime_Code';
  source: string;
  language: string;
}

export const Code = ({ language, source }: CodeProps) => (
  <PrismCode component="pre" className={`language-${language}`}>
    {source}
  </PrismCode>
);
