import React, { ReactElement } from 'react';
import IconButton from './IconButton';
import { IconType } from 'react-icons';
import { useSettings } from '../context/SettingsContext';
import Tooltip from './Tooltip';

interface MenuButtonProps {
  tooltipText: string;
  children: ReactElement<IconType>;
  onClick: () => void;
}

const MenuButton = ({
  tooltipText,
  children,
  onClick,
}: MenuButtonProps): JSX.Element => {
  const { enableAnimations } = useSettings();

  const handleClick = () => {
    enableAnimations();
    onClick();
  };

  return (
    <Tooltip text={tooltipText}>
      <IconButton onClick={handleClick}>{children}</IconButton>
    </Tooltip>
  );
};

export default MenuButton;
