/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Image from 'next/image';

import { ButtonWrapper, IButton } from '@/shared/components/atoms/Button';

const Button: NextPage<IButton> = (props) => (
  <ButtonWrapper {...props}>
    {props.text}
    {props.icon && <Image src={props.icon} alt={`button ${props.text}`} />}
  </ButtonWrapper>
);

export default Button;
