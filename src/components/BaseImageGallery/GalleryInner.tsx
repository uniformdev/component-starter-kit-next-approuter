import { UniformSlotProps } from '@uniformdev/canvas-next-rsc/component';
import { ReactNode } from 'react';
import AnimatedContainer, { AnimationVariant } from '../AnimatedContainer';
import Masonry from 'react-responsive-masonry';

const galleryConfig = {
  firstLineCount: 2,
  secondLineCount: 3,
  otherLinesCount: 4,
};

export const GalleryInner = ({
  slot,
  maxItems,
  animationType,
  duration,
  animationOrder,
  delayValue,
}: {
  slot: UniformSlotProps['slot'];
  maxItems: number | undefined;
  animationType: Types.AnimationType | undefined;
  duration: Types.DurationType;
  animationOrder: Types.AnimationOrder | undefined;
  delayValue: number;
}) => {
  const { items } = slot || {};

  const getDelay = (index: number) => index / 10 + delayValue;

  const imagesGroups = items?.reduce<ReactNode[][]>(
    (acc, item, index) => {
      if (maxItems && index >= maxItems) return acc;
      if (index < galleryConfig.firstLineCount) {
        const dynamicAnimationVariant = index ? AnimationVariant.FadeInLeft : AnimationVariant.FadeInRight;
        acc[0].push(
          animationType ? (
            <AnimatedContainer
              animationVariant={animationType === 'fadeIn' ? AnimationVariant.FadeIn : dynamicAnimationVariant}
              duration={duration}
              delay={animationOrder === 'oneByOne' ? getDelay(index) : 0}
            >
              {item}
            </AnimatedContainer>
          ) : (
            item
          )
        );
      } else if (index < galleryConfig.firstLineCount + galleryConfig.secondLineCount) {
        const dynamicAnimationVariant =
          (maxItems || items.length) < 6 ? AnimationVariant.FadeInBottom : AnimationVariant.FadeIn;
        acc[1].push(
          animationType ? (
            <AnimatedContainer
              animationVariant={animationType === 'fadeIn' ? AnimationVariant.FadeIn : dynamicAnimationVariant}
              duration={duration}
              delay={animationOrder === 'oneByOne' ? getDelay(index) : 0}
            >
              {item}
            </AnimatedContainer>
          ) : (
            item
          )
        );
      } else {
        acc[2].push(
          animationType ? (
            <AnimatedContainer
              animationVariant={AnimationVariant.FadeIn}
              duration={duration}
              delay={animationOrder === 'oneByOne' ? getDelay(index) : 0}
            >
              {item}
            </AnimatedContainer>
          ) : (
            item
          )
        );
      }
      return acc;
    },
    [[], [], []]
  );

  return (
    <div className="flex flex-col gap-6 mt-12">
      {imagesGroups?.map((images, lineIndex) =>
        images.length ? (
          <Masonry
            key={`line-${lineIndex}`}
            columnsCount={
              lineIndex < 2 || images.length < galleryConfig.otherLinesCount
                ? images.length
                : galleryConfig.otherLinesCount
            }
            gutter="24px"
          >
            {images.map((img, ImageIndex) => (
              <div key={`Img-${ImageIndex}`}>{img}</div>
            ))}
          </Masonry>
        ) : null
      )}
    </div>
  );
};
