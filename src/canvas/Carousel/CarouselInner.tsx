'use client';

import { useContext } from 'react';
import classNames from 'classnames';
import { UniformSlotProps } from '@uniformdev/canvas-next-rsc/component';
import { CarouselContext } from './Carousel';

export const CarouselInner = ({
  slot,
  isContextualEditing,
}: {
  slot: Required<UniformSlotProps['slot']>;
  isContextualEditing: boolean;
}) => {
  const { currentIndex } = useContext(CarouselContext);

  return (
    <>
      {slot?.items.map((item, index) => (
        <div
          id={`slide-${index}`}
          key={index}
          className={classNames('min-w-full', {
            hidden: isContextualEditing && currentIndex !== index,
          })}
        >
          {item}
        </div>
      ))}
    </>
  );
};
