import React, { ReactNode, useContext, useRef, useState } from 'react';
import { useSettings } from './SettingsContext';

export interface KeyInfo {
  isDown: boolean;
  lastPress?: Date;
  minElapsedMs?: number;
}

export interface Keys {
  [Key: string]: KeyInfo | undefined;
}

interface KeyboardState {
  keys: Keys;
}

const defaultState: KeyboardState = {
  keys: {},
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
  const { enableAnimations } = useSettings();

  const keysRef = useRef(keys);
  const setKeys = (newKeys: Keys) => {
    keysRef.current = newKeys;
    _setKeys(newKeys);
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

    const newKeyInfo: KeyInfo = {
      ...prevKeyInfo,
      isDown: true,
    };

    enableAnimations();
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

    if (prevKeyInfo.lastPress) {
      elapsedMs = currentTime.valueOf() - prevKeyInfo.lastPress.valueOf();

      minElapsedMs = prevKeyInfo.minElapsedMs
        ? Math.min(prevKeyInfo.minElapsedMs, elapsedMs)
        : elapsedMs;
    }

    const newKeyInfo: KeyInfo = {
      ...prevKeyInfo,
      isDown: false,
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
  }, []);

  return (
    <KeyboardContext.Provider value={{ keys }}>
      {children}
    </KeyboardContext.Provider>
  );
};
