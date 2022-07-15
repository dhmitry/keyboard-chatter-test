import React from 'react';
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';
import MenuIconWithTooltip from './MenuIconWithTooltip';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import {
  selectIsSoundEnabled,
  toggleIsSoundEnabled,
} from '../../state/settingsSlice';

const DarkModeToggle = (): JSX.Element => {
  const isSoundEnabled = useAppSelector(selectIsSoundEnabled);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleIsSoundEnabled());
  };

  return (
    <MenuIconWithTooltip
      tooltipText={`${isSoundEnabled ? 'Disable' : 'Enable'} sounds`}
      onClick={handleClick}
      icon={isSoundEnabled ? MdVolumeOff : MdVolumeUp}
    />
  );
};

export default DarkModeToggle;
