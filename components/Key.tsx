import React, { useMemo } from 'react';
import { KeyInfo } from '../context/KeyboardContext';
import { useSettings } from '../context/SettingsContext';
import Tooltip from './Tooltip';

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
  Blank = 'blank',
  Uncertain = 'uncertain',
  Healthy = 'healthy',
  Broken = 'broken',
}

const Key = ({ keyText, keyWidth = '1', info }: KeyProps): JSX.Element => {
  const { animationsClasses } = useSettings();

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
    [Status.Uncertain]: 'text-yellow-500',
    [Status.Healthy]: 'text-green-600',
    [Status.Broken]: 'text-red-600',
  };

  const status = useMemo(() => {
    let status = Status.Blank;

    if (info) {
      if (info.chatterCount > 0) {
        status = Status.Broken;
      } else if (info.pressCount < 100) {
        status = Status.Uncertain;
      } else {
        status = Status.Healthy;
      }
    }

    return status;
  }, [info]);

  return (
    <Tooltip
      text={
        keyText && (
          <div>
            <p>
              &apos;{keyText}&apos; - {status}
            </p>
            {info && info.minElapsedMs && (
              <div>
                <p>
                  {info.pressCount} presses ({info.chatterCount} due to chatter)
                </p>
                <p>Min elapsed: {info.minElapsedMs}ms</p>
              </div>
            )}
          </div>
        )
      }
    >
      <div
        className={`h-12 p-1 font-mono ${
          widthStyles[keyWidth]
        } border-2 border-solid border-zinc-800 dark:border-slate-400 ${
          info?.isDown
            ? 'bg-zinc-700 dark:bg-slate-300'
            : `bg-zinc-600 dark:bg-slate-200 ${animationsClasses}`
        } select-none leading-none ${statusStyles[status]}`}
      >
        {keyText}
      </div>
    </Tooltip>
  );
};

export default Key;
