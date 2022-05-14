import React from 'react';
import { MdReplay } from 'react-icons/md';
import { useKeyboard } from '../../context/KeyboardContext';
import MenuButton from './MenuButton';

const ResetAllKeysButton = (): JSX.Element => {
  const { resetAllKeys } = useKeyboard();

  const handleClick = () => {
    resetAllKeys();
  };

  return (
    <MenuButton tooltipText="Reset all keys" onClick={handleClick}>
      <MdReplay className="h-8 w-8" />
    </MenuButton>
  );
};

export default ResetAllKeysButton;
