'use client';

import { CardBlockProps } from '.';
import CarouselButtons from '../../components/CarouselButtons';
import MultiCarousel from 'react-multi-carousel';
import { getColorClassName } from './helpers';
import { UniformSlotProps } from '@uniformdev/canvas-next-rsc/component';

const defaultResponsiveData = {
  desktop: {
    breakpoint: { max: Infinity, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 568 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 568, min: 0 },
    items: 1,
  },
};

export const CardBlockCarouselInner = ({
  buttonAnimationType,
  buttonStyle,
  textColorVariant,
  slot,
}: Pick<CardBlockProps, 'buttonAnimationType' | 'buttonStyle' | 'textColorVariant'> & {
  slot: Required<UniformSlotProps['slot']>;
}) => {
  const colorClassName = getColorClassName(textColorVariant);

  return (
    <MultiCarousel
      ssr
      deviceType="desktop"
      renderDotsOutside
      customButtonGroup={
        <CarouselButtons
          buttonAnimationStyle={buttonAnimationType}
          buttonStyle={buttonStyle}
          colorClassName={colorClassName}
        />
      }
      renderButtonGroupOutside
      shouldResetAutoplay={false}
      arrows={false}
      itemClass="px-2.5 flex"
      containerClass="-mx-2.5"
      responsive={defaultResponsiveData}
    >
      {slot?.items}
    </MultiCarousel>
  );
};
