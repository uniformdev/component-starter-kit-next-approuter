import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { HeaderLink } from './HeaderLink';
import { FooterLink } from './FooterLink';
import { NavigationGroup } from './NavigationGroup';
import { registerUniformComponent } from '@/canvas/compat';

export type Styles = {
  link?: string;
  activeLink?: string;
};

type LinkParameters = {
  title: string;
  link: Types.ProjectMapLink;
  styles?: Styles;
}

export type LinkProps = ComponentProps<LinkParameters>;

export type NavigationGroupProps = ComponentProps<LinkParameters, 'subNavItems'>

// default variant
export const navigationLinkMapping = registerUniformComponent({
  type: 'navigationLink',
  component: HeaderLink,
});

export const footerLinkMapping = registerUniformComponent({
  type: 'navigationLink',
  component: FooterLink,
  variantId: 'footer',
});

export const headerLinkMapping = registerUniformComponent({
  type: 'navigationLink',
  component: HeaderLink,
  variantId: 'header',
});

export const navigationGroupMapping = registerUniformComponent({
  type: 'navigationGroup',
  component: NavigationGroup,
});

export { HeaderLink, FooterLink, NavigationGroup };
