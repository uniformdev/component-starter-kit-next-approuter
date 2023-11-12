import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { FeaturedCallout } from './FeaturedCallout';
import { registerUniformComponent } from '@/canvas/compat';

export type FeaturedCalloutProps = ComponentProps<{
  eyebrowText?: string;
  title: string;
  titleStyle: Types.HeadingStyles;
  description: string;
  image?: string | Types.CloudinaryImage;
}, 'feature'>;

export enum FeaturedCalloutVariant {
  ImageRight = 'imageRight',
}

export const featuredCalloutMappings = [undefined, FeaturedCalloutVariant.ImageRight].map(variantId => {
  return registerUniformComponent({
    type: 'featuredCallout',
    component: FeaturedCallout,
    variantId,
  });
});

export default FeaturedCallout;
