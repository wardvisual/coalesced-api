import { NextPage } from 'next';
import Image from 'next/image';

/* Assets */
import terminalImage from '@/assets/contents/coalesced-art.svg';
import headerTextContent from '@/assets/contents/coalesced-text.svg';

/* Styles */
import paperIcon from '@/assets/icons/feed-repo.svg';
import rocketIcon from '@/assets/icons/feed-rocket.svg';
import HomeWrapper from '@/features/Home/HomeStyled';

/* Component */
import { Button } from '@/shared/components/atoms/Button';

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <Image src={terminalImage} alt="terminal" height={550} />
      <Image src={headerTextContent} alt="terminal" height={300} />
      <div>
        <Button text="Get Started" icon={rocketIcon} />
        <Button text="Documentation" icon={paperIcon} outlined />
      </div>
    </HomeWrapper>
  );
};

export default Home;
