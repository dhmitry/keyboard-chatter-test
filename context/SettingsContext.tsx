import React, {
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface SettingsState {
  prefersDarkMode: boolean | null;
  isDarkMode: boolean | null;
  setIsDarkMode: (isDarkMode: boolean) => void;
  animationsClasses: string;
  enableAnimations: () => void;
}

interface SavedSettings {
  isDarkMode: boolean;
}

const defaultState: SettingsState = {
  prefersDarkMode: null,
  isDarkMode: null,
  setIsDarkMode: () => {},
  animationsClasses: '',
  enableAnimations: () => {},
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

  useEffect(() => {
    if (isDarkMode !== null) {
      return;
    }

    const savedSettings = load();
    if (savedSettings !== null) {
      setIsDarkMode(savedSettings.isDarkMode);
      return;
    }

    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    setPrefersDarkMode(prefersDarkMode);
  }, [isDarkMode]);

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

  const settingsKey = 'settings';

  const load = (): SavedSettings | null => {
    const settingsJson = localStorage.getItem(settingsKey);

    if (settingsJson === null) {
      return null;
    }

    let savedSettings: SavedSettings | null = null;
    try {
      savedSettings = JSON.parse(settingsJson);
    } catch {
      // clear saved settings if JSON is invaliid
      localStorage.removeItem(settingsKey);
    }

    return savedSettings;
  };

  const save = (savedSettings: SavedSettings) => {
    if (isDarkMode === null) {
      return;
    }

    const settingsJson = JSON.stringify(savedSettings);
    localStorage.setItem(settingsKey, settingsJson);
  };

  const handleSetIsDarkMode = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);

    const savedSettings: SavedSettings = {
      isDarkMode,
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
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
