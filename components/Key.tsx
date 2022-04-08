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
    [Status.Blank]: {
      border: 'border-slate-400',
      text: 'text-slate-700',
    },
    [Status.Pressed]: {
      border: 'border-yellow-400',
      text: 'text-yellow-700',
    },
    [Status.Healthy]: {
      border: 'border-green-400',
      text: 'text-green-700',
    },
    [Status.Broken]: {
      border: 'border-red-500',
      text: 'text-red-800',
    },
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
      } border-2 border-solid ${statusStyles[status].border} ${
        info?.isDown ? 'bg-slate-300' : 'bg-slate-200'
      } leading-none ${statusStyles[status].text}`}
    >
      {keyText}
    </div>
  );
};

export default Key;
