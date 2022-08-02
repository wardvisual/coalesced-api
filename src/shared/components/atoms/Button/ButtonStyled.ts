import { IButton } from '@/shared/components/atoms/Button';
import { styled } from '@/shared/theme';

export const ButtonWrapper = styled.button<IButton>`
  background-color: ${(prop) =>
    (prop.outlined && 'var(--color-black-1)') || 'var(--color-white-1)'};
  color: ${(prop) =>
    (prop.outlined && 'var(--color-white-1)') || 'var(--color-black-1)'};
  border: 1px
    ${(prop) =>
      (prop.outlined && 'var(--color-white-1)') || 'var(--color-black-1)'}
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
`;

export default ButtonWrapper;
