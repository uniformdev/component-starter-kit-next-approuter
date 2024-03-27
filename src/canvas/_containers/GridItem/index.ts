import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import GridItem from './GridItem';

export type GridItemProps = ComponentProps<
  {
    columnSpan?: Types.AvailableColumnCount;
    columnStart?: Types.AvailableColumnCount;
    rowSpan?: Types.AvailableRowCount;
    rowStart?: Types.AvailableRowCount;
  },
  'inner'
>;

export const gridItemMappings = {
  gridItem: GridItem,
};

export default GridItem;
