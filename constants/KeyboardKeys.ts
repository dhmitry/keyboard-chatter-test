export type KeySize =
  | '0.25'
  | '0.5'
  | '1'
  | '1.25'
  | '1.5'
  | '1.75'
  | '2'
  | '2.25'
  | '2.75'
  | '6.25';

export interface KeyboardKey {
  text: string;
  code: string;
  width: KeySize;
  height: KeySize;
}

export const KeyboardKeys: {
  [Key: string]: KeyboardKey;
} = {
  Escape: { text: 'esc', code: 'Escape', width: '1', height: '1' },
  Digit1: { text: '1', code: 'Digit1', width: '1', height: '1' },
  Digit2: { text: '2', code: 'Digit2', width: '1', height: '1' },
  Digit3: { text: '3', code: 'Digit3', width: '1', height: '1' },
  Digit4: { text: '4', code: 'Digit4', width: '1', height: '1' },
  Digit5: { text: '5', code: 'Digit5', width: '1', height: '1' },
  Digit6: { text: '6', code: 'Digit6', width: '1', height: '1' },
  Digit7: { text: '7', code: 'Digit7', width: '1', height: '1' },
  Digit8: { text: '8', code: 'Digit8', width: '1', height: '1' },
  Digit9: { text: '9', code: 'Digit9', width: '1', height: '1' },
  Digit0: { text: '0', code: 'Digit0', width: '1', height: '1' },
  Minus: { text: '-', code: 'Minus', width: '1', height: '1' },
  Equal: { text: '=', code: 'Equal', width: '1', height: '1' },
  Backspace: { text: 'backspace', code: 'Backspace', width: '2', height: '1' },
  Tab: { text: 'tab', code: 'Tab', width: '1.5', height: '1' },
  Q: { text: 'q', code: 'KeyQ', width: '1', height: '1' },
  W: { text: 'w', code: 'KeyW', width: '1', height: '1' },
  E: { text: 'e', code: 'KeyE', width: '1', height: '1' },
  R: { text: 'r', code: 'KeyR', width: '1', height: '1' },
  T: { text: 't', code: 'KeyT', width: '1', height: '1' },
  Y: { text: 'y', code: 'KeyY', width: '1', height: '1' },
  U: { text: 'u', code: 'KeyU', width: '1', height: '1' },
  I: { text: 'i', code: 'KeyI', width: '1', height: '1' },
  O: { text: 'o', code: 'KeyO', width: '1', height: '1' },
  P: { text: 'p', code: 'KeyP', width: '1', height: '1' },
  BracketLeft: { text: '[', code: 'BracketLeft', width: '1', height: '1' },
  BracketRight: { text: ']', code: 'BracketRight', width: '1', height: '1' },
  Backslash: { text: '\\', code: 'Backslash', width: '1.5', height: '1' },
  CapsLock: { text: 'caps', code: 'CapsLock', width: '1.75', height: '1' },
  A: { text: 'a', code: 'KeyA', width: '1', height: '1' },
  S: { text: 's', code: 'KeyS', width: '1', height: '1' },
  D: { text: 'd', code: 'KeyD', width: '1', height: '1' },
  F: { text: 'f', code: 'KeyF', width: '1', height: '1' },
  G: { text: 'g', code: 'KeyG', width: '1', height: '1' },
  H: { text: 'h', code: 'KeyH', width: '1', height: '1' },
  J: { text: 'j', code: 'KeyJ', width: '1', height: '1' },
  K: { text: 'k', code: 'KeyK', width: '1', height: '1' },
  L: { text: 'l', code: 'KeyL', width: '1', height: '1' },
  Semicolon: { text: ';', code: 'Semicolon', width: '1', height: '1' },
  Quote: { text: "'", code: 'Quote', width: '1', height: '1' },
  Enter: { text: 'enter', code: 'Enter', width: '2.25', height: '1' },
  ShiftLeft: { text: 'lshift', code: 'ShiftLeft', width: '2.25', height: '1' },
  Z: { text: 'z', code: 'KeyZ', width: '1', height: '1' },
  X: { text: 'x', code: 'KeyX', width: '1', height: '1' },
  C: { text: 'c', code: 'KeyC', width: '1', height: '1' },
  V: { text: 'v', code: 'KeyV', width: '1', height: '1' },
  B: { text: 'b', code: 'KeyB', width: '1', height: '1' },
  N: { text: 'n', code: 'KeyN', width: '1', height: '1' },
  M: { text: 'm', code: 'KeyM', width: '1', height: '1' },
  Comma: { text: ',', code: 'Comma', width: '1', height: '1' },
  Period: { text: '.', code: 'Period', width: '1', height: '1' },
  Slash: { text: '/', code: 'Slash', width: '1', height: '1' },
  ShiftRight: {
    text: 'rshift',
    code: 'ShiftRight',
    width: '2.75',
    height: '1',
  },
  ControlLeft: {
    text: 'lctrl',
    code: 'ControlLeft',
    width: '1.25',
    height: '1',
  },
  MetaLeft: { text: 'lmeta', code: 'MetaLeft', width: '1.25', height: '1' },
  MetaRight: { text: 'rmeta', code: 'MetaRight', width: '1.25', height: '1' },
  AltLeft: { text: 'lalt', code: 'AltLeft', width: '1.25', height: '1' },
  Space: { text: 'space', code: 'Space', width: '6.25', height: '1' },
  AltRight: { text: 'ralt', code: 'AltRight', width: '1.25', height: '1' },
  ControlRight: {
    text: 'rctrl',
    code: 'ControlRight',
    width: '1.25',
    height: '1',
  },
  ContextMenu: {
    text: 'menu',
    code: 'ContextMenu',
    width: '1.25',
    height: '1',
  },
  Backquote: { text: '`', code: 'Backquote', width: '1', height: '1' },
  F1: { text: 'f1', code: 'F1', width: '1', height: '1' },
  F2: { text: 'f2', code: 'F2', width: '1', height: '1' },
  F3: { text: 'f3', code: 'F3', width: '1', height: '1' },
  F4: { text: 'f4', code: 'F4', width: '1', height: '1' },
  F5: { text: 'f5', code: 'F5', width: '1', height: '1' },
  F6: { text: 'f6', code: 'F6', width: '1', height: '1' },
  F7: { text: 'f7', code: 'F7', width: '1', height: '1' },
  F8: { text: 'f8', code: 'F8', width: '1', height: '1' },
  F9: { text: 'f9', code: 'F9', width: '1', height: '1' },
  F10: { text: 'f10', code: 'F10', width: '1', height: '1' },
  F11: { text: 'f11', code: 'F11', width: '1', height: '1' },
  F12: { text: 'f12', code: 'F12', width: '1', height: '1' },
  PrintScreen: { text: 'prsc', code: 'PrintScreen', width: '1', height: '1' },
  ScrollLock: { text: 'scrl', code: 'ScrollLock', width: '1', height: '1' },
  PauseBreak: { text: 'psbr', code: 'Pause', width: '1', height: '1' },
  Insert: { text: 'ins', code: 'Insert', width: '1', height: '1' },
  Home: { text: 'home', code: 'Home', width: '1', height: '1' },
  PageUp: { text: 'pgup', code: 'PageUp', width: '1', height: '1' },
  Delete: { text: 'del', code: 'Delete', width: '1', height: '1' },
  End: { text: 'end', code: 'End', width: '1', height: '1' },
  PageDown: { text: 'pdn', code: 'PageDown', width: '1', height: '1' },
  ArrowUp: { text: '↑', code: 'ArrowUp', width: '1', height: '1' },
  ArrowLeft: { text: '←', code: 'ArrowLeft', width: '1', height: '1' },
  ArrowDown: { text: '↓', code: 'ArrowDown', width: '1', height: '1' },
  ArrowRight: { text: '→', code: 'ArrowRight', width: '1', height: '1' },
  NumLock: { text: 'nmlk', code: 'NumLock', width: '1', height: '1' },
  NumpadDivide: { text: '/', code: 'NumpadDivide', width: '1', height: '1' },
  NumpadMultiply: {
    text: '*',
    code: 'NumpadMultiply',
    width: '1',
    height: '1',
  },
  NumpadSubtract: {
    text: '-',
    code: 'NumpadSubtract',
    width: '1',
    height: '1',
  },
  Numpad7: { text: '7', code: 'Numpad7', width: '1', height: '1' },
  Numpad8: { text: '8', code: 'Numpad8', width: '1', height: '1' },
  Numpad9: { text: '9', code: 'Numpad9', width: '1', height: '1' },
  Numpad4: { text: '4', code: 'Numpad4', width: '1', height: '1' },
  Numpad5: { text: '5', code: 'Numpad5', width: '1', height: '1' },
  Numpad6: { text: '6', code: 'Numpad6', width: '1', height: '1' },
  NumpadAdd: { text: '+', code: 'NumpadAdd', width: '1', height: '2' },
  Numpad3: { text: '3', code: 'Numpad3', width: '1', height: '1' },
  Numpad2: { text: '2', code: 'Numpad2', width: '1', height: '1' },
  Numpad1: { text: '1', code: 'Numpad1', width: '1', height: '1' },
  Numpad0: { text: '0', code: 'Numpad0', width: '2', height: '1' },
  NumpadDecimal: { text: '.', code: 'NumpadDecimal', width: '1', height: '1' },
  NumpadEnter: { text: '↵', code: 'NumpadEnter', width: '1', height: '2' },
};

interface KeyStyles {
  [Key: string]: string;
}

export const keyWidthStyles: KeyStyles = {
  '0.25': 'w-3',
  '0.5': 'w-6',
  '1': 'w-12',
  '1.25': 'w-15',
  '1.5': 'w-18',
  '1.75': 'w-21',
  '2': 'w-24',
  '2.25': 'w-27',
  '2.75': 'w-33',
  '6.25': 'w-75',
};

export const keyHeightStyles: KeyStyles = {
  '0.5': 'h-6',
  '1': 'h-12',
  '1.5': 'h-18',
  '2': 'h-24',
};
