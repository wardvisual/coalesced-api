/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';

/* Components */
import { IImage, ImageWrapper } from '@/shared/components/atoms/Image';
import Image from 'next/image';

/* Assets */

const _Image: NextPage<IImage> = (props) => (
  <ImageWrapper {...props}>
    <Image src={props.src} alt={props.alt} objectFit="contain" />
    {/* <Image src={props.src} alt={props.alt} /> */}
  </ImageWrapper>
);

export default _Image;
