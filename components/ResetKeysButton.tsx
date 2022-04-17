import React from 'react';
import { MdRefresh } from 'react-icons/md';
import Tooltip from './Tooltip';
import IconButton from './IconButton';
import { useKeyboard } from '../context/KeyboardContext';

const ResetKeysButton = (): JSX.Element => {
  const { resetKeys } = useKeyboard();

  const handleClick = () => {
    resetKeys();
  };

  return (
    <Tooltip text="Reset keys">
      <IconButton onClick={handleClick}>
        <MdRefresh className="h-8 w-8" />
      </IconButton>
    </Tooltip>
  );
};

export default ResetKeysButton;
