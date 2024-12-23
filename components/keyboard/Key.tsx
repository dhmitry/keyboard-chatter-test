import React, { useMemo, type JSX } from 'react';
import { keyHeightStyles, keyWidthStyles } from '../../constants/keyboard';
import { KeyboardKey } from '../../constants/keyboard';
import { useAppSelector } from '../../state/hooks';
import { selectKey } from '../../state/keyboardSlice';
import Tooltip from '../Tooltip';

interface KeyProps {
  keyboardKey: KeyboardKey;
}

enum Status {
  Blank = 'blank',
  Uncertain = 'uncertain',
  Healthy = 'healthy',
  Broken = 'broken',
}

const Key = ({ keyboardKey }: KeyProps): JSX.Element => {
  const keyInfo = useAppSelector((state) => selectKey(state, keyboardKey.code));

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

  const status = useMemo(() => {
    let status = Status.Blank;

    if (keyInfo) {
      if (keyInfo.chatterCount > 0) {
        status = Status.Broken;
      } else if (keyInfo.pressCount < 100) {
        status = Status.Uncertain;
      } else {
        status = Status.Healthy;
      }
    }

    return status;
  }, [keyInfo]);

  return (
    <Tooltip
      text={
        keyboardKey?.text && (
          <>
            <p>
              &apos;{keyboardKey.text}&apos; - {status}
            </p>
            {keyInfo && keyInfo.minElapsedMs && (
              <>
                <p>
                  {keyInfo.pressCount} presses ({keyInfo.chatterCount} due to
                  chatter)
                </p>
                <p>Min elapsed: {keyInfo.minElapsedMs}ms</p>
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
          keyInfo?.isDown
            ? 'bg-zinc-700 dark:bg-slate-300'
            : 'bg-zinc-600 transition-colors duration-300 dark:bg-slate-200'
        } select-none leading-none ${statusStyles[status]}`}
      >
        {keyboardKey?.text}
      </div>
    </Tooltip>
  );
};

export default Key;
