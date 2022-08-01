import { NextPage } from 'next';
import Image from 'next/image';

/* Assets */
import terminalImage from '@/assets/contents/coalesced-art.svg';

/* Styles */
import HomeWrapper from '@/features/Home/HomeStyled';

/* Component */
import { Text } from '@/shared/components/atoms/Text';

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <Image src={terminalImage} alt="terminal" height={500} />
      <Text lead text="powered by public api" />
      <Text titleHeading text="Coalesced" />
    </HomeWrapper>
  );
};

export default Home;
