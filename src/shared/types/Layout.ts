import { ReactNode } from 'react';

interface ILayout {
  title?: string;
  root?: true | false;
  children: ReactNode;
}

export default ILayout;
