import { HTMLAttributes } from 'react';
import { ViewPort } from '@/types/cskTypes';

type Align = 'start' | 'end' | 'center' | 'baseline' | 'stretch';

export type GridItemProps = HTMLAttributes<HTMLDivElement> & {
  columnStart?: string | ViewPort<string>;
  columnSpan?: string | ViewPort<string>;
  rowStart?: string | ViewPort<string>;
  rowSpan?: string | ViewPort<string>;
  className?: string;
  alignSelf?: Align | ViewPort<Align>;
};

export { GridItem as default } from './grid-item';
