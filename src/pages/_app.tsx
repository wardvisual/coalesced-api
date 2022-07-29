import type { AppProps } from 'next/app';

/* Layout */
import { Layout } from '@/shared/layouts';

/* Theme */
import { GlobalStyle, theme, ThemeProvider } from '@/shared/theme';

/**
 * MyApp is a function that takes in a Component and pageProps and returns a Layout component that
 * contains a ThemeProvider component that contains a GlobalStyle component that contains a Component
 * component that contains pageProps
 * @param {AppProps}  - AppProps - this is the props that Next.js passes to the App component.
 * @returns A Layout component with a ThemeProvider component with a GlobalStyle component with a
 * Component component with pageProps.
 */
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
};

export default MyApp;
