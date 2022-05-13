import React from 'react';
import { KeyboardKeys } from '../../constants/KeyboardKeys';
import { useKeyboard } from '../../context/KeyboardContext';
import Key from './Key';
import KeyRow from './KeyRow';

interface MainKeysProps {
  showEscape?: boolean;
}

const MainKeys = ({ showEscape }: MainKeysProps): JSX.Element => {
  const { keys } = useKeyboard();

  return (
    <>
      <KeyRow>
        {showEscape ? (
          <Key
            keyText={KeyboardKeys.Escape.text}
            info={keys[KeyboardKeys.Escape.code]}
          />
        ) : (
          <Key
            keyText={KeyboardKeys.Backquote.text}
            info={keys[KeyboardKeys.Backquote.code]}
          />
        )}
        <Key
          keyText={KeyboardKeys.Digit1.text}
          info={keys[KeyboardKeys.Digit1.code]}
        />
        <Key
          keyText={KeyboardKeys.Digit2.text}
          info={keys[KeyboardKeys.Digit2.code]}
        />
        <Key
          keyText={KeyboardKeys.Digit3.text}
          info={keys[KeyboardKeys.Digit3.code]}
        />
        <Key
          keyText={KeyboardKeys.Digit4.text}
          info={keys[KeyboardKeys.Digit4.code]}
        />
        <Key
          keyText={KeyboardKeys.Digit5.text}
          info={keys[KeyboardKeys.Digit5.code]}
        />
        <Key
          keyText={KeyboardKeys.Digit6.text}
          info={keys[KeyboardKeys.Digit6.code]}
        />
        <Key
          keyText={KeyboardKeys.Digit7.text}
          info={keys[KeyboardKeys.Digit7.code]}
        />
        <Key
          keyText={KeyboardKeys.Digit8.text}
          info={keys[KeyboardKeys.Digit8.code]}
        />
        <Key
          keyText={KeyboardKeys.Digit9.text}
          info={keys[KeyboardKeys.Digit9.code]}
        />
        <Key
          keyText={KeyboardKeys.Digit0.text}
          info={keys[KeyboardKeys.Digit0.code]}
        />
        <Key
          keyText={KeyboardKeys.Minus.text}
          info={keys[KeyboardKeys.Minus.code]}
        />
        <Key
          keyText={KeyboardKeys.Equal.text}
          info={keys[KeyboardKeys.Equal.code]}
        />
        <Key
          keyText={KeyboardKeys.Backspace.text}
          width="2"
          info={keys[KeyboardKeys.Backspace.code]}
        />
      </KeyRow>
      <KeyRow>
        <Key
          keyText={KeyboardKeys.Tab.text}
          width="1.5"
          info={keys[KeyboardKeys.Tab.code]}
        />
        <Key keyText={KeyboardKeys.Q.text} info={keys[KeyboardKeys.Q.code]} />
        <Key keyText={KeyboardKeys.W.text} info={keys[KeyboardKeys.W.code]} />
        <Key keyText={KeyboardKeys.E.text} info={keys[KeyboardKeys.E.code]} />
        <Key keyText={KeyboardKeys.R.text} info={keys[KeyboardKeys.R.code]} />
        <Key keyText={KeyboardKeys.T.text} info={keys[KeyboardKeys.T.code]} />
        <Key keyText={KeyboardKeys.Y.text} info={keys[KeyboardKeys.Y.code]} />
        <Key keyText={KeyboardKeys.U.text} info={keys[KeyboardKeys.U.code]} />
        <Key keyText={KeyboardKeys.I.text} info={keys[KeyboardKeys.I.code]} />
        <Key keyText={KeyboardKeys.O.text} info={keys[KeyboardKeys.O.code]} />
        <Key keyText={KeyboardKeys.P.text} info={keys[KeyboardKeys.P.code]} />
        <Key
          keyText={KeyboardKeys.BracketLeft.text}
          info={keys[KeyboardKeys.BracketLeft.code]}
        />
        <Key
          keyText={KeyboardKeys.BracketRight.text}
          info={keys[KeyboardKeys.BracketRight.code]}
        />
        <Key
          keyText={KeyboardKeys.Backslash.text}
          width="1.5"
          info={keys[KeyboardKeys.Backslash.code]}
        />
      </KeyRow>
      <KeyRow>
        <Key
          keyText={KeyboardKeys.CapsLock.text}
          width="1.75"
          info={keys[KeyboardKeys.CapsLock.code]}
        />
        <Key keyText={KeyboardKeys.A.text} info={keys[KeyboardKeys.A.code]} />
        <Key keyText={KeyboardKeys.S.text} info={keys[KeyboardKeys.S.code]} />
        <Key keyText={KeyboardKeys.D.text} info={keys[KeyboardKeys.D.code]} />
        <Key keyText={KeyboardKeys.F.text} info={keys[KeyboardKeys.F.code]} />
        <Key keyText={KeyboardKeys.G.text} info={keys[KeyboardKeys.G.code]} />
        <Key keyText={KeyboardKeys.H.text} info={keys[KeyboardKeys.H.code]} />
        <Key keyText={KeyboardKeys.J.text} info={keys[KeyboardKeys.J.code]} />
        <Key keyText={KeyboardKeys.K.text} info={keys[KeyboardKeys.K.code]} />
        <Key keyText={KeyboardKeys.L.text} info={keys[KeyboardKeys.L.code]} />
        <Key
          keyText={KeyboardKeys.Semicolon.text}
          info={keys[KeyboardKeys.Semicolon.code]}
        />
        <Key
          keyText={KeyboardKeys.Quote.text}
          info={keys[KeyboardKeys.Quote.code]}
        />
        <Key
          keyText={KeyboardKeys.Enter.text}
          width="2.25"
          info={keys[KeyboardKeys.Enter.code]}
        />
      </KeyRow>
      <KeyRow>
        <Key
          keyText={KeyboardKeys.ShiftLeft.text}
          width="2.25"
          info={keys[KeyboardKeys.ShiftLeft.code]}
        />
        <Key keyText={KeyboardKeys.Z.text} info={keys[KeyboardKeys.Z.code]} />
        <Key keyText={KeyboardKeys.X.text} info={keys[KeyboardKeys.X.code]} />
        <Key keyText={KeyboardKeys.C.text} info={keys[KeyboardKeys.C.code]} />
        <Key keyText={KeyboardKeys.V.text} info={keys[KeyboardKeys.V.code]} />
        <Key keyText={KeyboardKeys.B.text} info={keys[KeyboardKeys.B.code]} />
        <Key keyText={KeyboardKeys.N.text} info={keys[KeyboardKeys.N.code]} />
        <Key keyText={KeyboardKeys.M.text} info={keys[KeyboardKeys.M.code]} />
        <Key
          keyText={KeyboardKeys.Comma.text}
          info={keys[KeyboardKeys.Comma.code]}
        />
        <Key
          keyText={KeyboardKeys.Period.text}
          info={keys[KeyboardKeys.Period.code]}
        />
        <Key
          keyText={KeyboardKeys.Slash.text}
          info={keys[KeyboardKeys.Slash.code]}
        />
        <Key
          keyText={KeyboardKeys.ShiftRight.text}
          width="2.75"
          info={keys[KeyboardKeys.ShiftRight.code]}
        />
      </KeyRow>
      <KeyRow>
        <Key
          keyText={KeyboardKeys.ControlLeft.text}
          width="1.25"
          info={keys[KeyboardKeys.ControlLeft.code]}
        />
        <Key
          keyText={KeyboardKeys.MetaLeft.text}
          width="1.25"
          info={keys[KeyboardKeys.MetaLeft.code]}
        />
        <Key
          keyText={KeyboardKeys.AltLeft.text}
          width="1.25"
          info={keys[KeyboardKeys.AltLeft.code]}
        />
        <Key
          width="6.25"
          keyText={KeyboardKeys.Space.text}
          info={keys[KeyboardKeys.Space.code]}
        />
        <Key
          width="1.25"
          keyText={KeyboardKeys.AltRight.text}
          info={keys[KeyboardKeys.AltRight.code]}
        />
        <Key
          width="1.25"
          keyText={KeyboardKeys.MetaRight.text}
          info={keys[KeyboardKeys.MetaRight.code]}
        />
        <Key
          width="1.25"
          keyText={KeyboardKeys.ContextMenu.text}
          info={keys[KeyboardKeys.ContextMenu.code]}
        />
        <Key
          keyText={KeyboardKeys.ControlRight.text}
          width="1.25"
          info={keys[KeyboardKeys.ControlRight.code]}
        />{' '}
      </KeyRow>
    </>
  );
};

export default React.memo(MainKeys);
