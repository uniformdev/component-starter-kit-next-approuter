'use client';

import CarouselButtons from '@/components/CarouselButtons';
import CustomMultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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


export const MultiCarousel = ({
  children,
  buttonStyle
}: {
  children: React.ReactNode,
  buttonStyle: Types.ButtonStyles
}) => {

  return (
    <CustomMultiCarousel
      ssr
      deviceType="desktop"
      renderDotsOutside
      customButtonGroup={<CarouselButtons buttonStyle={buttonStyle} />}
      renderButtonGroupOutside
      shouldResetAutoplay={false}
      arrows={false}
      itemClass="px-2.5"
      containerClass="-mx-2.5"
      responsive={defaultResponsiveData}
    >
      {children}
    </CustomMultiCarousel>
  )
}