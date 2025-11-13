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
  if (!raw || typeof raw !== 'object') {
    return undefined;
  }

  const candidate = raw as Partial<PersistableState>;

  if (!candidate.settings || !candidate.keyboard) {
    return undefined;
  }

  const keys =
    typeof candidate.keyboard.keys === 'object' && candidate.keyboard.keys !== null
      ? candidate.keyboard.keys
      : {};

  return {
    settings: candidate.settings,
    keyboard: {
      input: '',
      keys,
    },
  };
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
