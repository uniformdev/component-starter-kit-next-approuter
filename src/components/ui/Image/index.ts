import { HTMLAttributes } from 'react';
import { ImageProps as NextImageProps } from 'next/image';
import { ViewPort } from '@/types/cskTypes';

export type ImageProps = NextImageProps & {
  containerStyle?: NonNullable<HTMLAttributes<HTMLDivElement>['style']>;
  overlayColor?: string;
  overlayOpacity?: NonNullable<NextImageProps['style']>['opacity'];
  border?: string | ViewPort<string>;
};

export { Image as default } from './image';
