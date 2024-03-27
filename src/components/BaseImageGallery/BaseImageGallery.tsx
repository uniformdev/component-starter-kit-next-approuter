'use client';

import { FC, Fragment, useState, useEffect } from 'react';
import classNames from 'classnames';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import BaseContainer, { ContainerVariants, ScreenContainer } from '../../components/Container';
import Image from '../../components/Image';
import { withoutContainer } from '../../hocs/withoutContainer';
import { DelayVariants } from '../../components/AnimatedContainer';
import { getMediaUrl, isMediaAsset } from '../../utilities';
import { getTextClass } from '../../utilities/styling';
import { BaseImageGalleryProps } from './';
import { GalleryInner } from './GalleryInner';

const BaseImageGallery: FC<BaseImageGalleryProps> = ({
  titleStyle: TitleTag = 'h1',
  items,
  maxItems,
  animationType,
  animationOrder,
  duration = 'medium',
  animationPreview,
  delay = 'none',
  component,
  context,
  slots,
  styles,
  ...props
}) => {
  const [, setRunAnimationToggle] = useState(false);
  const delayValue = DelayVariants[delay];

  const isContentPlaceholder =
    !component?.slots?.images?.length || component?.slots?.images?.[0]?._id?.startsWith('placeholder');

  const slotsToRender = !isContentPlaceholder
    ? slots.images
    : {
        name: 'images',
        items:
          items?.map((image, index) => {
            const key = (() => {
              if ('_id' in image) return image?._id;
              return `image-${index}`;
            })();
            const imgSrc = getMediaUrl(image);
            const { defaultWidth, defaultHeight } = (() => {
              if (isMediaAsset(image)) {
                return {
                  defaultWidth: image.fields?.width?.value,
                  defaultHeight: image.fields?.height?.value,
                };
              }
              return { defaultWidth: undefined, defaultHeight: undefined };
            })();
            return <Image key={key} src={imgSrc} alt={`Image ${index}`} width={defaultWidth} height={defaultHeight} />;
          }) || [],
      };

  useEffect(() => {
    setRunAnimationToggle(prevState => (animationPreview ? !prevState : prevState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationPreview]);

  const variant = component?.variant;

  const isFluid = variant === ContainerVariants.FluidContent;

  const Wrapper = isFluid ? ScreenContainer : Fragment;

  return (
    <BaseContainer {...props} containerVariant={component?.variant}>
      <Wrapper {...(isFluid ? { className: 'xl:px-0 px-4' } : {})}>
        <UniformText
          placeholder="Title goes here"
          parameterId="title"
          as={TitleTag}
          className={classNames('uppercase', getTextClass(TitleTag), styles?.title)}
          component={component}
          context={context}
        />
        <UniformText
          placeholder="Description goes here"
          parameterId="description"
          as="p"
          className={styles?.description}
          component={component}
          context={context}
        />
      </Wrapper>

      <GalleryInner
        animationOrder={animationOrder}
        animationType={animationType}
        delayValue={delayValue}
        duration={duration}
        maxItems={maxItems}
        slot={slotsToRender}
      />
    </BaseContainer>
  );
};

export default withoutContainer(BaseImageGallery);
