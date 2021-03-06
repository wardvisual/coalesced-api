/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Link from 'next/link';

/* Components */
import { Button } from '@/shared/components/atoms/Button';
import { Image } from '@/shared/components/atoms/Image';
import { INavbar, NavbarWrapper } from '@/shared/components/molecules/Navbar';

/* Assets */
import starIcon from '@/assets/icons/feed-star.svg';
import logo from '@/assets/logos/logo.svg';

const Navbar: NextPage<INavbar> = (props) => (
  <NavbarWrapper {...props}>
    <div>
      <Image src={logo} alt="logo" height={45} maxHeight={80} />
    </div>

    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Public APIs</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Categories</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Information</a>
          </Link>
        </li>
      </ul>
    </div>

    <div>
      <Button text="Star on Github" icon={starIcon} />
    </div>
  </NavbarWrapper>
);

export default Navbar;
