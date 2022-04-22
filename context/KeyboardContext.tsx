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
  resetAllKeys: () => void;
  resetBrokenKeys: () => void;
}

const defaultState: KeyboardState = {
  keys: {},
  resetAllKeys: () => {},
  resetBrokenKeys: () => {},
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

  const [sounds, setSounds] = useState<Howl[]>([]);

  const [save, load] = useStorage<Keys>('keys');

  const keysRef = useRef(keys);
  const setKeys = (newKeys: Keys) => {
    keysRef.current = newKeys;
    _setKeys(newKeys);
    save(newKeys);
  };

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

    enableAnimations();
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
    <KeyboardContext.Provider value={{ keys, resetAllKeys, resetBrokenKeys }}>
      {children}
    </KeyboardContext.Provider>
  );
};
