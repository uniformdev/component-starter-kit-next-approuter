import { FC } from 'react';
import classNames from 'classnames';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import 'react-multi-carousel/lib/styles.css';
import Button from '../../components/Button';
import { getTextClass } from '../../utilities/styling';
import { formatProjectMapLink } from '../../utilities';
import { getColorClassName } from './helpers';
import { CardBlockProps } from '.';
import { CardBlockCarouselInner } from './CardBlockCarouselInner';

export const CardBlockCarousel: FC<CardBlockProps> = ({
  titleStyle: TitleTag = 'h1',
  buttonCopy,
  buttonLink,
  buttonStyle,
  buttonAnimationType,
  textColorVariant,
  styles,
  context,
  component,
  slots,
}) => {
  const { isContextualEditing } = context || {};
  const colorClassName = getColorClassName(textColorVariant);

  return (
    <div>
      <div
        className={classNames(
          'w-full flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-10',
          styles?.container,
          colorClassName
        )}
      >
        <div className="mb-6 md:mb-0 basis-2/3 xl:basis-auto">
          <UniformText
            placeholder="Title goes here"
            parameterId="title"
            as={TitleTag}
            className={classNames('font-bold', getTextClass(TitleTag))}
            component={component}
            context={context}
          />
          <UniformText
            placeholder="Description goes here"
            parameterId="description"
            as="p"
            className="sm:pr-8"
            component={component}
            context={context}
          />
        </div>
        {(Boolean(buttonCopy) || isContextualEditing) && (
          <Button
            href={formatProjectMapLink(buttonLink)}
            style={buttonStyle}
            animationType={buttonAnimationType}
            copy={
              <UniformText
                placeholder="Button copy goes here"
                parameterId="buttonCopy"
                component={component}
                context={context}
              />
            }
          />
        )}
      </div>
      <CardBlockCarouselInner
        buttonStyle={buttonStyle}
        buttonAnimationType={buttonAnimationType}
        textColorVariant={textColorVariant}
        slot={slots.cardBlockInner}
      />
    </div>
  );
};
