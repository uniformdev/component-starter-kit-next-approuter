import { FC } from 'react';
import classNames from 'classnames';
import {
  ComponentProps,
  UniformSlot,
  isIncontextEditingEnabled,
  registerUniformComponent,
} from '@uniformdev/canvas-next-rsc';
import { CarouselWrapper } from './CarouselWrapper';

export enum CarouselVariants {
  ImageGallery = 'imageGallery',
}

const Carousel: FC<ComponentProps> = ({ component, context }) => {
  const isContextualEditing = isIncontextEditingEnabled(context);

  return (
    <CarouselWrapper
      component={component}
      context={context}
    >
      <UniformSlot
        name="carouselItem"
        data={component}
        context={context}
      >
        {({ child, key }) => {
          const keyElements = (key as string).split('-');

          const currentChildIndex = parseInt(keyElements[keyElements.length - 1], 10);

          return (
            <div
              id={`slide-${currentChildIndex}`}
              key={currentChildIndex}
              className={classNames('min-w-full', {
                hidden: isContextualEditing,
              })}
            >
              {child}
            </div>
          );
        }}
      </UniformSlot>
    </CarouselWrapper>
  );
};

[undefined, CarouselVariants.ImageGallery].forEach(variantId => {
  registerUniformComponent({
    type: 'carousel',
    component: Carousel,
    variantId,
  });
});

export default Carousel;
