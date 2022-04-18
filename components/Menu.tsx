import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import FullLayoutToggle from './FullLayoutToggle';
import ResetKeysButton from './ResetKeysButton';
import SoundToggle from './SoundToggle';

const Menu = (): JSX.Element => (
  <div className="m-4 flex flex-row ">
    <FullLayoutToggle />
    <SoundToggle />
    <DarkModeToggle />
    <div className="ml-auto">
      <ResetKeysButton />
    </div>
  </div>
);

export default Menu;
