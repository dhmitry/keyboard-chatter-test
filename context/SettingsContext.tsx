import React, { ReactNode, useContext, useEffect, useState } from 'react';

interface SettingsState {
  isDarkMode: boolean | null;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const defaultState: SettingsState = {
  isDarkMode: null,
  setIsDarkMode: () => {},
};

export const SettingsContext = React.createContext<SettingsState>(defaultState);

export function useSettings() {
  return useContext(SettingsContext);
}

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider = ({
  children,
}: SettingsProviderProps): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (prefersDarkMode) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  return (
    <SettingsContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </SettingsContext.Provider>
  );
};
