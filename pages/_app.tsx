import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { KeyboardProvider } from '../context/KeyboardContext';
import { SettingsProvider } from '../context/SettingsContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <KeyboardProvider>
        <Component {...pageProps} />
      </KeyboardProvider>
    </SettingsProvider>
  );
}

export default App;
