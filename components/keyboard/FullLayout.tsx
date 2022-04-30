import React from 'react';
import { KeyboardKeys } from '../../constants/KeyboardKeys';
import { useKeyboard } from '../../context/KeyboardContext';
import Key from './Key';
import KeyRow from './KeyRow';
import MainKeys from './MainKeys';
import Spacer from './Spacer';

const FullLayout = (): JSX.Element => {
  const { keys } = useKeyboard();

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Key
            keyText={KeyboardKeys.Escape.text}
            info={keys[KeyboardKeys.Escape.code]}
          />
          <Spacer width="1" />
          <KeyRow>
            <Key
              keyText={KeyboardKeys.F1.text}
              info={keys[KeyboardKeys.F1.code]}
            />
            <Key
              keyText={KeyboardKeys.F2.text}
              info={keys[KeyboardKeys.F2.code]}
            />
            <Key
              keyText={KeyboardKeys.F3.text}
              info={keys[KeyboardKeys.F3.code]}
            />
            <Key
              keyText={KeyboardKeys.F4.text}
              info={keys[KeyboardKeys.F4.code]}
            />
            <Spacer width="0.5" />
            <Key
              keyText={KeyboardKeys.F5.text}
              info={keys[KeyboardKeys.F5.code]}
            />
            <Key
              keyText={KeyboardKeys.F6.text}
              info={keys[KeyboardKeys.F6.code]}
            />
            <Key
              keyText={KeyboardKeys.F7.text}
              info={keys[KeyboardKeys.F7.code]}
            />
            <Key
              keyText={KeyboardKeys.F8.text}
              info={keys[KeyboardKeys.F8.code]}
            />
            <Spacer width="0.5" />
            <Key
              keyText={KeyboardKeys.F9.text}
              info={keys[KeyboardKeys.F9.code]}
            />
            <Key
              keyText={KeyboardKeys.F10.text}
              info={keys[KeyboardKeys.F10.code]}
            />
            <Key
              keyText={KeyboardKeys.F11.text}
              info={keys[KeyboardKeys.F11.code]}
            />
            <Key
              keyText={KeyboardKeys.F12.text}
              info={keys[KeyboardKeys.F12.code]}
            />
          </KeyRow>
        </div>
        <Spacer height="0.5" />
        <MainKeys />
      </div>
      <Spacer width="0.25" />
      <div className="flex flex-col">
        <KeyRow>
          <Key
            keyText={KeyboardKeys.PrintScreen.text}
            info={keys[KeyboardKeys.PrintScreen.code]}
          />
          <Key
            keyText={KeyboardKeys.ScrollLock.text}
            info={keys[KeyboardKeys.ScrollLock.code]}
          />
          <Key
            keyText={KeyboardKeys.PauseBreak.text}
            info={keys[KeyboardKeys.PauseBreak.code]}
          />
        </KeyRow>
        <Spacer height="0.5" />
        <KeyRow>
          <Key
            keyText={KeyboardKeys.Insert.text}
            info={keys[KeyboardKeys.Insert.code]}
          />
          <Key
            keyText={KeyboardKeys.Home.text}
            info={keys[KeyboardKeys.Home.code]}
          />
          <Key
            keyText={KeyboardKeys.PageUp.text}
            info={keys[KeyboardKeys.PageUp.code]}
          />
        </KeyRow>
        <KeyRow>
          <Key
            keyText={KeyboardKeys.Delete.text}
            info={keys[KeyboardKeys.Delete.code]}
          />
          <Key
            keyText={KeyboardKeys.End.text}
            info={keys[KeyboardKeys.End.code]}
          />
          <Key
            keyText={KeyboardKeys.PageDown.text}
            info={keys[KeyboardKeys.PageDown.code]}
          />
        </KeyRow>
        <Spacer height="1" />
        <KeyRow>
          <Spacer width="1" />
          <Key
            keyText={KeyboardKeys.ArrowUp.text}
            info={keys[KeyboardKeys.ArrowUp.code]}
          />
        </KeyRow>
        <KeyRow>
          <Key
            keyText={KeyboardKeys.ArrowLeft.text}
            info={keys[KeyboardKeys.ArrowLeft.code]}
          />
          <Key
            keyText={KeyboardKeys.ArrowDown.text}
            info={keys[KeyboardKeys.ArrowDown.code]}
          />
          <Key
            keyText={KeyboardKeys.ArrowRight.text}
            info={keys[KeyboardKeys.ArrowRight.code]}
          />
        </KeyRow>
      </div>
      <Spacer width="0.25" />
      <div className="flex flex-col">
        <Spacer height="1.5" />
        <KeyRow>
          <Key
            keyText={KeyboardKeys.NumLock.text}
            info={keys[KeyboardKeys.NumLock.code]}
          />
          <Key
            keyText={KeyboardKeys.NumpadDivide.text}
            info={keys[KeyboardKeys.NumpadDivide.code]}
          />
          <Key
            keyText={KeyboardKeys.NumpadMultiply.text}
            info={keys[KeyboardKeys.NumpadMultiply.code]}
          />
          <Key
            keyText={KeyboardKeys.NumpadSubtract.text}
            info={keys[KeyboardKeys.NumpadSubtract.code]}
          />
        </KeyRow>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <KeyRow>
              <Key
                keyText={KeyboardKeys.Numpad7.text}
                info={keys[KeyboardKeys.Numpad7.code]}
              />
              <Key
                keyText={KeyboardKeys.Numpad8.text}
                info={keys[KeyboardKeys.Numpad8.code]}
              />
              <Key
                keyText={KeyboardKeys.Numpad9.text}
                info={keys[KeyboardKeys.Numpad9.code]}
              />
            </KeyRow>
            <KeyRow>
              <Key
                keyText={KeyboardKeys.Numpad4.text}
                info={keys[KeyboardKeys.Numpad4.code]}
              />
              <Key
                keyText={KeyboardKeys.Numpad5.text}
                info={keys[KeyboardKeys.Numpad5.code]}
              />
              <Key
                keyText={KeyboardKeys.Numpad6.text}
                info={keys[KeyboardKeys.Numpad6.code]}
              />
            </KeyRow>
          </div>
          <Key
            height="2"
            keyText={KeyboardKeys.NumpadAdd.text}
            info={keys[KeyboardKeys.NumpadAdd.code]}
          />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <KeyRow>
              <Key
                keyText={KeyboardKeys.Numpad1.text}
                info={keys[KeyboardKeys.Numpad1.code]}
              />
              <Key
                keyText={KeyboardKeys.Numpad2.text}
                info={keys[KeyboardKeys.Numpad2.code]}
              />
              <Key
                keyText={KeyboardKeys.Numpad3.text}
                info={keys[KeyboardKeys.Numpad3.code]}
              />
            </KeyRow>
            <KeyRow>
              <Key
                width="2"
                keyText={KeyboardKeys.Numpad0.text}
                info={keys[KeyboardKeys.Numpad0.code]}
              />
              <Key
                keyText={KeyboardKeys.NumpadDecimal.text}
                info={keys[KeyboardKeys.NumpadDecimal.code]}
              />
            </KeyRow>
          </div>
          <Key
            height="2"
            keyText={KeyboardKeys.NumpadEnter.text}
            info={keys[KeyboardKeys.NumpadEnter.code]}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(FullLayout);
