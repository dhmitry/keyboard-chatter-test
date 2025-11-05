import { Howl } from 'howler';
import React, { useState } from 'react';
import { KeyboardKeys } from '../constants/keyboard';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import {
  addInput,
  handleKeyDown as handleKeyDownAction,
  handleKeyUp as handleKeyUpAction,
  removeLastInput,
} from '../state/keyboardSlice';
import {
  selectChatterThreshold,
  selectIsSoundEnabled,
} from '../state/settingsSlice';

export const useKeyboardListener = () => {
  const dispatch = useAppDispatch();

  const isSoundEnabled = useAppSelector(selectIsSoundEnabled);
  const chatterThresholdMs = useAppSelector(selectChatterThreshold);
  const [sounds, setSounds] = useState<Howl[]>([]);

  const handleKeyDown = (event: KeyboardEvent) => {
    dispatch(handleKeyDownAction(event.code));

    if (isSoundEnabled) {
      let soundsToUse;
      if (sounds.length === 0) {
        soundsToUse = [
          new Howl({ src: ['/sounds/key-1.wav'] }),
          new Howl({ src: ['/sounds/key-2.wav'] }),
          new Howl({ src: ['/sounds/key-3.wav'] }),
        ];

        setSounds(soundsToUse);
      } else {
        soundsToUse = sounds;
      }

      const randomSound =
        soundsToUse[Math.floor(Math.random() * soundsToUse.length)];
      randomSound.play();
    }

    if (event.key === KeyboardKeys['Backspace'].code) {
      dispatch(removeLastInput());
    } else if (event.key.length === 1) {
      dispatch(addInput(event.key));
    }

    event.preventDefault();
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    dispatch(
      handleKeyUpAction({
        code: event.code,
        chatterThresholdMs,
      }),
    );
    event.preventDefault();
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatterThresholdMs, isSoundEnabled]);
};
