import React, { MouseEvent } from 'react';
import { useSettings } from '../context/SettingsContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import Tooltip from './Tooltip';

const DarkModeToggle = (): JSX.Element => {
  const { isDarkMode, setIsDarkMode, enableAnimations } = useSettings();

  const handleClick = () => {
    enableAnimations();
    setIsDarkMode(!isDarkMode);
  };

  const handleMouseDown = (event: MouseEvent) => {
    if (event.detail > 1) {
      event.preventDefault();
    }
  };

  return (
    <Tooltip text={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
      <div
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        className="opacity-70 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100"
      >
        {isDarkMode ? (
          <MdLightMode className="h-8 w-8 text-slate-100 " />
        ) : (
          <MdDarkMode className="h-8 w-8 text-zinc-800 " />
        )}
      </div>
    </Tooltip>
  );
};

export default DarkModeToggle;
