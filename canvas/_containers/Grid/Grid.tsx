import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { getGapXClass, getGapYClass, getGridColumnsClass } from './helpers';
import { GridProps } from '.';

export const Grid: FC<GridProps> = ({
  columnsCount,
  gapX,
  gapY,
  component,
  context,
  slots,
}) => (
  <div className={classNames('w-full grid', getGridColumnsClass(columnsCount), getGapXClass(gapX), getGapYClass(gapY))}>
    <UniformSlot
      context={context}
      data={component}
      slot={slots['grid-inner']}
    />
  </div>
);
