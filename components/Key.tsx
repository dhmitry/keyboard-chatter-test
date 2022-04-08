import React, { useMemo } from 'react';

interface KeyProps {
  keyText: string;
  keyWidth?: KeyWidth;
  info: KeyInfo | undefined;
}

export interface KeyInfo {
  lastPress: Date;
  wasReleased: boolean;
  elapsedMs: number; // TODO: make possible to be undefined before the second press
  minElapsedMs: number; // TODO: make possible to be undefined before the second press
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
    [Status.Blank]: 'border-slate-400',
    [Status.Pressed]: 'border-yellow-400',
    [Status.Healthy]: 'border-green-400',
    [Status.Broken]: 'border-red-500',
  };

  const status = useMemo(() => {
    let status = Status.Blank;

    if (info) {
      if (info.minElapsedMs === 0) {
        status = Status.Pressed;
      } else if (info.minElapsedMs < 60) {
        status = Status.Broken;
      } else {
        status = Status.Healthy;
      }
    }

    return status;
  }, [info]);

  return (
    <div
      className={`h-12 p-1 font-mono ${widthStyles[keyWidth]} border-2 border-solid ${statusStyles[status]} bg-slate-200 leading-none text-slate-800`}
    >
      {keyText} {info ? `${info.elapsedMs} (${info.minElapsedMs})` : ''}
    </div>
  );
};

export default Key;
