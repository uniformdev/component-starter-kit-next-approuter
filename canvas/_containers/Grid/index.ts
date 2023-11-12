import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Grid } from './Grid';
import { registerUniformComponent } from '@/canvas/compat';

export type GridProps = ComponentProps<{
  columnsCount: Types.AvailableColumnCount;
  gapY: Types.AvailableGapVariants;
  gapX: Types.AvailableGapVariants;
}, 'grid-inner'>;

export const gridMapping = registerUniformComponent({
  type: 'grid',
  component: Grid,
});

export default Grid;
