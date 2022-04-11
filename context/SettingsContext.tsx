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

  const [isSoundEnabled, setIsSoundEnabled] = useState<boolean>(true);

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
