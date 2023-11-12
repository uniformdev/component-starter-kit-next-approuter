import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { NavigationOneColumnMenuLink } from './NavigationOneColumnMenuLink';
import { registerUniformComponent } from '@/canvas/compat';
import { NavigationOneColumnMenuLinkVariant } from './helpers';

export type NavigationOneColumnMenuLinkProps = ComponentProps<{
  title: string;
  link: Types.ProjectMapLink;
  description?: string;
  icon?: string;
}, 'hoverContent'>;

export const navigationOneColumnMenuLinkMappings = [undefined, NavigationOneColumnMenuLinkVariant.IconLeft].map(variantId =>
  registerUniformComponent({
    type: 'navigationOneColumnMenuLink',
    component: NavigationOneColumnMenuLink,
    variantId,
  })
);
