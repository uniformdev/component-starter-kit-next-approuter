import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import Button from '../../components/Button';
import { getTextClass } from '../../utilities/styling';
import { formatProjectMapLink } from '../../utilities';
import { getColorClassName } from './helpers';
import { CardBlockProps } from '.';

export const CardBlockDefault: FC<CardBlockProps> = ({
  buttonCopy,
  buttonLink,
  titleStyle: TitleTag = 'h1',
  buttonStyle,
  buttonAnimationType,
  textColorVariant,
  styles,
  component,
  context,
  slots,
}) => {
  const { isContextualEditing } = context || {};
  const colorClassName = getColorClassName(textColorVariant);

  return (
    <div
      className={classNames(
        'flex items-center justify-between py-2 gap-2 flex-wrap',
        styles?.container,
        colorClassName
      )}
    >
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between px-3 pb-6">
        <div className="basis-2/3 xl:basis-auto">
          <UniformText
            placeholder="Title goes here"
            parameterId="title"
            as={TitleTag}
            className={classNames('font-bold', getTextClass(TitleTag), styles?.title)}
            component={component}
            context={context}
          />
          <UniformText
            placeholder="Description goes here"
            parameterId="description"
            as="p"
            className={classNames('py-6', styles?.description)}
            component={component}
            context={context}
          />
        </div>
        {(Boolean(buttonCopy) || isContextualEditing) && (
          <Button
            href={formatProjectMapLink(buttonLink)}
            animationType={buttonAnimationType}
            copy={
              <UniformText
                placeholder="Button copy goes here"
                parameterId="buttonCopy"
                component={component}
                context={context}
              />
            }
            style={buttonStyle}
          />
        )}
      </div>
      <UniformSlot context={context} slot={slots.cardBlockInner} data={component} />
    </div>
  );
};
