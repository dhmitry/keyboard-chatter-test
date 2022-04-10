import Head from 'next/head';
import React, { ReactNode, useMemo } from 'react';
import { useSettings } from '../context/SettingsContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { prefersDarkMode, isDarkMode, animationsClasses } = useSettings();

  const isLoading = useMemo(() => isDarkMode === null, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Head>
        <title>Keyboard Chatter Test</title>
        {prefersDarkMode ? (
          <link rel="icon" href="/favicon_light.ico" />
        ) : (
          <link rel="icon" href="/favicon_dark.ico" />
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isLoading ? null : (
        <div
          className={`flex min-h-screen flex-col items-center justify-center bg-slate-100 dark:bg-zinc-800 ${animationsClasses}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Layout;
