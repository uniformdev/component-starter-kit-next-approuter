import { PropsWithChildren, ReactNode } from 'react';
import { ContainerProps as BaseContainerProps } from '@/components/ui/Container';

export type HeaderProps = PropsWithChildren &
  Omit<BaseContainerProps, 'fluidContent' | 'height'> & {
    leftSection?: ReactNode;
    rightSection?: ReactNode;
    color?: string;
    sticky?: boolean;
  };

export { Header as default } from './header';
