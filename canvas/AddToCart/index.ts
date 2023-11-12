import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { BaseAddToCartProps } from '../../components/BaseAddToCart';
import { AddToCart } from './AddToCart';
import { registerUniformComponent } from '@/canvas/compat';

export type AddToCartProps = ComponentProps<BaseAddToCartProps>;

export const addToCartMapping = registerUniformComponent({
  type: 'addToCart',
  component: AddToCart,
});

export default AddToCart;
