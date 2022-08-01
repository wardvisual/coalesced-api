/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Image from 'next/image';

/* Components */
import { LogoWrapper } from '@/shared/components/atoms/Logo';

/* Assets */
import logo from '@/assets/logos/logo.svg';

const Logo: NextPage = () => (
  <LogoWrapper>
    <Image src={logo} alt="logo" width={130} />
  </LogoWrapper>
);

export default Logo;
