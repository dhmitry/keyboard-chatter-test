import React, { useCallback, useState } from 'react';
import Key from '../components/Key';
import Row from '../components/Row';
import { KeyCode } from '../constants/keys';
import { useKeyboard } from '../context/KeyboardContext';

const Keyboard = (): JSX.Element => {
  const { keys } = useKeyboard();

  return (
    <div className="border-8 border-zinc-700 transition-colors duration-300 dark:border-slate-300">
      <div className="border border-zinc-800 transition-colors duration-300 dark:border-slate-400">
        <Row>
          <Key keyText="esc" info={keys[KeyCode.Escape]} />
          <Key keyText="1" info={keys[KeyCode.Digit1]} />
          <Key keyText="2" info={keys[KeyCode.Digit2]} />
          <Key keyText="3" info={keys[KeyCode.Digit3]} />
          <Key keyText="4" info={keys[KeyCode.Digit4]} />
          <Key keyText="5" info={keys[KeyCode.Digit5]} />
          <Key keyText="6" info={keys[KeyCode.Digit6]} />
          <Key keyText="7" info={keys[KeyCode.Digit7]} />
          <Key keyText="8" info={keys[KeyCode.Digit8]} />
          <Key keyText="9" info={keys[KeyCode.Digit9]} />
          <Key keyText="0" info={keys[KeyCode.Digit0]} />
          <Key keyText="-" info={keys[KeyCode.Minus]} />
          <Key keyText="=" info={keys[KeyCode.Equal]} />
          <Key
            keyText="backspace"
            keyWidth="2"
            info={keys[KeyCode.Backspace]}
          />
        </Row>
        <Row>
          <Key keyText="tab" keyWidth="1.5" info={keys[KeyCode.Tab]} />
          <Key keyText="q" info={keys[KeyCode.Q]} />
          <Key keyText="w" info={keys[KeyCode.W]} />
          <Key keyText="e" info={keys[KeyCode.E]} />
          <Key keyText="r" info={keys[KeyCode.R]} />
          <Key keyText="t" info={keys[KeyCode.T]} />
          <Key keyText="y" info={keys[KeyCode.Y]} />
          <Key keyText="u" info={keys[KeyCode.U]} />
          <Key keyText="i" info={keys[KeyCode.I]} />
          <Key keyText="o" info={keys[KeyCode.O]} />
          <Key keyText="p" info={keys[KeyCode.P]} />
          <Key keyText="[" info={keys[KeyCode.BracketLeft]} />
          <Key keyText="]" info={keys[KeyCode.BracketRight]} />
          <Key keyText="\" keyWidth="1.5" info={keys[KeyCode.Backslash]} />
        </Row>
        <Row>
          <Key keyText="caps" keyWidth="1.75" info={keys[KeyCode.CapsLock]} />
          <Key keyText="a" info={keys[KeyCode.A]} />
          <Key keyText="s" info={keys[KeyCode.S]} />
          <Key keyText="d" info={keys[KeyCode.D]} />
          <Key keyText="f" info={keys[KeyCode.F]} />
          <Key keyText="g" info={keys[KeyCode.G]} />
          <Key keyText="h" info={keys[KeyCode.H]} />
          <Key keyText="j" info={keys[KeyCode.J]} />
          <Key keyText="k" info={keys[KeyCode.K]} />
          <Key keyText="l" info={keys[KeyCode.L]} />
          <Key keyText=";" info={keys[KeyCode.Semicolon]} />
          <Key keyText="'" info={keys[KeyCode.Quote]} />
          <Key keyText="enter" keyWidth="2.25" info={keys[KeyCode.Enter]} />
        </Row>
        <Row>
          <Key keyText="shift" keyWidth="2.25" info={keys[KeyCode.ShiftLeft]} />
          <Key keyText="z" info={keys[KeyCode.Z]} />
          <Key keyText="x" info={keys[KeyCode.X]} />
          <Key keyText="c" info={keys[KeyCode.C]} />
          <Key keyText="v" info={keys[KeyCode.V]} />
          <Key keyText="b" info={keys[KeyCode.B]} />
          <Key keyText="n" info={keys[KeyCode.N]} />
          <Key keyText="m" info={keys[KeyCode.M]} />
          <Key keyText="," info={keys[KeyCode.Comma]} />
          <Key keyText="." info={keys[KeyCode.Period]} />
          <Key keyText="/" info={keys[KeyCode.Slash]} />
          <Key
            keyText="shift"
            keyWidth="2.75"
            info={keys[KeyCode.ShiftRight]}
          />
        </Row>
        <Row>
          <Key
            keyText="ctrl"
            keyWidth="1.25"
            info={keys[KeyCode.ControlLeft]}
          />
          <Key keyText="win" keyWidth="1.25" info={keys[KeyCode.MetaLeft]} />
          <Key keyText="alt" keyWidth="1.25" info={keys[KeyCode.AltLeft]} />
          <Key keyText="space" keyWidth="6.25" info={keys[KeyCode.Space]} />
          <Key keyText="" keyWidth="1.25" />
          <Key keyText="" keyWidth="1.25" />
          <Key keyText="alt" keyWidth="1.25" info={keys[KeyCode.AltRight]} />
          <Key
            keyText="ctrl"
            keyWidth="1.25"
            info={keys[KeyCode.ControlRight]}
          />{' '}
        </Row>
      </div>
    </div>
  );
};

export default Keyboard;
