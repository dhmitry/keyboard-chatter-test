import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Keyboard from '../components/Keyboard';
import Settings from '../components/Settings';
import { useSettings } from '../context/SettingsContext';

const Home: NextPage = () => {
  const { isDarkMode } = useSettings();

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Head>
        <title>Keyboard Chatter Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 transition-colors duration-300 dark:bg-zinc-800">
        <Settings />
        <Keyboard />
      </div>
    </div>
  );
};

export default Home;
