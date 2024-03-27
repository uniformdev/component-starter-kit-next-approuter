import { FC } from 'react';
import classnames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { TableRowProps } from '.';

export const TableRow: FC<TableRowProps> = ({ highlightsOnHover, component, context, slots }) => (
  <tr className={classnames({ hover: highlightsOnHover })}>
    <UniformSlot context={context} slot={slots.cells} data={component} />
  </tr>
);
