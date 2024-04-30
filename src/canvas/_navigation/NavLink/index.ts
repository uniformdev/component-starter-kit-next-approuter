import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { HeaderLink } from './HeaderLink';
import { FooterLink } from './FooterLink';
import { NavigationGroup } from './NavigationGroup';
import { NavigationMenu } from './NavigationMenu';
import { NavigationLink } from './NavigationLink';

export type Styles = {
  link?: string;
  activeLink?: string;
};

export type LinkProps = ComponentProps<
  {
    title: string;
    link: Types.ProjectMapLink;
    icon?: Asset;
    hideIconBackground: boolean;
    color?: Types.ThemeColorsValues | string;
    styles?: Styles;
  },
  'subNavItems' | 'content'
>;

export enum LinkVariant {
  Header = 'header',
  Footer = 'footer',
}

export const navigationLinkMappings = {
  navigationLink: NavigationLink,
  navigationGroup: NavigationGroup,
  navigationMenu: NavigationMenu,
};

export { HeaderLink, FooterLink, NavigationGroup, NavigationLink };
