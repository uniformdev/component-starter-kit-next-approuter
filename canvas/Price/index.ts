import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Price } from './Price';
import { registerUniformComponent } from '@/canvas/compat';

export type PriceProps = ComponentProps<{
  label?: string;
  labelStyle: Types.HeadingStyles;
  price?: number | string;
  currency?: string;
}>;

export const priceMapping = registerUniformComponent({
  type: 'price',
  component: Price,
});

export default Price;
