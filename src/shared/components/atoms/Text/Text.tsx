/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';

import {
  IText,
  Lead,
  TextWrapper,
  TitleHeading,
} from '@/shared/components/atoms/Text';

const Text: NextPage<IText> = (props) => {
  let element;

  if (props.lead) {
    element = <Lead text={props.text} />;
  }

  if (props.titleHeading) {
    element = <TitleHeading text={props.text} />;
  }

  return <TextWrapper>{element}</TextWrapper>;
};

export default Text;
