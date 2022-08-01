import {
  IText,
  LeadWrapper,
  ParagraphWrapper,
  TitleHeadingWrapper,
} from '@/shared/components/atoms/Text';
import { NextPage } from 'next';

const Paragraph: NextPage<IText> = ({ text }) => (
  <ParagraphWrapper>{text}</ParagraphWrapper>
);

const Lead: NextPage<IText> = ({ text }) => <LeadWrapper>{text}</LeadWrapper>;

const TitleHeading: NextPage<IText> = ({ text }) => (
  <TitleHeadingWrapper>{text}</TitleHeadingWrapper>
);

export { Paragraph, Lead, TitleHeading };
