import { FC } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { MultiColumnReview } from './MultiColumnReview';
import { DefaultReview } from './Review';

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
  picture?: string | Asset;
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

const Review: FC<ReviewProps> = ({ component, context, ...reviewData }) =>
  component?.variant === ReviewVariant.MultiColumn ? (
    <MultiColumnReview component={component} context={context} {...reviewData} />
  ) : (
    <DefaultReview component={component} context={context} {...reviewData} />
  );

export const reviewMappings = {
  review: Review,
};

export default Review;
