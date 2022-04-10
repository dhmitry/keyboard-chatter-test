import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { KeyboardProvider } from '../context/KeyboardContext';
import { SettingsProvider } from '../context/SettingsContext';
import Layout from '../components/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <KeyboardProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </KeyboardProvider>
    </SettingsProvider>
  );
}

export default App;
