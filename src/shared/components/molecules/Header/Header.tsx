/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';

/* Components */
import { HeaderWrapper, IHeader } from '@/shared/components/molecules/Header';

/* Assets */

const Header: NextPage<IHeader> = (props) => (
  <HeaderWrapper {...props}></HeaderWrapper>
);

export default Header;
