import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Carousel } from './Carousel';
import { registerUniformComponent } from '@/canvas/compat';
import { CarouselVariants } from './helpers';

export type CarouselProps = ComponentProps<unknown, 'carouselItem'>;

export const carouselMappings = [undefined, CarouselVariants.ImageGallery].map(variantId => {
  return registerUniformComponent({
    type: 'carousel',
    component: Carousel,
    variantId,
  });
});

export default Carousel;
