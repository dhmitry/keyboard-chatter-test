import { NextPage } from 'next';
import React from 'react';
import Keyboard from '../components/keyboard/Keyboard';
import Menu from '../components/Menu';
import Text from '../components/Text';

const Home: NextPage = () => {
  return (
    <>
      <Text />
      <Menu />
      <Keyboard />
    </>
  );
};

export default Home;
