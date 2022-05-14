import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface SettingsState {
  isSystemDarkMode: boolean;
  isDarkMode: boolean;
  isSoundEnabled: boolean;
  useFullLayout: boolean;
}

const initialState: SettingsState = {
  isSystemDarkMode: true,
  isDarkMode: true,
  isSoundEnabled: true,
  useFullLayout: true,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setIsSystemDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isSystemDarkMode = action.payload;
    },
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

export const {
  setIsSystemDarkMode,
  toggleIsDarkMode,
  toggleIsSoundEnabled,
  toggleUseFullLayout,
} = settingsSlice.actions;

export const selectIsSystemDarkMode = (state: RootState) =>
  state.settings.isSystemDarkMode;
export const selectIsDarkMode = (state: RootState) => state.settings.isDarkMode;
export const selectUseFullLayout = (state: RootState) =>
  state.settings.useFullLayout;
export const selectIsSoundEnabled = (state: RootState) =>
  state.settings.isSoundEnabled;

export default settingsSlice.reducer;
