import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import BaseContainer from '../../components/Container';
import { ProductDetailsProps } from '.';

export const ProductDetails: FC<ProductDetailsProps> = ({ component, context, slots, ...props }) => (
  <BaseContainer {...props} containerVariant={component?.variant}>
    <UniformSlot context={context} slot={slots['container-inner']} data={component} />
  </BaseContainer>
);
