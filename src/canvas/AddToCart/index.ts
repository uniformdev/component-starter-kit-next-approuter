import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { BaseAddToCartProps } from '../../components/BaseAddToCart';
import { AddToCart } from './AddToCart';

export type AddToCartProps = ComponentProps<BaseAddToCartProps>;

export const addToCartMappings = {
  addToCart: AddToCart,
};

export default AddToCart;
