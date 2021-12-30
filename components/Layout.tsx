import React, { ReactNode } from 'react';
import Head from 'next/head';
import {Socials}  from '../components/Me';
import LinkComponent from './Link';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Isabele' }: Props) => (
  <div className="container">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
    </header>
    <main>
    {children}
    </main>
    <footer>
      <Socials />      
    </footer>
  </div>
)

export default Layout
