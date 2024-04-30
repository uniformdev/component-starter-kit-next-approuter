import { FC } from 'react';
import classNames from 'classnames';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import Button from '../../components/Button';
import { getTextClass } from '../../utilities/styling';
import { formatProjectMapLink } from '../../utilities';
import { getCallToActionContentClass, getCallToActionTextWrappersClass } from './helpers';
import { CallToActionProps } from '.';

export const CallToAction: FC<CallToActionProps> = ({
  titleStyle: TitleTag = 'h2',
  primaryButtonCopy,
  primaryButtonLink,
  primaryButtonStyle,
  primaryButtonAnimationType,
  secondaryButtonCopy,
  secondaryButtonLink,
  secondaryButtonStyle,
  secondaryButtonAnimationType,
  textColorVariant,
  styles,
  component: { variant } = {},
  context,
  component,
}) => {
  const { isContextualEditing } = context || {};
  const isLightTextColor = textColorVariant === 'Light';
  const eyebrowTextColorStyle = isLightTextColor ? 'text-secondary' : 'text-primary';
  const textColorStyle = isLightTextColor ? 'text-primary-content' : 'text-secondary-content';

  return (
    <div
      className={classNames(
        'flex flex-wrap items-center justify-between w-full lg:flex-nowrap rounded-xl',
        textColorStyle,
        styles?.container
      )}
    >
      <div className={classNames('flex', getCallToActionContentClass(variant))}>
        <div className={getCallToActionTextWrappersClass(variant)}>
          <UniformText
            placeholder="Eyebrow text goes here"
            parameterId="eyebrowText"
            as="div"
            className={classNames(
              'text-sm font-bold tracking-wider uppercase text-primary my-3',
              eyebrowTextColorStyle
            )}
            component={component}
            context={context}
          />
          <UniformText
            placeholder="Title goes here"
            parameterId="title"
            as={TitleTag}
            className={classNames('font-medium', getTextClass(TitleTag))}
            component={component}
            context={context}
          />
          <UniformText
            placeholder="Description goes here"
            parameterId="description"
            as="p"
            className="py-6 text-xl"
            component={component}
            context={context}
          />
        </div>
        <div className="flex justify-between">
          {(Boolean(primaryButtonCopy) || isContextualEditing) && (
            <Button
              href={formatProjectMapLink(primaryButtonLink)}
              animationType={primaryButtonAnimationType}
              copy={
                <UniformText
                  placeholder="Description goes here"
                  parameterId="primaryButtonCopy"
                  component={component}
                  context={context}
                />
              }
              style={primaryButtonStyle}
            />
          )}
          {(Boolean(secondaryButtonCopy) || isContextualEditing) && (
            <Button
              href={formatProjectMapLink(secondaryButtonLink)}
              animationType={secondaryButtonAnimationType}
              copy={
                <UniformText
                  placeholder="Description goes here"
                  parameterId="secondaryButtonCopy"
                  component={component}
                  context={context}
                />
              }
              style={secondaryButtonStyle}
            />
          )}
        </div>
      </div>
    </div>
  );
};
