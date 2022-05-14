import React, { ReactElement } from 'react';
import IconButton from '../IconButton';
import { IconType } from 'react-icons';
import { useSettings } from '../../context/SettingsContext';
import Tooltip from '../Tooltip';

interface MenuButtonProps {
  tooltipText: string;
  hideTooltipOnClick?: boolean;
  children: ReactElement<IconType>;
  onClick: () => void;
}

const MenuButton = ({
  tooltipText,
  hideTooltipOnClick,
  children,
  onClick,
}: MenuButtonProps): JSX.Element => {
  const { enableAnimations } = useSettings();

  const handleClick = () => {
    enableAnimations();
    onClick();
  };

  return (
    <Tooltip text={tooltipText} hideOnClick={hideTooltipOnClick}>
      <IconButton onClick={handleClick}>{children}</IconButton>
    </Tooltip>
  );
};

export default MenuButton;
