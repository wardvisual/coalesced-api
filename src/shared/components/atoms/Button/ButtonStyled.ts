import { IButton } from '@/shared/components/atoms/Button';
import { styled } from '@/shared/theme';

export const ButtonWrapper = styled.button<IButton>`
  background-color: ${(prop) =>
    (prop.outlined && prop.theme.color.colorBlackPrimary) ||
    prop.theme.color.colorWhitePrimary};
  color: ${(prop) =>
    (prop.outlined && prop.theme.color.colorWhitePrimary) ||
    prop.theme.color.colorBlackPrimary};
  border: 1px ${(prop) => prop.outlined && prop.theme.color.colorWhitePrimary}
    solid;
  padding: 0.7em;
  border-radius: var(--radius-5);
  cursor: pointer;

  text-align: center;
  font-size: clamp(0.5rem, 3.4vw, 0.9rem);
  font-weight: bold;

  width: 100vw;
  // min-width: 12em;
  max-width: 12em;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  &:hover {
    background-color: ${(prop) =>
      (prop.outlined && prop.theme.color.colorBlackSecondary) ||
      prop.theme.color.colorWhiteSecondary};
  }
`;

export default ButtonWrapper;
