import { ReactNode } from 'react';

interface IType {
  Lead: ReactNode;
  TitleHeading: ReactNode;
  SubHeading: ReactNode;
  Paragraph: ReactNode;
}

interface IText {
  type: IType;
  text: string;
}

export default IText;
