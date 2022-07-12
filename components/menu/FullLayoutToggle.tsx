import React from 'react';
import { MdZoomIn, MdZoomOut } from 'react-icons/md';
import MenuButton from './MenuButton';
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
    <MenuButton
      tooltipText={`Show ${useFullLayout ? '60%' : 'full'} layout`}
      onClick={handleClick}
      icon={useFullLayout ? MdZoomIn : MdZoomOut}
    />
  );
};

export default FullLayoutToggle;
