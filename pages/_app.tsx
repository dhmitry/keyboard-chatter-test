import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { persistor, store } from '../state/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
};

export default App;
