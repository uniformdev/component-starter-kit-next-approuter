import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { IconLink } from './IconLink';
import { registerUniformComponent } from '@/canvas/compat';

export type IconLinkProps = ComponentProps<{
  link: Types.ProjectMapLink;
  icon: string | Types.CloudinaryImage;
}>;

export const mapping = registerUniformComponent({
  type: 'iconLink',
  component: IconLink,
});
