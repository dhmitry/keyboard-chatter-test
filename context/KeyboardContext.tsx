import React, { ReactNode, useContext, useRef, useState } from 'react';
import { useSettings } from './SettingsContext';
import { Howl } from 'howler';
import { useStorage } from '../hooks/useStorage';

export interface KeyInfo {
  isDown: boolean;
  pressCount: number;
  chatterCount: number;
  lastPress?: Date;
  minElapsedMs?: number;
}

export interface Keys {
  [Key: string]: KeyInfo | undefined;
}

interface KeyboardState {
  keys: Keys;
  resetKeys: () => void;
}

const defaultState: KeyboardState = {
  keys: {},
  resetKeys: () => {},
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
  const { enableAnimations, isSoundEnabled } = useSettings();

  const [sounds] = useState<Howl[]>([
    new Howl({ src: ['/sounds/key-1.wav'] }),
    new Howl({ src: ['/sounds/key-2.wav'] }),
    new Howl({ src: ['/sounds/key-3.wav'] }),
  ]);

  const [save, load] = useStorage<Keys>('keys');

  const keysRef = useRef(keys);
  const setKeys = (newKeys: Keys) => {
    keysRef.current = newKeys;
    _setKeys(newKeys);
    save(newKeys);
  };

  const resetKeys = () => {
    setKeys({});
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

    enableAnimations();

    if (isSoundEnabled && !prevKeyInfo?.isDown) {
      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      randomSound.play();
    }

    updateKey(event.code, newKeyInfo);

    event.preventDefault();
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    const prevKeyInfo = keysRef.current[event.code];
    if (prevKeyInfo === undefined) {
      return;
    }

    const currentTime = new Date();
    let elapsedMs;
    let minElapsedMs;
    let isDueToChatter = false;

    if (prevKeyInfo.lastPress) {
      elapsedMs = currentTime.valueOf() - prevKeyInfo.lastPress.valueOf();

      const chatterThreshold = 60;
      isDueToChatter = elapsedMs < chatterThreshold;

      minElapsedMs = prevKeyInfo.minElapsedMs
        ? Math.min(prevKeyInfo.minElapsedMs, elapsedMs)
        : elapsedMs;
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

    const loadedKeys = load();
    if (loadedKeys) {
      setKeys(loadedKeys);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSoundEnabled]);

  return (
    <KeyboardContext.Provider value={{ keys, resetKeys }}>
      {children}
    </KeyboardContext.Provider>
  );
};
