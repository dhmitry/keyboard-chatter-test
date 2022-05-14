import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface SettingsState {
  isDarkMode: boolean;
  isSoundEnabled: boolean;
  useFullLayout: boolean;
}

const initialState: SettingsState = {
  isDarkMode: true,
  isSoundEnabled: true,
  useFullLayout: true,
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
  },
});

export const { toggleIsDarkMode, toggleIsSoundEnabled, toggleUseFullLayout } =
  settingsSlice.actions;

export const selectIsDarkMode = (state: RootState) => state.settings.isDarkMode;
export const selectUseFullLayout = (state: RootState) =>
  state.settings.useFullLayout;
export const selectIsSoundEnabled = (state: RootState) =>
  state.settings.isSoundEnabled;

export default settingsSlice.reducer;
