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
  | '1.875'
  | '2'
  | '2.25'
  | '2.5'
  | '2.75'
  | '7.25';

enum Status {
  Blank,
  Pressed,
  Healthy,
  Broken,
}

const Key = ({ keyText, keyWidth = '1', info }: KeyProps): JSX.Element => {
  const widthStyles = {
    '1': 'w-16',
    '1.25': 'w-20',
    '1.5': 'w-24',
    '1.875': 'w-30',
    '2': 'w-32',
    '2.25': 'w-36',
    '2.5': 'w-40',
    '2.75': 'w-44',
    '7.25': 'w-116',
  };

  const statusStyles = {
    [Status.Blank]: 'border-gray-300',
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
      className={`m-1 h-16 ${widthStyles[keyWidth]} rounded-md border border-solid ${statusStyles[status]}`}
    >
      {keyText} {info ? `${info.elapsedMs} (${info.minElapsedMs})` : ''}
    </div>
  );
};

export default Key;
