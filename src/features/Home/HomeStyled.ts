import { styled } from '@/shared/theme';

export const HomeWrapper = styled.div`
  ${({ theme }) => theme.screens.extraSmallMedia} // Mobile 375px
  ${({ theme }) => theme.screens.smallMedia} // Mobile 576px
  ${({ theme }) => theme.screens.mediumMedia} // Tablet 768px
`;
