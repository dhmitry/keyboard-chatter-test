import React, { type JSX } from 'react';
import { KeyboardKeys } from '../../constants/keyboard';
import Key from './Key';
import KeyRow from './KeyRow';
import MainKeys from './MainKeys';
import Spacer from './Spacer';

const FullLayout = (): JSX.Element => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Key keyboardKey={KeyboardKeys.Escape} />
          <Spacer width="1" />
          <KeyRow>
            <Key keyboardKey={KeyboardKeys.F1} />
            <Key keyboardKey={KeyboardKeys.F2} />
            <Key keyboardKey={KeyboardKeys.F3} />
            <Key keyboardKey={KeyboardKeys.F4} />
            <Spacer width="0.5" />
            <Key keyboardKey={KeyboardKeys.F5} />
            <Key keyboardKey={KeyboardKeys.F6} />
            <Key keyboardKey={KeyboardKeys.F7} />
            <Key keyboardKey={KeyboardKeys.F8} />
            <Spacer width="0.5" />
            <Key keyboardKey={KeyboardKeys.F9} />
            <Key keyboardKey={KeyboardKeys.F10} />
            <Key keyboardKey={KeyboardKeys.F11} />
            <Key keyboardKey={KeyboardKeys.F12} />
          </KeyRow>
        </div>
        <Spacer height="0.5" />
        <MainKeys />
      </div>
      <Spacer width="0.25" />
      <div className="flex flex-col">
        <KeyRow>
          <Key keyboardKey={KeyboardKeys.PrintScreen} />
          <Key keyboardKey={KeyboardKeys.ScrollLock} />
          <Key keyboardKey={KeyboardKeys.PauseBreak} />
        </KeyRow>
        <Spacer height="0.5" />
        <KeyRow>
          <Key keyboardKey={KeyboardKeys.Insert} />
          <Key keyboardKey={KeyboardKeys.Home} />
          <Key keyboardKey={KeyboardKeys.PageUp} />
        </KeyRow>
        <KeyRow>
          <Key keyboardKey={KeyboardKeys.Delete} />
          <Key keyboardKey={KeyboardKeys.End} />
          <Key keyboardKey={KeyboardKeys.PageDown} />
        </KeyRow>
        <Spacer height="1" />
        <KeyRow>
          <Spacer width="1" />
          <Key keyboardKey={KeyboardKeys.ArrowUp} />
        </KeyRow>
        <KeyRow>
          <Key keyboardKey={KeyboardKeys.ArrowLeft} />
          <Key keyboardKey={KeyboardKeys.ArrowDown} />
          <Key keyboardKey={KeyboardKeys.ArrowRight} />
        </KeyRow>
      </div>
      <Spacer width="0.25" />
      <div className="flex flex-col">
        <Spacer height="1.5" />
        <KeyRow>
          <Key keyboardKey={KeyboardKeys.NumLock} />
          <Key keyboardKey={KeyboardKeys.NumpadDivide} />
          <Key keyboardKey={KeyboardKeys.NumpadMultiply} />
          <Key keyboardKey={KeyboardKeys.NumpadSubtract} />
        </KeyRow>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <KeyRow>
              <Key keyboardKey={KeyboardKeys.Numpad7} />
              <Key keyboardKey={KeyboardKeys.Numpad8} />
              <Key keyboardKey={KeyboardKeys.Numpad9} />
            </KeyRow>
            <KeyRow>
              <Key keyboardKey={KeyboardKeys.Numpad4} />
              <Key keyboardKey={KeyboardKeys.Numpad5} />
              <Key keyboardKey={KeyboardKeys.Numpad6} />
            </KeyRow>
          </div>
          <Key keyboardKey={KeyboardKeys.NumpadAdd} />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <KeyRow>
              <Key keyboardKey={KeyboardKeys.Numpad1} />
              <Key keyboardKey={KeyboardKeys.Numpad2} />
              <Key keyboardKey={KeyboardKeys.Numpad3} />
            </KeyRow>
            <KeyRow>
              <Key keyboardKey={KeyboardKeys.Numpad0} />
              <Key keyboardKey={KeyboardKeys.NumpadDecimal} />
            </KeyRow>
          </div>
          <Key keyboardKey={KeyboardKeys.NumpadEnter} />
        </div>
      </div>
    </div>
  );
};

export default FullLayout;
