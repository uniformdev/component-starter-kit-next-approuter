import { ContainerVariants } from '../../components/Container';
import BaseProductGallery from '../../components/BaseProductGallery';
import { registerUniformComponent } from '@/canvas/compat';

export const productGalleryMappings = [undefined, ContainerVariants.BackgroundInContainer, ContainerVariants.FluidContent].map(variantId => {
  return registerUniformComponent({
    type: 'productGallery',
    component: BaseProductGallery,
    variantId,
  });
});

export * from '../../components/BaseProductGallery';
export default BaseProductGallery;
