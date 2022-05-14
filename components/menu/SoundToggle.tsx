import React from 'react';
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md';
import MenuButton from './MenuButton';
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
    <MenuButton
      tooltipText={`${isSoundEnabled ? 'Disable' : 'Enable'} sounds`}
      onClick={handleClick}
      icon={isSoundEnabled ? MdVolumeOff : MdVolumeUp}
    />
  );
};

export default DarkModeToggle;
