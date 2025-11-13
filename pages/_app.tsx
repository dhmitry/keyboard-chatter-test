import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const HydrationGate = ({ children }: { children: React.ReactNode }) => {
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  return <>{children}</>;
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <HydrationGate>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Analytics />
          <SpeedInsights />
        </HydrationGate>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
