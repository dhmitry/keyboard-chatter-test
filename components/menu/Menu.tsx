import React, { type JSX } from 'react';
import DarkModeToggle from './DarkModeToggle';
import FullLayoutToggle from './FullLayoutToggle';
import Information from './Information';
import ResetAllKeysButton from './ResetAllKeysButton';
import ResetBrokenKeysButton from './ResetBrokenKeysButton';
import SoundToggle from './SoundToggle';
import ReportBugButton from './ReportBugButton';

const Menu = (): JSX.Element => (
  <div className="m-4 flex flex-row ">
    <div className="mr-4 flex flex-row">
      <ResetBrokenKeysButton />
      <ResetAllKeysButton />
    </div>
    <FullLayoutToggle />
    <SoundToggle />
    <DarkModeToggle />
    <div className="ml-4 flex flex-row">
      <Information />
      <ReportBugButton />
    </div>
  </div>
);

export default Menu;
