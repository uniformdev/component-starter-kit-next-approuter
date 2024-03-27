import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { BoxProps } from '.';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Box: FC<BoxProps> = ({ style, context, slots, component, slotName, slotIndex, ...restStyles }) => (
  <div style={{ ...style, ...restStyles }}>
    <UniformSlot context={context} slot={slots.content} data={component} />
  </div>
);
