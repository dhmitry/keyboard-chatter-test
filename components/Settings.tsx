import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import SoundToggle from './SoundToggle';

const Settings = (): JSX.Element => {
  return (
    <div className="m-4 flex flex-row">
      <SoundToggle />
      <DarkModeToggle />
    </div>
  );
};

export default Settings;
