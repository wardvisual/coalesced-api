/* Built-in Libraries */
import Head from 'next/head';
import { Fragment, ReactNode } from 'react';

/* Constants */
import { Application } from '@/shared/constants';

/* Components */
import { Navbar } from '@/shared/components/molecules/Navbar';

/* Types */
import { LayoutProps } from '@/shared/types';

/**
 * The Layout function takes in a title and children props and returns a head component with the title
 * prop and a main component with the children prop
 * @param {LayoutProps}  - LayoutProps - This is the interface that we created earlier.
 * @returns A React component.
 */
const Layout = ({ title, root, children }: LayoutProps) => {
  let renderMeta: ReactNode = <meta content="some content" />;
  const appTitle: ReactNode = (
    <title>
      {title ? `${title} - ${Application.TITLE}` : Application.TITLE}
    </title>
  );

  return (
    <Fragment>
      {/* HEAD */}
      <Head>
        {appTitle}
        {root && renderMeta}
      </Head>

      <main className={root ? 'root__layout' : ''}>
        {root && <Navbar />}
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
