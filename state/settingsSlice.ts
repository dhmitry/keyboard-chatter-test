import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface SettingsState {
  isDarkMode: boolean;
  isSoundEnabled: boolean;
  useFullLayout: boolean;
  chatterThresholdMs: number;
}

const initialState: SettingsState = {
  isDarkMode: true,
  isSoundEnabled: true,
  useFullLayout: true,
  chatterThresholdMs: 60,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleIsDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleIsSoundEnabled: (state) => {
      state.isSoundEnabled = !state.isSoundEnabled;
    },
    toggleUseFullLayout: (state) => {
      state.useFullLayout = !state.useFullLayout;
    },
    setChatterThreshold: (state, action: PayloadAction<number>) => {
      state.chatterThresholdMs = action.payload;
    },
  },
});

export const {
  toggleIsDarkMode,
  toggleIsSoundEnabled,
  toggleUseFullLayout,
  setChatterThreshold,
} = settingsSlice.actions;

export const selectIsDarkMode = (state: RootState) => state.settings.isDarkMode;
export const selectUseFullLayout = (state: RootState) =>
  state.settings.useFullLayout;
export const selectIsSoundEnabled = (state: RootState) =>
  state.settings.isSoundEnabled;
export const selectChatterThreshold = (state: RootState) =>
  state.settings.chatterThresholdMs;

export default settingsSlice.reducer;
