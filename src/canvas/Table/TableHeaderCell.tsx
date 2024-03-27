import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { TableCellProps } from '.';

export const TableHeaderCell: FC<TableCellProps> = ({ component, context }) => (
  <th>
    <UniformText component={component} context={context} placeholder="Value goes here" parameterId="value" />
  </th>
);
