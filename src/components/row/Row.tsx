import React from 'react';
import s from './Row.scss';

interface RowProps {
  children: React.ReactNode;
}

export const Row = ({ children }: RowProps) => (
  <div className={s.row}>{children}</div>
);
