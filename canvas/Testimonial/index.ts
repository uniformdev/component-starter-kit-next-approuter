import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Testimonial } from './Testimonial';
import { registerUniformComponent } from '@/canvas/compat';

export enum TestimonialVariant {
  CardWrapped = 'cardWrapped',
}

export type TestimonialProps = ComponentProps<{
  personName: string;
  picture: string;
  logo: string;
  description: string;
  lineCountRestriction: Types.AvailableMaxLineCount;
}>;

export const testimonialMappings = [undefined, TestimonialVariant.CardWrapped].map(variantId =>
  registerUniformComponent({
    type: 'testimonial',
    component: Testimonial,
    variantId,
  })
);

export default Testimonial;
