import { ContainerProps as BaseContainerProps } from '@/components/ui/Container';

export type FooterProps = Omit<BaseContainerProps, 'height' | 'content'> & {
  logo?: React.ReactNode;
  copyright?: React.ReactNode;
  content?: React.ReactNode;
  bottom?: React.ReactNode;
};

export { Footer as default } from './footer';
