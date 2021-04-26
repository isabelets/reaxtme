import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {Socials}  from '../pages/me';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="container">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/skills">
          <a>Skills</a>
        </Link>
        <Link href="/experiences">
          <a>Experiences</a>
        </Link>
      </nav>
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
