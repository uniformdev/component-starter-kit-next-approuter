import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { FeaturedCallout } from './FeaturedCallout';

export type FeaturedCalloutProps = ComponentProps<
  {
    eyebrowText?: string;
    title: string;
    titleStyle: Types.HeadingStyles;
    description: string;
    image?: string | Asset | Types.CloudinaryImage;
  },
  'feature'
>;

export enum FeaturedCalloutVariant {
  ImageRight = 'imageRight',
}

export const featuredCalloutMappings = {
  featuredCallout: FeaturedCallout,
};

export default FeaturedCallout;
