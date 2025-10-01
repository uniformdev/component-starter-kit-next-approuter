import { FooterProps as BaseFooterProps } from '@/components/ui/Footer';
import { ComponentProps } from '@/types/cskTypes';

export type FooterParameters = BaseFooterProps;

export enum FooterSlots {
  FooterLogo = 'footerLogo',
  FooterCopyright = 'footerCopyright',
  FooterContent = 'footerContent',
  FooterBottom = 'footerBottom',
}

export type FooterProps = ComponentProps<FooterParameters, FooterSlots>;

export { default } from './footer';
export { FooterEmptyPlaceholder } from './empty-placeholder';
