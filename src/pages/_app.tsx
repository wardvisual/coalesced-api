import type { AppProps } from 'next/app';

/* Layout */
import { Layout } from '@/shared/components/templates/Layout';

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout root>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
