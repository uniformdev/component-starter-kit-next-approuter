'use client';

import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import BaseHero, { useHeroAnimation } from '../../components/BaseHero';
import { AnimationVariant } from '../../components/AnimatedContainer';
import { HeroContainerProps } from './';

const HeroContainer: FC<HeroContainerProps> = ({ component, context, slots, ...baseProps }) => {
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
      slots={slots}
      buttonsSlot={
        <div className="flex justify-center gap-2 flex-wrap">
          <UniformSlot context={context} slot={slots.buttonsSection} data={component}>
            {({ child: button, key, slotIndex }) => (
              <ElementWrapper
                key={`hero-button-${key}`}
                duration={duration}
                delay={getDelayValue(4.5 + 1.5 * slotIndex)}
                animationVariant={animationType === 'fadeIn' ? AnimationVariant.FadeIn : AnimationVariant.FadeInLeft}
              >
                {button}
              </ElementWrapper>
            )}
          </UniformSlot>
        </div>
      }
    />
  );
};

export default HeroContainer;
