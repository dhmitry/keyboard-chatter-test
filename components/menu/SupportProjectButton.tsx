import React, { type JSX } from 'react';
import { MdFavorite } from 'react-icons/md';
import MenuIconWithTooltip from './MenuIconWithTooltip';

const SupportProjectButton = (): JSX.Element => {
  const handleClick = () => {
    window.open('https://buymeacoffee.com/diedrich', '_blank');
  };

  return (
    <MenuIconWithTooltip
      icon={MdFavorite}
      tooltipText="Support this project"
      onClick={handleClick}
    />
  );
};

export default SupportProjectButton;
