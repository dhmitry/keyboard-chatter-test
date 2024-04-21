import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { persistor, store } from '../state/store';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Analytics />
          <SpeedInsights />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
