import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { type Props as BaseProductInfoProps } from '../../components/BaseProductInfo';
import { ProductInfo } from './ProductInfo';

export type ProductInfoProps = ComponentProps<BaseProductInfoProps>;

export const productInfoMappings = {
  productInfo: ProductInfo,
};

export default ProductInfo;
