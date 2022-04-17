import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import ResetKeysButton from './ResetKeysButton';
import SoundToggle from './SoundToggle';

const Menu = (): JSX.Element => {
  return (
    <div className="m-4 flex flex-row ">
      <SoundToggle />
      <DarkModeToggle />
      <div className="ml-auto">
        <ResetKeysButton />
      </div>
    </div>
  );
};

export default Menu;
