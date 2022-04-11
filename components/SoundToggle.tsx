import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';
import Tooltip from './Tooltip';
import IconButton from './IconButton';

const DarkModeToggle = (): JSX.Element => {
  const { isSoundEnabled, setIsSoundEnabled } = useSettings();

  const handleClick = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  return (
    <Tooltip text={`${isSoundEnabled ? 'Disable' : 'Enable'} sounds`}>
      <IconButton onClick={handleClick}>
        {isSoundEnabled ? (
          <MdVolumeOff className="h-8 w-8" />
        ) : (
          <MdVolumeUp className="h-8 w-8" />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default DarkModeToggle;
