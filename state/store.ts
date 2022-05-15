import { configureStore } from '@reduxjs/toolkit';
import settingsReducer, { SettingsState } from './settingsSlice';
import keyboardReducer, { KeyboardState } from './keyboardSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from 'redux-persist';

const persistConfigSettings: PersistConfig<SettingsState> = {
  key: 'settings',
  version: 1,
  storage,
};

const persistConfigKeyboard: PersistConfig<KeyboardState> = {
  key: 'keyboard',
  version: 1,
  storage,
  blacklist: ['input'],
};

const persistedSettingsReducer = persistReducer(
  persistConfigSettings,
  settingsReducer
);
const persistedKeyboardReducer = persistReducer(
  persistConfigKeyboard,
  keyboardReducer
);

export const store = configureStore({
  reducer: {
    settings: persistedSettingsReducer,
    keyboard: persistedKeyboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
