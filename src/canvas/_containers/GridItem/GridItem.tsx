import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import {
  getGridColumnsSpanClass,
  getGridColumnsStartClass,
  getGridRowsSpanClass,
  getGridRowsStartClass,
} from './helpers';
import { GridItemProps } from '.';

const GridItem: FC<GridItemProps> = ({ columnStart, columnSpan, rowSpan, rowStart, component, context, slots }) => (
  <div
    className={classNames(
      getGridColumnsStartClass(columnStart),
      getGridColumnsSpanClass(columnSpan),
      getGridRowsStartClass(rowStart),
      getGridRowsSpanClass(rowSpan)
    )}
  >
    <UniformSlot context={context} slot={slots.inner} data={component} />
  </div>
);

export const gridItemMappings = {
  gridItem: GridItem,
};

export default GridItem;
