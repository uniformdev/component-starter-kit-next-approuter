import { HTMLAttributes } from 'react';
import { SpaceType, ViewPort } from '@/types/cskTypes';

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  backgroundColor?: string;
  spacing?: SpaceType | ViewPort<SpaceType>;
  border?: string | ViewPort<string>;
  fluidContent?: boolean;
  height?: string | ViewPort<string>;
  wrapperClassName?: string;
  maxWidth?: string;
};

export { Container as default } from './container';
