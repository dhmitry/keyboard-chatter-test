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
  setIsDarkMode: (isDarkMode: boolean) => void;
  animationsClasses: string;
  enableAnimations: () => void;
  isSoundEnabled: boolean;
  setIsSoundEnabled: (isSoundEnabled: boolean) => void;
  useFullLayout: boolean;
  setUseFullLayout: (useFullLayout: boolean) => void;
}

interface SavedSettings {
  isDarkMode: boolean;
  isSoundEnabled: boolean;
  useFullLayout: boolean;
}

const defaultState: SettingsState = {
  prefersDarkMode: null,
  isDarkMode: null,
  setIsDarkMode: () => {},
  animationsClasses: '',
  enableAnimations: () => {},
  isSoundEnabled: true,
  setIsSoundEnabled: () => {},
  useFullLayout: true,
  setUseFullLayout: () => {},
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
      setUseFullLayout(savedSettings.useFullLayout);

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
  const [useFullLayout, setUseFullLayout] = useState(true);

  useEffect(() => {
    if (isDarkMode !== null) {
      const savedSettings: SavedSettings = {
        isDarkMode,
        isSoundEnabled,
        useFullLayout,
      };

      save(savedSettings);
    }
  }, [isDarkMode, isSoundEnabled, save, useFullLayout]);

  return (
    <SettingsContext.Provider
      value={{
        prefersDarkMode,
        isDarkMode,
        setIsDarkMode,
        animationsClasses,
        enableAnimations: handleEnableAnimations,
        isSoundEnabled,
        setIsSoundEnabled,
        useFullLayout,
        setUseFullLayout,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
