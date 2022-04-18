import { NextPage } from 'next';
import React from 'react';
import Keyboard from '../components/keyboard/Keyboard';
import Menu from '../components/Menu';

const Home: NextPage = () => {
  return (
    <>
      <Menu />
      <Keyboard />
    </>
  );
};

export default Home;
