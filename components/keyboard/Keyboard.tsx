import React from 'react';
import { useAppSelector } from '../../state/hooks';
import { selectUseFullLayout } from '../../state/settingsSlice';
import FullLayout from './FullLayout';
import MainKeys from './MainKeys';

const Keyboard = (): JSX.Element => {
  const useFullLayout = useAppSelector(selectUseFullLayout);

  return (
    <div className="bg-zinc-700 p-2  transition-colors duration-300 dark:bg-slate-300">
      {useFullLayout ? <FullLayout /> : <MainKeys showEscape={true} />}
    </div>
  );
};

export default Keyboard;
