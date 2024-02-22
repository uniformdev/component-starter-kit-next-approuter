import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { IconLink } from './IconLink';

export type IconLinkProps = ComponentProps<{
  link: Types.ProjectMapLink;
  icon?: string | Asset | Types.CloudinaryImage;
}>;

export const iconLinkMappings = {
  iconLink: IconLink,
};
