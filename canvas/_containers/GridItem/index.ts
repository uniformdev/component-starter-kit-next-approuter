import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import GridItem from './GridItem';
import { registerUniformComponent } from '@/canvas/compat';

export type GridItemProps = ComponentProps<{
  columnSpan?: Types.AvailableColumnCount;
  columnStart?: Types.AvailableColumnCount;
  rowSpan?: Types.AvailableRowCount;
  rowStart?: Types.AvailableRowCount;
}, 'inner'>;

export const gridItemMapping = registerUniformComponent({
  type: 'gridItem',
  component: GridItem,
});

export default GridItem;
