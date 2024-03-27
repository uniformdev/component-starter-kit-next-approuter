import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Grid } from './Grid';
import { ContainerProps } from '../Container';
import { withoutContainer } from '../../../hocs/withoutContainer';

export type GridProps = ComponentProps<
  ContainerProps & {
    columnsCount: Types.AvailableColumnCount;
    gapY: Types.AvailableGapVariants;
    gapX: Types.AvailableGapVariants;
  },
  'grid-inner'
>;

export const gridMappings = {
  grid: withoutContainer(Grid, { additionalClassName: 'w-full' }),
};

export default withoutContainer(Grid, { additionalClassName: 'w-full' });
