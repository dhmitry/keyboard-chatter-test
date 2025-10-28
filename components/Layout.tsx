import Head from 'next/head';
import React, { ReactNode, type JSX } from 'react';
import { useKeyboardListener } from '../hooks/useKeyboardListener';
import { useAppSelector } from '../state/hooks';
import { selectIsDarkMode } from '../state/settingsSlice';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  useKeyboardListener();

  const isDarkMode = useAppSelector(selectIsDarkMode);

  return (
    <main className={isDarkMode ? 'dark' : ''}>
      <Head>
        <title>Keyboard Chatter Test</title>
        <link
          rel="icon"
          href="/favicon_light.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon_dark.ico"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 transition-colors duration-300 dark:bg-zinc-800">
        {children}
      </div>
    </main>
  );
};

export default Layout;
