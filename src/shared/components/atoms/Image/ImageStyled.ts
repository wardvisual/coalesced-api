import { IImage } from '@/shared/components/atoms/Image';
import { styled } from '@/shared/theme';

const ImageWrapper = styled.div<IImage>`
  width: ${(prop) => prop.width}%;
  height: ${(prop) => prop.height}px;
  max-height: ${(prop) => prop.maxHeight}px;
`;

export default ImageWrapper;
