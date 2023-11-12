import { FC } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { MultiColumnReview } from './MultiColumnReview';
import { DefaultReview } from './Review';
import { registerUniformComponent } from '@/canvas/compat';

export enum ReviewVariant {
  MultiColumn = 'multiColumn',
}

type Style = {
  container?: string;
  date?: string;
  description?: string;
  picture?: string;
};

export type ReviewProps = ComponentProps<{
  personName: string;
  picture: string;
  date: string;
  stars: number;
  title: string;
  description: string;
  textColorVariant: Types.AvailableTextColorVariant;
  starsColor: Types.AvailableColor;
  showReviewLabel: boolean;
  lineCountRestriction: Types.AvailableMaxLineCount;
  styles?: Style;
}>;

const Review: FC<ReviewProps> = ({ component, ...reviewData }) =>
  component?.variant === ReviewVariant.MultiColumn ? (
    <MultiColumnReview {...reviewData} component={component} />
  ) : (
    <DefaultReview {...reviewData} component={component} />
  );

export const reviewMappings = [undefined, ReviewVariant.MultiColumn].map(variantId =>
  registerUniformComponent({
    type: 'review',
    component: Review,
    variantId,
  })
);

export default Review;
