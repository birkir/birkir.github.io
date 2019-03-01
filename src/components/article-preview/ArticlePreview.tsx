import React from 'react';
import s from './ArticlePreview.scss';
import { format } from 'date-fns';
import { Link } from 'gatsby';

interface ArticlePreviewProps {
  id: string;
  slug: string;
  title: string;
  date: string;
  body: any[];
}

export const ArticlePreview = ({
  id,
  slug,
  title,
  date,
  body,
}: ArticlePreviewProps) => (
  <article className={s.articlePreview} data-id={id}>
    <Link to={`/article/${slug}`} className={s.link}>
      <h2 className={s.title}>{title}</h2>
    </Link>
    <time dateTime={date}>{format(date, 'MM/DD/YYYY')}</time> -{' '}
    {Math.round(JSON.stringify(body).length / 400)} minutes
  </article>
);
