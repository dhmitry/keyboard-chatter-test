import React, { type JSX } from 'react';
import MenuIcon from './MenuIcon';
import { IconType } from 'react-icons';
import Tooltip from '../Tooltip';

interface MenuIconWithTooltipProps {
  tooltipText: string;
  hideTooltipOnClick?: boolean;
  icon: IconType;
  onClick?: () => void;
}

const MenuIconWithTooltip = ({
  tooltipText,
  icon,
  onClick,
}: MenuIconWithTooltipProps): JSX.Element => {
  const Icon = icon;

  return (
    <Tooltip text={tooltipText}>
      <MenuIcon onClick={onClick}>
        <Icon className="h-8 w-8" />
      </MenuIcon>
    </Tooltip>
  );
};

export default MenuIconWithTooltip;
