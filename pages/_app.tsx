import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { KeyboardProvider } from '../context/KeyboardContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <KeyboardProvider>
      <Component {...pageProps} />;
    </KeyboardProvider>
  );
}

export default App;
