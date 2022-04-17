import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useStorage } from '../hooks/useStorage';

interface SettingsState {
  prefersDarkMode: boolean | null;
  isDarkMode: boolean | null;
  setIsDarkMode: (newIsDarkMode: boolean) => void;
  animationsClasses: string;
  enableAnimations: () => void;
  isSoundEnabled: boolean;
  setIsSoundEnabled: (newIsSoundEnabled: boolean) => void;
}

interface SavedSettings {
  isDarkMode: boolean | null;
  isSoundEnabled: boolean;
}

const defaultState: SettingsState = {
  prefersDarkMode: null,
  isDarkMode: null,
  setIsDarkMode: () => {},
  animationsClasses: '',
  enableAnimations: () => {},
  isSoundEnabled: true,
  setIsSoundEnabled: () => {},
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
  const [prefersDarkMode, setPrefersDarkMode] = useState<boolean | null>(null);

  const [save, load] = useStorage<SavedSettings>('settings');

  useEffect(() => {
    if (isDarkMode !== null) {
      return;
    }

    const savedSettings = load();
    if (savedSettings !== null) {
      setIsDarkMode(savedSettings.isDarkMode);
      setIsSoundEnabled(savedSettings.isSoundEnabled);
      return;
    }

    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    setPrefersDarkMode(prefersDarkMode);
  }, [isDarkMode, load]);

  useEffect(() => {
    if (prefersDarkMode !== null) {
      setIsDarkMode(prefersDarkMode);
    }
  }, [prefersDarkMode]);

  const [enableAnimations, setEnableAnimations] = useState<boolean>(false);
  const animationsClasses = useMemo(
    () => (enableAnimations ? 'transition-colors duration-300' : ''),
    [enableAnimations]
  );

  const handleEnableAnimations = () => {
    if (!enableAnimations) {
      setEnableAnimations(true);
    }
  };

  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(true);

  const handleSetIsDarkMode = (newIsDarkMode: boolean) => {
    setIsDarkMode(newIsDarkMode);

    const savedSettings: SavedSettings = {
      isDarkMode: newIsDarkMode,
      isSoundEnabled,
    };

    save(savedSettings);
  };

  const handleSetIsSoundEnabled = (newIsSoundEnabled: boolean) => {
    setIsSoundEnabled(newIsSoundEnabled);

    // TODO: come up with a better way so a new handler is not neede for each new setting
    const savedSettings: SavedSettings = {
      isDarkMode,
      isSoundEnabled: newIsSoundEnabled,
    };

    save(savedSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        prefersDarkMode,
        isDarkMode,
        setIsDarkMode: handleSetIsDarkMode,
        animationsClasses,
        enableAnimations: handleEnableAnimations,
        isSoundEnabled,
        setIsSoundEnabled: handleSetIsSoundEnabled,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
