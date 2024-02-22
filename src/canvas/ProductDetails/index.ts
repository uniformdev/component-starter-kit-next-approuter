import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { ContainerProps as BaseContainerProps } from '../../components/Container';
import { withoutContainer } from '../../hocs/withoutContainer';
import { ProductDetails } from './ProductDetails';

export type ProductDetailsProps = ComponentProps<BaseContainerProps, 'container-inner'>;

export const productDetailsMappings = {
  productDetails: withoutContainer(ProductDetails),
};

export default withoutContainer(ProductDetails);
