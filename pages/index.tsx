import { NextPage } from 'next';
import React from 'react';
import Keyboard from '../components/Keyboard';
import Settings from '../components/Settings';

const Home: NextPage = () => {
  return (
    <>
      <Settings />
      <Keyboard />
    </>
  );
};

export default Home;
