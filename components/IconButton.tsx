import React, { MouseEvent, ReactElement } from 'react';
import { IconType } from 'react-icons';
import { useSettings } from '../context/SettingsContext';

interface IconButtonProps {
  children: ReactElement<IconType>;
  onClick: () => void;
}

const IconButton = ({ children, onClick }: IconButtonProps): JSX.Element => {
  const { isDarkMode } = useSettings();

  const handleMouseDown = (event: MouseEvent) => {
    if (event.detail > 1) {
      event.preventDefault();
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseDown={handleMouseDown}
      className={`m-1 opacity-70 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 ${
        isDarkMode ? 'text-slate-100' : 'text-zinc-800'
      }`}
    >
      {children}
    </div>
  );
};

export default IconButton;
