import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Carousel } from './Carousel';

export enum CarouselVariants {
  ImageGallery = 'imageGallery',
  Brochure = 'brochure',
}

export type CarouselProps = ComponentProps<unknown, 'carouselItem'>;

const CarouselWrapper = (props: CarouselProps) => <Carousel {...props} />;

export const carouselMappings = {
  carousel: CarouselWrapper,
};

export default CarouselWrapper;
