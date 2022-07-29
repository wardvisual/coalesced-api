import { NextPage } from 'next';
import Image from 'next/image';

import banner from '@/assets/svgs/coalesced-art.svg';
import HomeWrapper from './HomeStyled';

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <h1>h111</h1>
      <button>HEY</button>
      <Image src={banner} alt="banner" layout="fill" />
    </HomeWrapper>
  );
};

export default Home;
