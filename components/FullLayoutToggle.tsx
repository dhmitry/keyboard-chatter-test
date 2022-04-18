import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { MdZoomIn, MdZoomOut } from 'react-icons/md';
import MenuButton from './MenuButton';

const FullLayoutToggle = (): JSX.Element => {
  const { useFullLayout, setUseFullLayout } = useSettings();

  const handleClick = () => {
    setUseFullLayout(!useFullLayout);
  };

  // TODO: fix tooltip bug when switching
  return (
    <MenuButton
      tooltipText={`Show ${useFullLayout ? '60%' : 'full'} layout`}
      hideTooltipOnClick={true}
      onClick={handleClick}
    >
      {useFullLayout ? (
        <MdZoomIn className="h-8 w-8" />
      ) : (
        <MdZoomOut className="h-8 w-8" />
      )}
    </MenuButton>
  );
};

export default FullLayoutToggle;
