import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';
import MenuButton from './MenuButton';

const DarkModeToggle = (): JSX.Element => {
  const { isSoundEnabled, setIsSoundEnabled } = useSettings();

  const handleClick = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  return (
    <MenuButton
      tooltipText={`${isSoundEnabled ? 'Disable' : 'Enable'} sounds`}
      onClick={handleClick}
    >
      {isSoundEnabled ? (
        <MdVolumeOff className="h-8 w-8" />
      ) : (
        <MdVolumeUp className="h-8 w-8" />
      )}
    </MenuButton>
  );
};

export default DarkModeToggle;
