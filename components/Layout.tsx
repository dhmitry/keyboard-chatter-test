import Head from 'next/head';
import React, { ReactNode, useMemo } from 'react';
import { useSettings } from '../context/SettingsContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { isDarkMode } = useSettings();

  const isLoading = useMemo(() => isDarkMode === null, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Head>
        <title>Keyboard Chatter Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className={`flex min-h-screen flex-col items-center justify-center ${
          isLoading ? 'bg-zinc-500' : 'bg-slate-100 dark:bg-zinc-800'
        } transition-colors duration-300`}
      >
        {isLoading ? null : children}
      </div>
    </div>
  );
};

export default Layout;
