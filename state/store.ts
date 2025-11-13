import { configureStore } from '@reduxjs/toolkit';
import settingsReducer, { SettingsState } from './settingsSlice';
import keyboardReducer, { KeyboardState } from './keyboardSlice';
import {
  loadPersistedState,
  setupStorePersistence,
} from './persistence';

interface PersistableState {
  settings: SettingsState;
  keyboard: KeyboardState;
}

const selectPersistableState = (state: PersistableState): PersistableState => ({
  settings: state.settings,
  keyboard: {
    ...state.keyboard,
    input: '',
  },
});

const parsePersistedState = (
  raw: unknown
): Partial<PersistableState> | undefined => {
  if (!raw || typeof raw !== 'object' || raw === null) {
    return undefined;
  }

  const candidate = raw as Partial<Record<keyof PersistableState, unknown>>;
  const result: Partial<PersistableState> = {};

  const rawSettings = candidate.settings;

  if (
    rawSettings &&
    typeof rawSettings === 'object' &&
    rawSettings !== null
  ) {
    const settingsCandidate = rawSettings as Partial<SettingsState>;

    if (
      typeof settingsCandidate.isDarkMode === 'boolean' &&
      typeof settingsCandidate.isSoundEnabled === 'boolean' &&
      typeof settingsCandidate.useFullLayout === 'boolean'
    ) {
      result.settings = {
        isDarkMode: settingsCandidate.isDarkMode,
        isSoundEnabled: settingsCandidate.isSoundEnabled,
        useFullLayout: settingsCandidate.useFullLayout,
      };
    }
  }

  const rawKeyboard = candidate.keyboard;

  if (rawKeyboard && typeof rawKeyboard === 'object' && rawKeyboard !== null) {
    const keyboardCandidate = rawKeyboard as Partial<KeyboardState>;
    const keys =
      keyboardCandidate.keys && typeof keyboardCandidate.keys === 'object'
        ? keyboardCandidate.keys
        : {};

    result.keyboard = {
      input: '',
      keys,
    };
  }

  return Object.keys(result).length > 0 ? result : undefined;
};

const preloadedState = loadPersistedState(parsePersistedState);

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    keyboard: keyboardReducer,
  },
  preloadedState,
});

setupStorePersistence(
  store.subscribe,
  store.getState,
  (state) => selectPersistableState(state as PersistableState)
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
