import { ContainerProps as BaseContainerProps } from '@/components/ui/Container';
import { ViewPort } from '@/types/cskTypes';

type Align = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type GridProps = Pick<
  BaseContainerProps,
  'title' | 'backgroundColor' | 'spacing' | 'border' | 'fluidContent' | 'children' | 'height'
> & {
  columnsCount?: string | ViewPort<string>;
  gapY?: string | ViewPort<string>;
  gapX?: string | ViewPort<string>;
  alignItems?: Align | ViewPort<Align>;
  className?: string;
};

export { Grid as default } from './grid';
