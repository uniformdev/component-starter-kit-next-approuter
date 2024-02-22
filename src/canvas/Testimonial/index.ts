import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { Testimonial } from './Testimonial';

export enum TestimonialVariant {
  CardWrapped = 'cardWrapped',
}

export type TestimonialProps = ComponentProps<{
  personName: string;
  picture?: string | Asset;
  logo?: string | Asset;
  description: string;
  lineCountRestriction: Types.AvailableMaxLineCount;
}>;

export const testimonialMappings = {
  testimonial: Testimonial,
};

export default Testimonial;
