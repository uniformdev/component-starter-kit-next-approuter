import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { Feature } from './Feature';

export type FeatureProps = ComponentProps<{
  title: string;
  link: Types.ProjectMapLink;
  description: string;
  icon?: string | Asset | Types.CloudinaryImage;
}>;

export const featureMappings = {
  feature: Feature,
};

export default Feature;
export * from './decorator';
