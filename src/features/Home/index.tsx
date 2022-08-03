import { NextPage } from 'next';

/* Assets */
import terminalImage from '@/assets/contents/coalesced-art.svg';
import headerTextContent from '@/assets/contents/coalesced-text.svg';

/* Styles */
import paperIcon from '@/assets/icons/feed-repo.svg';
import rocketIcon from '@/assets/icons/feed-rocket.svg';
import HomeWrapper from '@/features/Home/HomeStyled';

/* Component */
import { Button } from '@/shared/components/atoms/Button';
import { Image } from '@/shared/components/atoms/Image';

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <Image src={terminalImage} alt="terminal" height={350} />
      <Image src={headerTextContent} alt="terminal" height={200} />
      <div>
        <Button text="Get Started" icon={rocketIcon} />
        <Button text="Documentation" icon={paperIcon} outlined />
      </div>
    </HomeWrapper>
  );
};

export default Home;
