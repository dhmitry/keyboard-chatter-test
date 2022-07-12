import React from 'react';
import IconButton from '../IconButton';
import { IconType } from 'react-icons';
import Tooltip from '../Tooltip';

interface MenuButtonProps {
  tooltipText: string;
  hideTooltipOnClick?: boolean;
  icon: IconType;
  onClick: () => void;
}

const MenuButton = ({
  tooltipText,
  icon,
  onClick,
}: MenuButtonProps): JSX.Element => {
  const Icon = icon;

  return (
    <Tooltip text={tooltipText}>
      <IconButton onClick={onClick}>
        <Icon className="h-8 w-8" />
      </IconButton>
    </Tooltip>
  );
};

export default MenuButton;
