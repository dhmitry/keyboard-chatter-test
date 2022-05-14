import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import keyboardReducer from './keyboardSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    keyboard: keyboardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
