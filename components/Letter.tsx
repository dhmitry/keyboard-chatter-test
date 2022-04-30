import React, { useMemo } from 'react';

interface LetterProps {
  expectedLetter: string;
  actualLetter: string;
  isCurrent: boolean;
}

const Letter = ({
  expectedLetter,
  actualLetter,
  isCurrent,
}: LetterProps): JSX.Element => {
  const isCorrect = useMemo(
    () => actualLetter === expectedLetter,
    [actualLetter, expectedLetter]
  );

  return (
    <span
      className={`
        transition-color
        border-zinc-600
        transition-opacity
        duration-75
        dark:border-slate-200
        ${
          actualLetter === ''
            ? 'opacity-50'
            : isCorrect
            ? 'opacity-100'
            : 'text-red-600'
        }
        ${isCurrent ? 'border-b-2' : 'border-none'}
      `}
    >
      {expectedLetter}
    </span>
  );
};

export default React.memo(Letter);
