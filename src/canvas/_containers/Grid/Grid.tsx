import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import BaseContainer from '../../../components/Container';
import { getGapXClass, getGapYClass, getGridColumnsClass } from './helpers';
import { GridProps } from '.';
import { PaddingSize } from '../../../utilities/styling';

export const Grid: FC<GridProps> = ({
  columnsCount,
  gapX,
  gapY,
  backgroundType,
  containerVariant,
  paddingBottom = PaddingSize.None,
  paddingTop = PaddingSize.None,
  marginBottom,
  marginTop,
  component,
  context,
  slots,
}) => (
  <BaseContainer
    containerVariant={containerVariant}
    marginBottom={marginBottom}
    marginTop={marginTop}
    paddingBottom={paddingBottom}
    paddingTop={paddingTop}
    backgroundType={backgroundType}
  >
    <div
      className={classNames('w-full grid', getGridColumnsClass(columnsCount), getGapXClass(gapX), getGapYClass(gapY))}
    >
      <UniformSlot context={context} slot={slots['grid-inner']} data={component} />
    </div>
  </BaseContainer>
);
