import React, { MouseEvent, ReactElement } from 'react';
import { IconType } from 'react-icons';

interface MenuIconProps {
  children: ReactElement<IconType>;
  onClick?: () => void;
}

const MenuIcon = ({ children, onClick }: MenuIconProps): JSX.Element => {
  const handleMouseDown = (event: MouseEvent) => {
    if (event.detail > 1) {
      event.preventDefault();
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseDown={handleMouseDown}
      className="m-1 text-zinc-800 opacity-70 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 dark:text-slate-100"
    >
      {children}
    </div>
  );
};

export default MenuIcon;
