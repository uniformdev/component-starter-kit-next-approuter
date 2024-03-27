import { FC } from 'react';
import classnames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { TableProps, TableVariant } from '.';
import { getTableSize } from './helpers';

export const Table: FC<TableProps> = ({ size, component, context, slots }) => (
  <div className="overflow-x-auto">
    <table
      className={classnames('table', getTableSize(size), {
        'table-zebra': component?.variant === TableVariant.Zebra,
      })}
    >
      <thead>
        <UniformSlot context={context} slot={slots.tableHead} data={component} />
      </thead>
      <tbody>
        <UniformSlot context={context} slot={slots.tableBody} data={component} />
      </tbody>
    </table>
  </div>
);
