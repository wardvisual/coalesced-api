/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';

import { IText, TextWrapper } from '@/shared/components/atoms/Text';

const Text: NextPage<IText> = (props) => {
  return (
    <TextWrapper>
      <h1>Some Text</h1>
    </TextWrapper>
  );
};

export default Text;
