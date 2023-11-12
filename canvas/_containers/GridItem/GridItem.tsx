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
import { registerUniformComponent } from '@/canvas/compat';

const GridItem: FC<GridItemProps> = ({
  columnStart,
  columnSpan,
  rowSpan,
  rowStart,
  component,
  context,
  slots,
}) => (
  <div
    className={classNames(
      getGridColumnsStartClass(columnStart),
      getGridColumnsSpanClass(columnSpan),
      getGridRowsStartClass(rowStart),
      getGridRowsSpanClass(rowSpan)
    )}
  >
    <UniformSlot
      context={context}
      data={component}
      slot={slots.inner}
    />
  </div>
);

export const gridItemMapping = registerUniformComponent({
  type: 'gridItem',
  component: GridItem,
});

export default GridItem;
