import React, { ReactNode, useContext, useRef, useState } from 'react';
import { Howl } from 'howler';
import { KeyboardKeys } from '../constants/KeyboardKeys';
import { useAppSelector } from '../state/hooks';
import { selectIsSoundEnabled } from '../state/settingsSlice';

export interface KeyInfo {
  isDown: boolean;
  pressCount: number;
  chatterCount: number;
  lastPress?: number;
  minElapsedMs?: number;
}

export interface Keys {
  [Key: string]: KeyInfo | undefined;
}

interface KeyboardState {
  keys: Keys;
  resetAllKeys: () => void;
  resetBrokenKeys: () => void;
  input: string;
  clearInput: () => void;
}

const defaultState: KeyboardState = {
  keys: {},
  resetAllKeys: () => {},
  resetBrokenKeys: () => {},
  input: '',
  clearInput: () => {},
};

export const KeyboardContext = React.createContext<KeyboardState>(defaultState);

export function useKeyboard() {
  return useContext(KeyboardContext);
}

interface KeyboardProviderProps {
  children: ReactNode;
}

export const KeyboardProvider = ({
  children,
}: KeyboardProviderProps): JSX.Element => {
  const [keys, _setKeys] = useState<Keys>({});
  const keysRef = useRef(keys);
  const setKeys = (newKeys: Keys) => {
    keysRef.current = newKeys;
    _setKeys(newKeys);
  };

  const [input, _setInput] = useState('');
  const inputRef = useRef(input);
  const setInput = (newInput: string) => {
    inputRef.current = newInput;
    _setInput(newInput);
  };

  const clearInput = () => {
    setInput('');
  };

  const isSoundEnabled = useAppSelector(selectIsSoundEnabled);

  const [sounds, setSounds] = useState<Howl[]>([]);

  const resetAllKeys = () => {
    setKeys({});
  };

  const resetBrokenKeys = () => {
    const currentKeys = keysRef.current;

    const newKeys: Keys = {};
    Object.keys(currentKeys).forEach((key) => {
      const currentKey = currentKeys[key];
      if (!currentKey || currentKey.chatterCount === 0) {
        newKeys[key] = currentKey;
      }
    });

    setKeys(newKeys);
  };

  const updateKey = (key: string, info: KeyInfo) => {
    const newKeys = {
      ...keysRef.current,
      [key]: info,
    };

    setKeys(newKeys);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const prevKeyInfo = keysRef.current[event.code];

    let newKeyInfo: KeyInfo;
    if (prevKeyInfo) {
      newKeyInfo = {
        ...prevKeyInfo,
        isDown: true,
      };
    } else {
      newKeyInfo = {
        pressCount: 0,
        chatterCount: 0,
        isDown: true,
      };
    }

    updateKey(event.code, newKeyInfo);

    if (isSoundEnabled && !prevKeyInfo?.isDown) {
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
      setInput(inputRef.current.substring(0, inputRef.current.length - 1));
    } else if (event.key.length === 1) {
      setInput(inputRef.current + event.key);
    }

    event.preventDefault();
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    const prevKeyInfo = keysRef.current[event.code];
    if (prevKeyInfo === undefined) {
      return;
    }

    const currentTime = new Date().valueOf();
    let elapsedMs;
    let minElapsedMs;
    let isDueToChatter = false;

    if (prevKeyInfo.lastPress !== undefined) {
      elapsedMs = currentTime - prevKeyInfo.lastPress;

      const chatterThreshold = 60;
      isDueToChatter = elapsedMs < chatterThreshold;

      minElapsedMs =
        prevKeyInfo.minElapsedMs === undefined
          ? elapsedMs
          : Math.min(prevKeyInfo.minElapsedMs, elapsedMs);
    }

    const newKeyInfo: KeyInfo = {
      ...prevKeyInfo,
      isDown: false,
      pressCount: prevKeyInfo.pressCount + 1,
      chatterCount: prevKeyInfo.chatterCount + (isDueToChatter ? 1 : 0),
      lastPress: currentTime,
      minElapsedMs: minElapsedMs,
    };

    updateKey(event.code, newKeyInfo);

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
  }, [isSoundEnabled]);

  return (
    <KeyboardContext.Provider
      value={{ keys, resetAllKeys, resetBrokenKeys, input, clearInput }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};
