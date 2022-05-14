import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { KeyboardProvider } from '../context/KeyboardContext';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { store } from '../state/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <KeyboardProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </KeyboardProvider>
    </Provider>
  );
}

export default App;
