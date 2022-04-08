import { NextPage } from 'next';
import React from 'react';
import Keyboard from '../components/Keyboard';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-800 py-2">
      <Keyboard />
    </div>
  );
};

export default Home;
