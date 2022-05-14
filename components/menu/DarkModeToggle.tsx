import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import MenuButton from './MenuButton';

const DarkModeToggle = (): JSX.Element => {
  const { isDarkMode, setIsDarkMode } = useSettings();

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <MenuButton
      tooltipText={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      onClick={handleClick}
    >
      {isDarkMode ? (
        <MdLightMode className="h-8 w-8" />
      ) : (
        <MdDarkMode className="h-8 w-8" />
      )}
    </MenuButton>
  );
};

export default DarkModeToggle;
