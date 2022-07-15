import React from 'react';
import { MdReplay } from 'react-icons/md';
import { useAppDispatch } from '../../state/hooks';
import { resetAllKeys } from '../../state/keyboardSlice';
import MenuIconWithTooltip from './MenuIconWithTooltip';

const ResetAllKeysButton = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(resetAllKeys());
  };

  return (
    <MenuIconWithTooltip
      tooltipText="Reset all keys"
      onClick={handleClick}
      icon={MdReplay}
    />
  );
};

export default ResetAllKeysButton;
