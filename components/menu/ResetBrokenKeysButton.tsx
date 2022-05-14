import React from 'react';
import { MdPublishedWithChanges } from 'react-icons/md';
import { useKeyboard } from '../../context/KeyboardContext';
import MenuButton from './MenuButton';

const ResetBrokenKeysButton = (): JSX.Element => {
  const { resetBrokenKeys } = useKeyboard();

  const handleClick = () => {
    resetBrokenKeys();
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
