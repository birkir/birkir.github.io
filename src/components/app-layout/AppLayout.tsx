import * as React from 'react';
import Helmet from 'react-helmet';
import { helmet } from '../../utils/helmet';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import s from './AppLayout.scss';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default ({ children }: AppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />
    <Header />
    {children}
    <Footer />
  </div>
);
