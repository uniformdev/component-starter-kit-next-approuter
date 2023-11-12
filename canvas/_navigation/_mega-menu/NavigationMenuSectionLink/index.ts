import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { NavigationMenuSectionLink } from './NavigationMenuSectionLink';
import { registerUniformComponent } from '@/canvas/compat';

export type NavigationMenuSectionLinkProps = ComponentProps<{
  title: string;
  link: Types.ProjectMapLink;
  description?: string;
  icon?: string;
}>;

export enum NavigationMenuSectionLinkVariant {
  IconLeft = 'iconLeft',
}

export const navigationMenuSectionLinkMappings = [undefined, NavigationMenuSectionLinkVariant.IconLeft].map(variantId =>
  registerUniformComponent({
    type: 'navigationMenuSectionLink',
    component: NavigationMenuSectionLink,
    variantId,
  })
);
