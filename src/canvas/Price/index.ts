import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Price } from './Price';

export type PriceProps = ComponentProps<{
  label?: string;
  labelStyle: Types.HeadingStyles;
  price?: number | string;
  currency?: string;
}>;

export const priceMappings = {
  price: Price,
};

export default Price;
