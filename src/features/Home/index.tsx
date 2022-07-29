import { NextPage } from 'next';

import { Button } from '@/shared/components/atoms/Button';
import HomeWrapper from './HomeStyled';

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <h1>HOME</h1>
      <Button text="Click me" />
    </HomeWrapper>
  );
};

export default Home;
