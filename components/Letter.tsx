import React, { useMemo, type JSX } from 'react';
import { useAppSelector } from '../state/hooks';
import {
  selectInputCharAt,
  selectIsLetterCurrent,
} from '../state/keyboardSlice';

interface LetterProps {
  expectedLetter: string;
  actualLetterIndex: number;
}

const Letter = ({
  expectedLetter,
  actualLetterIndex,
}: LetterProps): JSX.Element => {
  const isCurrent = useAppSelector((state) =>
    selectIsLetterCurrent(state, actualLetterIndex),
  );

  const actualLetter = useAppSelector((state) =>
    selectInputCharAt(state, actualLetterIndex),
  );

  const isCorrect = useMemo(
    () => actualLetter === expectedLetter,
    [actualLetter, expectedLetter],
  );

  const letterClass = useMemo(() => {
    if (actualLetter === '') {
      return 'opacity-50';
    }

    return isCorrect ? 'opacity-100' : 'text-red-600';
  }, [actualLetter, isCorrect]);

  return (
    <span
      className={`
        transition-color
        border-zinc-600
        transition-opacity
        duration-75
        dark:border-slate-200
        ${letterClass}
        ${isCurrent ? 'border-b-2' : 'border-none'}
      `}
    >
      {expectedLetter}
    </span>
  );
};

export default Letter;
