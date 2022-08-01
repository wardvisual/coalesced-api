import { styled } from '@/shared/theme';

export const NavbarWrapper = styled.nav`
  width: 100%;

  // Menu Items
  div:nth-child(2) {
    display: none;
  }

  // Logo
  > div:first-child {
    padding-top: 0.4em;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;

export default NavbarWrapper;
