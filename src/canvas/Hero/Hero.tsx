'use client';

import { FC } from 'react';
import BaseHero, { BaseHeroProps, useHeroAnimation } from '@/components/BaseHero';
import { AnimationVariant } from '@/components/AnimatedContainer';
import { PrimaryButton, SecondaryButton } from '@/canvas/Hero/atoms';
import { ComponentProps } from '@uniformdev/canvas-react';

export { BaseHeroVariant as HeroVariant } from '../../components/BaseHero';
export type HeroProps = ComponentProps<
  BaseHeroProps & {
    primaryButtonCopy: string;
    primaryButtonLink: Types.ProjectMapLink;
    primaryButtonStyle: Types.ButtonStyles;
    primaryButtonAnimationType?: Types.AnimationType;
    secondaryButtonCopy: string;
    secondaryButtonLink: Types.ProjectMapLink;
    secondaryButtonStyle: Types.ButtonStyles;
    secondaryButtonAnimationType?: Types.AnimationType;
  }
>;

const Hero: FC<HeroProps> = ({
  primaryButtonCopy,
  primaryButtonAnimationType,
  primaryButtonLink,
  primaryButtonStyle,
  secondaryButtonCopy,
  secondaryButtonAnimationType,
  secondaryButtonLink,
  secondaryButtonStyle,
  component,
  context,
  ...baseProps
}) => {
  const { previewMode } = context || {};
  const isContextualEditing = previewMode === 'editor';
  const { duration = 'medium', animationOrder, delay = 'none', animationType, animationPreview } = baseProps || {};

  const { ElementWrapper, getDelayValue } = useHeroAnimation({
    duration,
    animationOrder,
    delay,
    animationType,
    animationPreview,
  });

  return (
    <BaseHero
      {...baseProps}
      component={component}
      context={context}
      buttonsSlot={
        <>
          {(Boolean(primaryButtonCopy) || isContextualEditing) && (
            <ElementWrapper
              duration={duration}
              delay={getDelayValue(6)}
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
              delay={getDelayValue(9)}
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
        </>
      }
    />
  );
};

export default Hero;
