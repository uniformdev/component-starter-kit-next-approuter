'use client';

import { FC } from 'react';
import classNames from 'classnames';
import { Container, Description, EyebrowText, PrimaryButton, SecondaryButton, Title } from './atoms';
import { useHeroAnimation } from './animation';
import { AnimationVariant } from '../../components/AnimatedContainer';
import { HeroProps, DEFAULT_TEXT_COLOR } from './';
import { REGEX_COLOR_HEX } from '../../utilities';
import { getHeroTextStyle } from './helpers';

export const HeroDefault: FC<HeroProps> = ({
  title,
  titleStyle = 'h1',
  description,
  primaryButtonCopy,
  primaryButtonLink,
  primaryButtonStyle = 'primary',
  primaryButtonAnimationType,
  secondaryButtonCopy,
  secondaryButtonLink,
  secondaryButtonStyle = 'primary',
  secondaryButtonAnimationType,
  useCustomTextElements = false,
  fullHeight,
  animationType,
  duration = 'medium',
  animationOrder,
  backgroundType, // Deprecated
  backgroundColor,
  containerVariant,
  paddingBottom,
  paddingTop,
  marginBottom,
  marginTop,
  textColorVariant, // Deprecated
  textColor = DEFAULT_TEXT_COLOR,
  animationPreview,
  delay = 'none',
  styles,
  component,
  context,
}) => {
  const { isContextualEditing } = context || {};

  const currentColor = REGEX_COLOR_HEX.test(textColorVariant || textColor || DEFAULT_TEXT_COLOR)
    ? textColor
    : undefined;
  const baseTextStyle = getHeroTextStyle(textColorVariant || textColor);

  const { ElementWrapper, getDelayValue } = useHeroAnimation({
    duration,
    animationOrder,
    delay,
    animationType,
    animationPreview,
  });

  return (
    <Container
      fullHeight={fullHeight}
      className={classNames({ [baseTextStyle]: !currentColor })}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      marginBottom={marginBottom}
      marginTop={marginTop}
      backgroundType={backgroundColor || backgroundType}
      containerVariant={containerVariant}
    >
      <div
        className={classNames('hero-content text-center p-0', {
          'h-full items-start pt-20': fullHeight,
        })}
        style={{ color: currentColor }}
      >
        <div className={classNames('flex flex-col mx-1 md:mx-10 z-20')}>
          <ElementWrapper
            duration={duration}
            delay={getDelayValue(0)}
            animationVariant={animationType === 'fadeIn' ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
          >
            <EyebrowText component={component} context={context} className={styles?.eyebrowText} />
          </ElementWrapper>
          <ElementWrapper
            duration={duration}
            delay={getDelayValue(1.5)}
            animationVariant={animationType === 'fadeIn' ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
          >
            <Title
              component={component}
              context={context}
              titleStyle={titleStyle}
              useCustomTextElements={useCustomTextElements}
              title={title}
              className={styles?.title}
            />
          </ElementWrapper>
          <ElementWrapper
            duration={duration}
            delay={getDelayValue(3)}
            animationVariant={animationType === 'fadeIn' ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
          >
            <Description component={component} context={context} className={styles?.description} />
          </ElementWrapper>
          <div className={classNames('pb-6', { 'py-6': !description })}>
            {(Boolean(primaryButtonCopy) || isContextualEditing) && (
              <ElementWrapper
                duration={duration}
                delay={getDelayValue(4.5)}
                animationVariant={animationType === 'fadeIn' ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
              >
                <PrimaryButton
                  component={component}
                  context={context}
                  animationType={primaryButtonAnimationType}
                  primaryButtonLink={primaryButtonLink}
                  primaryButtonStyle={primaryButtonStyle}
                />
              </ElementWrapper>
            )}
            {(Boolean(secondaryButtonCopy) || isContextualEditing) && (
              <ElementWrapper
                duration={duration}
                delay={getDelayValue(6)}
                animationVariant={animationType === 'fadeIn' ? AnimationVariant.FadeIn : AnimationVariant.FadeInTop}
              >
                <SecondaryButton
                  component={component}
                  context={context}
                  animationType={secondaryButtonAnimationType}
                  secondaryButtonLink={secondaryButtonLink}
                  secondaryButtonStyle={secondaryButtonStyle}
                />
              </ElementWrapper>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
