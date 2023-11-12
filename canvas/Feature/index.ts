import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Feature } from './Feature';
import { registerUniformComponent } from '@/canvas/compat';

export type FeatureProps = ComponentProps<{
  title: string;
  link: Types.ProjectMapLink;
  description: string;
  icon?: string | Types.CloudinaryImage;
}>;

export const featureMapping = registerUniformComponent({
  type: 'feature',
  component: Feature,
});

export default Feature;
