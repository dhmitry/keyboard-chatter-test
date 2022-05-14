import React from 'react';
import { KeyboardKeys } from '../../constants/KeyboardKeys';
import Key from './Key';
import KeyRow from './KeyRow';

interface MainKeysProps {
  showEscape?: boolean;
}

const MainKeys = ({ showEscape }: MainKeysProps): JSX.Element => {
  return (
    <>
      <KeyRow>
        {showEscape ? (
          <Key keyboardKey={KeyboardKeys.Escape} />
        ) : (
          <Key keyboardKey={KeyboardKeys.Backquote} />
        )}
        <Key keyboardKey={KeyboardKeys.Digit1} />
        <Key keyboardKey={KeyboardKeys.Digit2} />
        <Key keyboardKey={KeyboardKeys.Digit3} />
        <Key keyboardKey={KeyboardKeys.Digit4} />
        <Key keyboardKey={KeyboardKeys.Digit5} />
        <Key keyboardKey={KeyboardKeys.Digit6} />
        <Key keyboardKey={KeyboardKeys.Digit7} />
        <Key keyboardKey={KeyboardKeys.Digit8} />
        <Key keyboardKey={KeyboardKeys.Digit9} />
        <Key keyboardKey={KeyboardKeys.Digit0} />
        <Key keyboardKey={KeyboardKeys.Minus} />
        <Key keyboardKey={KeyboardKeys.Equal} />
        <Key keyboardKey={KeyboardKeys.Backspace} />
      </KeyRow>
      <KeyRow>
        <Key keyboardKey={KeyboardKeys.Tab} />
        <Key keyboardKey={KeyboardKeys.Q} />
        <Key keyboardKey={KeyboardKeys.W} />
        <Key keyboardKey={KeyboardKeys.E} />
        <Key keyboardKey={KeyboardKeys.R} />
        <Key keyboardKey={KeyboardKeys.T} />
        <Key keyboardKey={KeyboardKeys.Y} />
        <Key keyboardKey={KeyboardKeys.U} />
        <Key keyboardKey={KeyboardKeys.I} />
        <Key keyboardKey={KeyboardKeys.O} />
        <Key keyboardKey={KeyboardKeys.P} />
        <Key keyboardKey={KeyboardKeys.BracketLeft} />
        <Key keyboardKey={KeyboardKeys.BracketRight} />
        <Key keyboardKey={KeyboardKeys.Backslash} />
      </KeyRow>
      <KeyRow>
        <Key keyboardKey={KeyboardKeys.CapsLock} />
        <Key keyboardKey={KeyboardKeys.A} />
        <Key keyboardKey={KeyboardKeys.S} />
        <Key keyboardKey={KeyboardKeys.D} />
        <Key keyboardKey={KeyboardKeys.F} />
        <Key keyboardKey={KeyboardKeys.G} />
        <Key keyboardKey={KeyboardKeys.H} />
        <Key keyboardKey={KeyboardKeys.J} />
        <Key keyboardKey={KeyboardKeys.K} />
        <Key keyboardKey={KeyboardKeys.L} />
        <Key keyboardKey={KeyboardKeys.Semicolon} />
        <Key keyboardKey={KeyboardKeys.Quote} />
        <Key keyboardKey={KeyboardKeys.Enter} />
      </KeyRow>
      <KeyRow>
        <Key keyboardKey={KeyboardKeys.ShiftLeft} />
        <Key keyboardKey={KeyboardKeys.Z} />
        <Key keyboardKey={KeyboardKeys.X} />
        <Key keyboardKey={KeyboardKeys.C} />
        <Key keyboardKey={KeyboardKeys.V} />
        <Key keyboardKey={KeyboardKeys.B} />
        <Key keyboardKey={KeyboardKeys.N} />
        <Key keyboardKey={KeyboardKeys.M} />
        <Key keyboardKey={KeyboardKeys.Comma} />
        <Key keyboardKey={KeyboardKeys.Period} />
        <Key keyboardKey={KeyboardKeys.Slash} />
        <Key keyboardKey={KeyboardKeys.ShiftRight} />
      </KeyRow>
      <KeyRow>
        <Key keyboardKey={KeyboardKeys.ControlLeft} />
        <Key keyboardKey={KeyboardKeys.MetaLeft} />
        <Key keyboardKey={KeyboardKeys.AltLeft} />
        <Key keyboardKey={KeyboardKeys.Space} />
        <Key keyboardKey={KeyboardKeys.AltRight} />
        <Key keyboardKey={KeyboardKeys.MetaRight} />
        <Key keyboardKey={KeyboardKeys.ContextMenu} />
        <Key keyboardKey={KeyboardKeys.ControlRight} />
      </KeyRow>
    </>
  );
};

export default MainKeys;
