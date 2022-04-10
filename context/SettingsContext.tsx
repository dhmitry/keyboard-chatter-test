import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface SettingsState {
  isDarkMode: boolean | null;
  setIsDarkMode: (isDarkMode: boolean) => void;
  animationsClasses: string;
  setEnableAnimations: (enableAnimations: boolean) => void;
}

const defaultState: SettingsState = {
  isDarkMode: null,
  setIsDarkMode: () => {},
  animationsClasses: '',
  setEnableAnimations: () => {},
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
    if (isDarkMode === null) {
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (prefersDarkMode) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    }
  }, [isDarkMode]);

  const [enableAnimations, setEnableAnimations] = useState<boolean>(false);
  const animationsClasses = useMemo(
    () => (enableAnimations ? 'transition-colors duration-300' : ''),
    [enableAnimations]
  );

  return (
    <SettingsContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        animationsClasses,
        setEnableAnimations,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
