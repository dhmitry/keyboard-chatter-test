import React from 'react';
import { useSettings } from '../../context/SettingsContext';
import FullLayout from './FullLayout';
import MainKeys from './MainKeys';

const Keyboard = (): JSX.Element => {
  const { animationsClasses } = useSettings();

  const { useFullLayout } = useSettings();

  return (
    <div className={`bg-zinc-700 p-2  dark:bg-slate-300 ${animationsClasses}`}>
      {useFullLayout ? <FullLayout /> : <MainKeys showEscape={true} />}
    </div>
  );
};

export default React.memo(Keyboard);
