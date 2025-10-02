'use client';

import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc-v2/component';
import BaseCarousel from '@/components/ui/Carousel';
import { withFlattenParameters } from '@/utils/withFlattenParameters';
import { CarouselParameters, CarouselProps } from '.';

const Carousel: FC<CarouselProps & CarouselParameters> = ({
  slots,
  backgroundColor,
  spacing,
  border,
  fluidContent,
  height,
  itemsPerPage,
  gapX,
  variant,
}) => (
  <BaseCarousel
    {...{ backgroundColor, spacing, border, fluidContent, height, itemsPerPage, gapX }}
    countOfItems={slots.carouselItems?.items.length ?? 0}
    variant={variant}
  >
    {({ className, style }) => (
      <UniformSlot slot={slots.carouselItems}>
        {({ child, key }) => (
          <div key={key} className={className} style={style}>
            {child}
          </div>
        )}
      </UniformSlot>
    )}
  </BaseCarousel>
);

export default withFlattenParameters(Carousel);
