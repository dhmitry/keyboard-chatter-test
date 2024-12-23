import React, { type JSX } from 'react';
import { MdZoomIn, MdZoomOut } from 'react-icons/md';
import MenuIconWithTooltip from './MenuIconWithTooltip';
import {
  selectUseFullLayout,
  toggleUseFullLayout,
} from '../../state/settingsSlice';
import { useAppDispatch, useAppSelector } from '../../state/hooks';

const FullLayoutToggle = (): JSX.Element => {
  const useFullLayout = useAppSelector(selectUseFullLayout);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleUseFullLayout());
  };

  return (
    <MenuIconWithTooltip
      tooltipText={`Show ${useFullLayout ? '60%' : 'full'} layout`}
      onClick={handleClick}
      icon={useFullLayout ? MdZoomIn : MdZoomOut}
    />
  );
};

export default FullLayoutToggle;
