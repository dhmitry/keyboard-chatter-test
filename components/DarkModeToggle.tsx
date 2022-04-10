import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const DarkModeToggle = (): JSX.Element => {
  const { isDarkMode, setIsDarkMode, enableAnimations } = useSettings();

  const handleClick = () => {
    enableAnimations();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      onClick={handleClick}
      className="opacity-80 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100"
    >
      {isDarkMode ? (
        <MdLightMode className="h-8 w-8 text-slate-100 " />
      ) : (
        <MdDarkMode className="h-8 w-8 text-zinc-800 " />
      )}
    </div>
  );
};

export default DarkModeToggle;
