import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface KeyInfo {
  isDown: boolean;
  pressCount: number;
  chatterCount: number;
  lastPress?: number;
  minElapsedMs?: number;
}

export interface Keys {
  [Key: string]: KeyInfo | undefined;
}

interface KeyboardState {
  keys: Keys;
  input: string;
}

const initialState: KeyboardState = {
  keys: {},
  input: '',
};

const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    handleKeyDown: (state, action: PayloadAction<string>) => {
      const prevKeyInfo = state.keys[action.payload];

      let newKeyInfo: KeyInfo;
      if (prevKeyInfo) {
        newKeyInfo = {
          ...prevKeyInfo,
          isDown: true,
        };
      } else {
        newKeyInfo = {
          pressCount: 0,
          chatterCount: 0,
          isDown: true,
        };
      }

      state.keys[action.payload] = newKeyInfo;
    },
    handleKeyUp: (state, action: PayloadAction<string>) => {
      const prevKeyInfo = state.keys[action.payload];

      if (prevKeyInfo === undefined) {
        return state;
      }

      const currentTime = new Date().valueOf();
      let elapsedMs;
      let minElapsedMs;
      let isDueToChatter = false;

      if (prevKeyInfo.lastPress !== undefined) {
        elapsedMs = currentTime - prevKeyInfo.lastPress;

        const chatterThreshold = 60;
        isDueToChatter = elapsedMs < chatterThreshold;

        minElapsedMs =
          prevKeyInfo.minElapsedMs === undefined
            ? elapsedMs
            : Math.min(prevKeyInfo.minElapsedMs, elapsedMs);
      }

      const newKeyInfo: KeyInfo = {
        ...prevKeyInfo,
        isDown: false,
        pressCount: prevKeyInfo.pressCount + 1,
        chatterCount: prevKeyInfo.chatterCount + (isDueToChatter ? 1 : 0),
        lastPress: currentTime,
        minElapsedMs: minElapsedMs,
      };

      state.keys[action.payload] = newKeyInfo;
    },
    resetAllKeys: (state) => {
      state.keys = {};
    },
    resetBrokenKeys: (state) => {
      const newKeys: Keys = {};
      Object.keys(state.keys).forEach((key) => {
        const currentKey = state.keys[key];

        if (!currentKey || currentKey.chatterCount === 0) {
          newKeys[key] = currentKey;
        }
      });

      state.keys = newKeys;
    },
    addInput: (state, action: PayloadAction<string>) => {
      state.input += action.payload;
    },
    removeLastInput: (state) => {
      state.input = state.input.substring(0, state.input.length - 1);
    },
    clearInput: (state) => {
      state.input = '';
    },
  },
});

export const selectKey = (state: RootState, key: string) =>
  state.keyboard.keys[key];

export const selectInput = (state: RootState) => state.keyboard.input;

export const selectInputCharAt = (state: RootState, index: number) =>
  state.keyboard.input.charAt(index);

export const selectIsLetterCurrent = (state: RootState, index: number) =>
  index === state.keyboard.input.length;

export const {
  handleKeyDown,
  handleKeyUp,
  resetAllKeys,
  resetBrokenKeys,
  addInput,
  removeLastInput,
  clearInput,
} = keyboardSlice.actions;

export default keyboardSlice.reducer;
