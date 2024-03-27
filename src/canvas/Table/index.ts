import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Table } from './Table';
import { TableDataCell } from './TableDataCell';
import { TableHeaderCell } from './TableHeaderCell';
import { TableRow } from './TableRow';

export type TableProps = ComponentProps<
  {
    size: Types.TableSize;
  },
  'tableHead' | 'tableBody'
>;

export enum TableVariant {
  Zebra = 'zebra',
}

export type TableCellProps = ComponentProps<{
  value: string;
}>;

export type TableRowProps = ComponentProps<
  {
    highlightsOnHover: string;
  },
  'cells'
>;

export const tableMappings = {
  table: Table,
  tableDataCell: TableDataCell,
  tableHeaderCell: TableHeaderCell,
  tableRow: TableRow,
};

export default Table;
