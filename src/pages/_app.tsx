import type { AppProps } from 'next/app';

/* Layout */
import { Layout } from '@/shared/layouts';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
};

export default MyApp;
