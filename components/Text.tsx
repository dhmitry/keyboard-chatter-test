import React, { useEffect, useState } from 'react';
import { useKeyboard } from '../context/KeyboardContext';
import { useGenerateText } from '../hooks/useGenerateText';
import Letter from './Letter';

const Text = (): JSX.Element => {
  const generateText = useGenerateText();
  const [text, setText] = useState('');

  const { input, clearInput } = useKeyboard();

  useEffect(() => {
    if (text === '' || input.length === text.length) {
      setText(generateText());
      clearInput();
    }
  }, [clearInput, generateText, input.length, text]);

  return (
    <div className="mb-4 max-w-4xl select-none font-mono text-2xl tracking-wider text-zinc-600 dark:text-slate-200">
      {text.split('').map((c, i) => (
        <Letter
          key={i}
          expectedLetter={c}
          actualLetter={input.charAt(i)}
          isCurrent={i === input.length}
        />
      ))}
    </div>
  );
};

export default Text;
