import { styled } from '@/shared/theme';

export const NavbarWrapper = styled.nav`
  width: 100%;
  margin-bottom: 2em;

  // Menu Items
  div:nth-child(2) {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;

export default NavbarWrapper;
