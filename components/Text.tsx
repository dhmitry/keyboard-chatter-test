import React, { type JSX } from 'react';
import { useAppSelector } from '../state/hooks';
import { selectExpectedText } from '../state/keyboardSlice';
import Letter from './Letter';

const Text = (): JSX.Element => {
  const text = useAppSelector(selectExpectedText);

  return (
    <div className="mb-4 max-w-4xl select-none font-mono text-2xl tracking-wider text-zinc-600 dark:text-slate-200">
      {text.split('').map((letter, index) => (
        <Letter
          key={`${index}-${letter}`}
          expectedLetter={letter}
          actualLetterIndex={index}
        />
      ))}
    </div>
  );
};

export default Text;
