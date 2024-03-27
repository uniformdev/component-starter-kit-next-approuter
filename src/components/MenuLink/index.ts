import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';

export type MenuLinkProps = ComponentProps<{
  link?: Types.ProjectMapLink;
  title: string;
  description?: string;
  imageUrl?: string;
  variant?: string;
}>;

export enum NavigationOneColumnMenuLinkVariant {
  IconLeft = 'iconLeft',
}

export * from './MenuLink';
export { default } from './MenuLink';
