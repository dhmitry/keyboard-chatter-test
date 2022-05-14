import React, { useMemo } from 'react';
import { keyHeightStyles, keyWidthStyles } from '../../constants/KeyboardKeys';
import { KeyboardKey } from '../../constants/KeyboardKeys';
import { useKeyboard } from '../../context/KeyboardContext';
import { useSettings } from '../../context/SettingsContext';
import Tooltip from '../Tooltip';

interface KeyProps {
  keyboardKey?: KeyboardKey;
}

enum Status {
  Blank = 'blank',
  Uncertain = 'uncertain',
  Healthy = 'healthy',
  Broken = 'broken',
}

const Key = ({ keyboardKey }: KeyProps): JSX.Element => {
  const { animationsClasses } = useSettings();
  const { keys } = useKeyboard();

  const statusStyles = {
    [Status.Blank]: 'dark:text-slate-600 text-zinc-400',
    [Status.Uncertain]: 'text-yellow-500',
    [Status.Healthy]: 'text-green-600',
    [Status.Broken]: 'text-red-600',
  };

  const width = useMemo(() => keyboardKey?.width ?? '1', [keyboardKey?.width]);
  const height = useMemo(
    () => keyboardKey?.height ?? '1',
    [keyboardKey?.height]
  );

  const info = useMemo(
    () => (keyboardKey ? keys[keyboardKey.code] : null),
    [keyboardKey, keys]
  );

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
        keyboardKey?.text && (
          <>
            <p>
              &apos;{keyboardKey.text}&apos; - {status}
            </p>
            {info && info.minElapsedMs && (
              <>
                <p>
                  {info.pressCount} presses ({info.chatterCount} due to chatter)
                </p>
                <p>Min elapsed: {info.minElapsedMs}ms</p>
              </>
            )}
          </>
        )
      }
    >
      <div
        className={`${keyHeightStyles[height]} p-1 font-mono ${
          keyWidthStyles[width]
        } border-2 border-solid border-zinc-800 dark:border-slate-400 ${
          info?.isDown
            ? 'bg-zinc-700 dark:bg-slate-300'
            : `bg-zinc-600 dark:bg-slate-200 ${animationsClasses}`
        } select-none leading-none ${statusStyles[status]}`}
      >
        {keyboardKey?.text}
      </div>
    </Tooltip>
  );
};

export default Key;
