import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import Rating from '../../components/Rating';
import { getLineClampClass } from '../../utilities/styling';
import { ReviewProps } from './.';

export const MultiColumnReview: FC<ReviewProps> = ({
  picture,
  stars,
  textColorVariant,
  starsColor,
  showReviewLabel,
  lineCountRestriction,
  styles,
  component,
  context
}) => {
  const baseTextStyle = textColorVariant === 'Light' ? 'text-primary-content' : 'text-secondary-content';

  return (
    <div className="grid grid-cols-12 border-t-[1px] last:border-b-[1px] py-6">
      <div className="col-span-4">
        {Boolean(picture) && (
          <Image className="rounded-full" src={picture} width={48} height={48} alt="reviewer-icon" />
        )}
        <UniformText
          className={classNames('font-medium mt-2', baseTextStyle)}
          as="p"
          parameterId="personName"
          placeholder="Reviewer name goes here"
          component={component}
          context={context}
        />
        <UniformText
          className={classNames('text-sm mt-1', styles?.date)}
          as="p"
          parameterId="date"
          placeholder="Date goes here"
          component={component}
          context={context}
        />
      </div>
      <div className="col-span-4">
        <Rating rating={stars} showReviewLabel={showReviewLabel} starsColor={starsColor} />
      </div>
      <div className="col-span-4">
        <UniformText
          className={classNames('font-medium', baseTextStyle)}
          as="p"
          parameterId="title"
          placeholder="Review title goes here"
          component={component}
          context={context}
        />
        <UniformText
          className={classNames('mt-4', baseTextStyle, getLineClampClass(lineCountRestriction), styles?.description)}
          as="p"
          parameterId="description"
          placeholder="Review description goes here"
          component={component}
          context={context}
        />
      </div>
    </div>
  );
};
