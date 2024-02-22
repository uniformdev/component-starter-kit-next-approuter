import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { BoxProps } from '.';

export const Box: FC<BoxProps> = ({ style, context, slots, component }) => (
  <div style={{ ...style }}>
    <UniformSlot context={context} slot={slots.content} data={component} />
  </div>
);
