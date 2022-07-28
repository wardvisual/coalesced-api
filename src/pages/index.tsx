import type { NextPage } from 'next';

/* Features */
import { Home } from '@/features';

/* Layout */
import { Layout } from '@/shared/layouts';

/**
 * The HomePage function is a React component that returns a Layout component with a title prop and a
 * Home component
 * @returns A React component
 */
const HomePage: NextPage = () => {
  const title = 'Welcome to';

  return (
    <Layout title={title}>
      <Home />
    </Layout>
  );
};

export default HomePage;
