/* Built-in Libraries */
import Head from 'next/head';
import { Fragment } from 'react';

/* Constants */
import { Application } from '@/shared/constants';

/* Types */
import { LayoutProps } from '@/shared/types';

/**
 * The Layout function takes in a title and children props and returns a head component with the title
 * prop and a main component with the children prop
 * @param {LayoutProps}  - LayoutProps - This is the interface that we created earlier.
 * @returns A React component.
 */
const Layout = ({ title, children }: LayoutProps) => {
  return (
    <Fragment>
      {/* HEAD */}
      <Head>
        <title>
          {title ? `${title} - ${Application.TITLE}` : Application.TITLE}
        </title>
      </Head>

      {/* MAIN */}
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
