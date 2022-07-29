import { NextPage } from 'next';

import { ButtonWrapper, IButton } from '@/shared/components/atoms/Button';

const Button: NextPage<IButton> = (props) => (
  <ButtonWrapper {...props}>{props.text}</ButtonWrapper>
);

export default Button;
