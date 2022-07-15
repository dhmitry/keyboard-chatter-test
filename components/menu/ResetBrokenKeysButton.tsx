import React from 'react';
import { MdPublishedWithChanges } from 'react-icons/md';
import { useAppDispatch } from '../../state/hooks';
import { resetBrokenKeys } from '../../state/keyboardSlice';
import MenuIconWithTooltip from './MenuIconWithTooltip';

const ResetBrokenKeysButton = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetBrokenKeys());
  };

  return (
    <MenuIconWithTooltip
      tooltipText="Reset broken keys"
      onClick={handleClick}
      icon={MdPublishedWithChanges}
    />
  );
};

export default ResetBrokenKeysButton;
