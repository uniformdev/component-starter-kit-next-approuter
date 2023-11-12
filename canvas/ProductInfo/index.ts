import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { type Props as BaseProductInfoProps } from '../../components/BaseProductInfo';
import { ProductInfo } from './ProductInfo';
import { registerUniformComponent } from '@/canvas/compat';

export type ProductInfoProps = ComponentProps<BaseProductInfoProps>;

export const productInfoMapping = registerUniformComponent({
  type: 'productInfo',
  component: ProductInfo,
});

export default ProductInfo;
