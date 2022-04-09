import React, { useMemo } from 'react';
import { KeyInfo } from '../context/KeyboardContext';

interface KeyProps {
  keyText: string;
  keyWidth?: KeyWidth;
  info?: KeyInfo;
}

export type KeyWidth =
  | '1'
  | '1.25'
  | '1.5'
  | '1.75'
  | '2'
  | '2.25'
  | '2.75'
  | '6.25';

enum Status {
  Blank,
  Pressed,
  Healthy,
  Broken,
}

const Key = ({ keyText, keyWidth = '1', info }: KeyProps): JSX.Element => {
  const widthStyles = {
    '1': 'w-12',
    '1.25': 'w-15',
    '1.5': 'w-18',
    '1.75': 'w-21',
    '2': 'w-24',
    '2.25': 'w-27',
    '2.75': 'w-33',
    '6.25': 'w-75',
  };

  const statusStyles = {
    [Status.Blank]: 'dark:text-slate-600 text-zinc-400',
    [Status.Pressed]: 'text-yellow-500',
    [Status.Healthy]: 'text-green-600',
    [Status.Broken]: 'text-red-600',
  };

  const status = useMemo(() => {
    let status = Status.Blank;

    if (info) {
      if (info.minElapsedMs === undefined) {
        status = Status.Pressed;
      } else if (info.minElapsedMs && info.minElapsedMs < 60) {
        status = Status.Broken;
      } else {
        status = Status.Healthy;
      }
    }

    return status;
  }, [info]);

  return (
    <div
      className={`h-12 p-1 font-mono ${
        widthStyles[keyWidth]
      } border-2 border-solid border-zinc-800 dark:border-slate-400 ${
        info?.isDown
          ? 'bg-zinc-700 dark:bg-slate-300'
          : 'bg-zinc-600 transition-colors duration-300 dark:bg-slate-200'
      } leading-none ${statusStyles[status]}`}
    >
      {keyText}
    </div>
  );
};

export default Key;
