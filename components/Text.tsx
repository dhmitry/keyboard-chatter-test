import React, { useEffect, useState } from 'react';
import { words } from '../constants/words';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { clearInput, selectInput } from '../state/keyboardSlice';
import Letter from './Letter';

const Text = (): JSX.Element => {
  const generateText = (): string => {
    let sentence = '';

    for (let i = 0; i < 30; i++) {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      sentence += randomWord + (i === 29 ? '' : ' ');
    }

    return sentence;
  };

  const [text, setText] = useState('');

  const dispatch = useAppDispatch();
  const needsToBeReset = useAppSelector(
    (state) => state.keyboard.input.length == text.length
  );

  useEffect(() => {
    if (text === '' || needsToBeReset) {
      setText(generateText());
      dispatch(clearInput());
    }
  }, [dispatch, needsToBeReset, text]);

  return (
    <div className="mb-4 max-w-4xl select-none font-mono text-2xl tracking-wider text-zinc-600 dark:text-slate-200">
      {text.split('').map((c, i) => (
        <Letter key={i} expectedLetter={c} actualLetterIndex={i} />
      ))}
    </div>
  );
};

export default Text;
