import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { TabProps } from '.';

export const Tab: FC<TabProps> = ({ component, context, slots }) => (
  <UniformSlot context={context} slot={slots.content} data={component} />
);
