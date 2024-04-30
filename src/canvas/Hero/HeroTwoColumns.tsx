'use client';

import { FC } from 'react';
import classNames from 'classnames';
import { useHeroAnimation } from './animation';
import { BackgroundImage, Container, Description, EyebrowText, PrimaryButton, SecondaryButton, Title } from './atoms';
import { AnimationVariant } from '../../components/AnimatedContainer';
import { HeroProps, DEFAULT_TEXT_COLOR } from './';
import { REGEX_COLOR_HEX } from '../../utilities';
import { getHeroTextStyle } from './helpers';

export const HeroTwoColumns: FC<HeroProps> = ({
  title,
  titleStyle = 'h1',
  image,
  video,
  primaryButtonCopy,
  primaryButtonLink,
  primaryButtonStyle = 'primary',
  primaryButtonAnimationType,
  secondaryButtonCopy,
  secondaryButtonLink,
  secondaryButtonStyle = 'primary',
  secondaryButtonAnimationType,
  overlayOpacity,
  overlayColor,
  objectFit,
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
        <BackgroundImage
          image={image}
          video={video}
          objectFit={objectFit}
          overlayColor={overlayColor}
          overlayOpacity={overlayOpacity}
        />

        <div className={classNames('flex flex-row mx-1 md:mx-10 z-20')}>
          <div className="grid md:grid-cols-2 gap-x-28">
            <div className="flex flex-col">
              <ElementWrapper
                duration={duration}
                delay={getDelayValue(0)}
                animationVariant={animationType === 'fadeIn' ? AnimationVariant.FadeIn : AnimationVariant.FadeInRight}
              >
                <EyebrowText component={component} context={context} className={styles?.eyebrowText} />
              </ElementWrapper>
              <ElementWrapper
                duration={duration}
                delay={getDelayValue(1.5)}
                animationVariant={animationType === 'fadeIn' ? AnimationVariant.FadeIn : AnimationVariant.FadeInRight}
              >
                <Title
                  component={component}
                  context={context}
                  titleStyle={titleStyle}
                  useCustomTextElements={useCustomTextElements}
                  className={classNames('text-left', styles?.title)}
                  title={title}
                />
              </ElementWrapper>
            </div>

            <div className="text-secondary flex flex-col items-start">
              <ElementWrapper
                duration={duration}
                delay={getDelayValue(3)}
                animationVariant={animationType === 'fadeIn' ? AnimationVariant.FadeIn : AnimationVariant.FadeInLeft}
              >
                <Description
                  component={component}
                  context={context}
                  className={classNames('text-left !py-0', styles?.description)}
                />
              </ElementWrapper>
              <div className="py-6">
                {(Boolean(primaryButtonCopy) || isContextualEditing) && (
                  <ElementWrapper
                    duration={duration}
                    delay={getDelayValue(4.5)}
                    animationVariant={
                      animationType === 'fadeIn' ? AnimationVariant.FadeIn : AnimationVariant.FadeInLeft
                    }
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
                    animationVariant={
                      animationType === 'fadeIn' ? AnimationVariant.FadeIn : AnimationVariant.FadeInLeft
                    }
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
        </div>
      </div>
    </Container>
  );
};
