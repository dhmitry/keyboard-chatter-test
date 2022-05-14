import Head from 'next/head';
import React, { ReactNode, useEffect, useState } from 'react';
import { useAppSelector } from '../state/hooks';
import { selectIsDarkMode } from '../state/settingsSlice';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const [isSystemDarkMode, setIsSystemDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setIsSystemDarkMode(prefersDarkMode);
  }, []);

  return (
    <main className={isDarkMode ? 'dark' : ''}>
      <Head>
        <title>Keyboard Chatter Test</title>
        {isSystemDarkMode ? (
          <link rel="icon" href="/favicon_light.ico" />
        ) : (
          <link rel="icon" href="/favicon_dark.ico" />
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 transition-colors duration-300 dark:bg-zinc-800">
        {children}
      </div>
    </main>
  );
};

export default Layout;
