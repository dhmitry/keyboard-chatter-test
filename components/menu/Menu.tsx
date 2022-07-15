import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import FullLayoutToggle from './FullLayoutToggle';
import Information from './Information';
import ResetAllKeysButton from './ResetAllKeysButton';
import ResetBrokenKeysButton from './ResetBrokenKeysButton';
import SoundToggle from './SoundToggle';

const Menu = (): JSX.Element => (
  <div className="m-4 flex flex-row ">
    <div className="mr-4 flex flex-row">
      <Information />
      <ResetBrokenKeysButton />
      <ResetAllKeysButton />
    </div>
    <FullLayoutToggle />
    <SoundToggle />
    <DarkModeToggle />
  </div>
);

export default Menu;
