import React from 'react';
import s from './Footer.scss';

export const Footer = () => (
  <footer className={s.footer}>
    <hr className={s.divider} />
    <ul className={s.links}>
      <li>
        <a href="https://github.com/birkir" target="_blank">
          GitHub
        </a>
      </li>
      <li>
        <a href="https://twitter.com/birkirgudjonson" target="_blank">
          Twitter
        </a>
      </li>
    </ul>
  </footer>
);
