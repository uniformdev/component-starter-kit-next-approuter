import { HeaderProps as BaseHeaderProps } from '@/components/ui/Header';
import { ComponentProps } from '@/types/cskTypes';

export type HeaderParameters = Omit<BaseHeaderProps, 'sticky'>;

export enum HeaderSlots {
  HeaderLeftContent = 'headerLeftContent',
  HeaderCenterContent = 'headerCenterContent',
  HeaderRightContent = 'headerRightContent',
}

export enum HeaderVariants {
  Sticky = 'sticky',
}

export type HeaderProps = ComponentProps<HeaderParameters, HeaderSlots>;

export { default } from './header';
export { HeaderEmptyPlaceholder } from './empty-placeholder';
