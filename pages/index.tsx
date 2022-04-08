import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import Key, { KeyInfo } from '../components/Key';
import Row from '../components/Row';

interface Keys {
  [Key: string]: KeyInfo | undefined;
}

const Home: NextPage = () => {
  const [keys, setKeys] = useState<Keys>({});

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const prevKeyInfo = keys[key];

      const currentTime = new Date();

      let newKeyInfo: KeyInfo = {
        lastPress: currentTime,
        elapsedMs: 0,
        minElapsedMs: 0,
        wasReleased: false,
      };

      let keyChanged = false;

      if (prevKeyInfo) {
        if (prevKeyInfo.wasReleased) {
          const newElapsedMs =
            currentTime.valueOf() - prevKeyInfo.lastPress.valueOf();

          const newMinElapsedMs =
            prevKeyInfo.minElapsedMs == 0
              ? newElapsedMs
              : Math.min(newElapsedMs, prevKeyInfo.minElapsedMs);

          newKeyInfo = {
            lastPress: currentTime,
            elapsedMs: newElapsedMs,
            minElapsedMs: newMinElapsedMs,
            wasReleased: false,
          };

          keyChanged = true;
        }
      } else {
        keyChanged = true;
      }

      if (keyChanged) {
        const newKeys = {
          ...keys,
          [key]: newKeyInfo,
        };

        setKeys(newKeys);
      }

      event.preventDefault();
    },
    [keys]
  );

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const keyInfo = keys[key];

      if (keyInfo) {
        const newKeyInfo: KeyInfo = {
          ...keyInfo,
          wasReleased: true,
        };

        const newKeys = {
          ...keys,
          [key]: newKeyInfo,
        };

        setKeys(newKeys);
      }

      event.preventDefault();
    },
    [keys]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Row>
        <Key keyText="esc" info={keys['escape']} />
        <Key keyText="1" info={keys['1']} />
        <Key keyText="2" info={keys['2']} />
        <Key keyText="3" info={keys['3']} />
        <Key keyText="4" info={keys['4']} />
        <Key keyText="5" info={keys['5']} />
        <Key keyText="6" info={keys['6']} />
        <Key keyText="7" info={keys['7']} />
        <Key keyText="8" info={keys['8']} />
        <Key keyText="9" info={keys['9']} />
        <Key keyText="0" info={keys['0']} />
        <Key keyText="-" info={keys['-']} />
        <Key keyText="=" info={keys['=']} />
        <Key keyText="backspace" keyWidth="2" info={keys['backspace']} />
      </Row>
      <Row>
        <Key keyText="tab" keyWidth="1.5" info={keys['tab']} />
        <Key keyText="q" info={keys['q']} />
        <Key keyText="w" info={keys['w']} />
        <Key keyText="e" info={keys['e']} />
        <Key keyText="r" info={keys['r']} />
        <Key keyText="t" info={keys['t']} />
        <Key keyText="y" info={keys['y']} />
        <Key keyText="u" info={keys['u']} />
        <Key keyText="i" info={keys['i']} />
        <Key keyText="o" info={keys['o']} />
        <Key keyText="p" info={keys['p']} />
        <Key keyText="[" info={keys['[']} />
        <Key keyText="]" info={keys[']']} />
        <Key keyText="\" keyWidth="1.5" info={keys['\\']} />
      </Row>
      <Row>
        <Key keyText="caps" keyWidth="1.875" info={keys['capslock']} />
        <Key keyText="a" info={keys['a']} />
        <Key keyText="s" info={keys['s']} />
        <Key keyText="d" info={keys['d']} />
        <Key keyText="f" info={keys['f']} />
        <Key keyText="g" info={keys['g']} />
        <Key keyText="h" info={keys['h']} />
        <Key keyText="j" info={keys['j']} />
        <Key keyText="k" info={keys['k']} />
        <Key keyText="l" info={keys['l']} />
        <Key keyText=";" info={keys[';']} />
        <Key keyText="'" info={keys["'"]} />
        <Key keyText="enter" keyWidth="2.25" info={keys['enter']} />
      </Row>
      <Row>
        {
          // TODO: differentiate left shift
        }
        <Key keyText="shift" keyWidth="2.5" info={keys['shift']} />
        <Key keyText="z" info={keys['z']} />
        <Key keyText="x" info={keys['x']} />
        <Key keyText="c" info={keys['c']} />
        <Key keyText="v" info={keys['v']} />
        <Key keyText="b" info={keys['b']} />
        <Key keyText="n" info={keys['n']} />
        <Key keyText="m" info={keys['m']} />
        <Key keyText="," info={keys[',']} />
        <Key keyText="." info={keys['.']} />
        <Key keyText="/" info={keys['/']} />
        {
          // TODO: differentiate right shift
        }
        <Key keyText="shift" keyWidth="2.75" info={keys['shift']} />
      </Row>
      <Row>
        {
          // TODO: differentiate left ctrl
        }
        <Key keyText="ctrl" keyWidth="1.25" info={keys['control']} />
        <Key keyText="win" keyWidth="1.25" info={keys['meta']} />
        {
          // TODO: differentiate left alt
        }
        <Key keyText="alt" keyWidth="1.25" info={keys['alt']} />
        <Key keyText="space" keyWidth="7.25" info={keys[' ']} />
        {
          // TODO: differentiate right alt
        }
        <Key keyText="alt" keyWidth="1.25" info={keys['alt']} />
        <Key keyText="" keyWidth="1.25" info={undefined} />
        <Key keyText="" keyWidth="1.25" info={undefined} />
        {
          // TODO: differentiate right ctrl
        }
        <Key keyText="ctrl" info={keys['control']} />{' '}
      </Row>
    </div>
  );
};

export default Home;
