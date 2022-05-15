import React from 'react';
import { MdPublishedWithChanges } from 'react-icons/md';
import { useAppDispatch } from '../../state/hooks';
import { resetBrokenKeys } from '../../state/keyboardSlice';
import MenuButton from './MenuButton';

const ResetBrokenKeysButton = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetBrokenKeys());
  };

  return (
    <MenuButton
      tooltipText="Reset broken keys"
      onClick={handleClick}
      icon={MdPublishedWithChanges}
    />
  );
};

export default ResetBrokenKeysButton;
