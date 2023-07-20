import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot, ComponentProps, registerUniformComponent } from '@uniformdev/canvas-next-rsc';

export type Props = ComponentProps<{
  columnsCount: Types.AvailableColumnCount;
}>;

const getGridColumnsClass = (columnsCount: Props['columnsCount']) => {
  switch (columnsCount) {
    case '1':
      return 'grid-cols-1';
    case '2':
      return 'grid-cols-1 md:grid-cols-2';
    case '3':
      return 'grid-cols-1 md:grid-cols-3';
    case '4':
      return 'grid-cols-1 md:grid-cols-4';
    case '5':
      return 'grid-cols-1 md:grid-cols-5';
    case '6':
      return 'grid-cols-1 md:grid-cols-6';
    case '7':
      return 'grid-cols-1 md:grid-cols-7';
    case '8':
      return 'grid-cols-1 md:grid-cols-8';
    case '9':
      return 'grid-cols-1 md:grid-cols-9';
    case '10':
      return 'grid-cols-1 md:grid-cols-10';
    case '11':
      return 'grid-cols-1 md:grid-cols-11';
    case '12':
      return 'grid-cols-1 md:grid-cols-12';
    default:
      return 'grid-cols-1';
  }
};

const GridContainer: FC<Props> = ({ columnsCount, component, context }) => (
  <div className={classNames('w-full grid gap-4', getGridColumnsClass(columnsCount))}>
    <UniformSlot
      name="container-inner"
      data={component}
      context={context}
    />
  </div>
);

registerUniformComponent({
  type: 'gridContainer',
  component: GridContainer,
});

export default GridContainer;
