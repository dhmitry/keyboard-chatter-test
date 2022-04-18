import React from 'react';
import { MdRefresh } from 'react-icons/md';
import { useKeyboard } from '../context/KeyboardContext';
import MenuButton from './MenuButton';

const ResetKeysButton = (): JSX.Element => {
  const { resetKeys } = useKeyboard();

  const handleClick = () => {
    resetKeys();
  };

  return (
    <MenuButton tooltipText="Reset keys" onClick={handleClick}>
      <MdRefresh className="h-8 w-8" />
    </MenuButton>
  );
};

export default ResetKeysButton;
