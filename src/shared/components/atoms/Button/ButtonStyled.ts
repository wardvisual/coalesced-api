import { styled } from '@/shared/theme';

export const ButtonWrapper = styled.button`
  background-color: ${({ color }) => color || 'red'};
  border: none;
  padding: 1em;
  cursor: pointer;

  &:hover {
    background: black;
    color: white;
  }

  @media ${({ theme }) => theme.device.MobileSmall} {
    background: black;
    padding: 2em;
  }

  @media screen ${({ theme }) => theme.device.MobileMedium} {
    padding: 5em;
    background: blue;
  }
`;

export default ButtonWrapper;
