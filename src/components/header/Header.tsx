import { Link } from 'gatsby';
import React from 'react';
import s from './Header.scss';

export const Header = () => (
  <header className={s.header}>
    <div className={s.container}>
      <div className={s.content}>
        <Link to="/" className={s.logo}>
          birkir.dev
        </Link>
      </div>
    </div>
  </header>
);
