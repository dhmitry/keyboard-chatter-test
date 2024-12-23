import React, { type JSX } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import MenuIconWithTooltip from './MenuIconWithTooltip';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectIsDarkMode, toggleIsDarkMode } from '../../state/settingsSlice';

const DarkModeToggle = (): JSX.Element => {
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleIsDarkMode());
  };

  return (
    <MenuIconWithTooltip
      tooltipText={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      onClick={handleClick}
      icon={isDarkMode ? MdLightMode : MdDarkMode}
    />
  );
};

export default DarkModeToggle;
