import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { TableCellProps } from '.';

export const TableDataCell: FC<TableCellProps> = ({ component, context }) => (
  <td>
    <UniformText component={component} context={context} placeholder="Value goes here" parameterId="value" />
  </td>
);
