import React, { MouseEvent, ReactElement, type JSX } from 'react';
import { IconType } from 'react-icons';

interface MenuIconProps {
  ariaLabel?: string;
  children: ReactElement<IconType>;
  onClick?: () => void;
}

const MenuIcon = ({
  ariaLabel,
  children,
  onClick,
}: MenuIconProps): JSX.Element => {
  const handleMouseDown = (event: MouseEvent) => {
    if (event.detail > 1) {
      event.preventDefault();
    }
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      className="m-1 block border-0 bg-transparent p-0 text-zinc-800 opacity-70 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 dark:text-slate-100"
    >
      {children}
    </button>
  );
};

export default MenuIcon;
