import { FC } from 'react';
import classNames from 'classnames';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import { getTextClass } from '../../utilities/styling';
import { PriceProps } from '.';

//TODO: investigate render function inside uniform text
export const Price: FC<PriceProps> = ({ labelStyle = 'h1', context, component }) => (
  <div className="flex flex-row items-center text-secondary-content py-2 gap-2">
    <UniformText
      placeholder="Label goes here"
      parameterId="label"
      as="span"
      className={classNames('font-medium', getTextClass(labelStyle))}
      component={component}
      context={context}
    />
    <UniformText
      placeholder="Price goes here"
      parameterId="price"
      as="div"
      className={classNames('font-medium', getTextClass(labelStyle))}
      component={component}
      context={context}
    />
  </div>
);
