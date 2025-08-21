import { HTMLAttributes } from 'react';
import { ComponentInstance } from '@uniformdev/canvas';

export type ResolveEmptyPlaceholderOptions = {
  parentComponent: ComponentInstance | undefined;
  component: ComponentInstance;
  slotName: string;
  slotIndex: number;
};

export type ViewPort<T> = {
  desktop?: T;
  tablet?: T;
  mobile?: T;
};

export type SpaceType = Pick<
  NonNullable<HTMLAttributes<HTMLDivElement>['style']>,
  | 'marginTop'
  | 'marginLeft'
  | 'paddingTop'
  | 'marginRight'
  | 'paddingLeft'
  | 'marginBottom'
  | 'paddingRight'
  | 'paddingBottom'
>;
