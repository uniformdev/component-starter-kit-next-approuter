import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import Button from '../../components/Button';
import { formatProjectMapLink } from '../../utilities';
import { HeroProps } from './';

export const PrimaryButton: FC<
  Pick<HeroProps, 'primaryButtonLink' | 'primaryButtonStyle' | 'animationType' | 'component' | 'context'>
> = ({ primaryButtonLink, primaryButtonStyle, animationType, component, context }) => {
  return (
    <Button
      className="m-1"
      animationType={animationType}
      href={formatProjectMapLink(primaryButtonLink)}
      copy={
        <UniformText
          placeholder="Button Copy goes here"
          parameterId="primaryButtonCopy"
          component={component}
          context={context}
        />
      }
      style={primaryButtonStyle}
    />
  );
};

export const SecondaryButton: FC<
  Pick<HeroProps, 'secondaryButtonLink' | 'secondaryButtonStyle' | 'animationType' | 'component' | 'context'>
> = ({ secondaryButtonLink, secondaryButtonStyle, animationType, component, context }) => (
  <Button
    className="m-1"
    href={formatProjectMapLink(secondaryButtonLink)}
    animationType={animationType}
    copy={
      <UniformText
        placeholder="Button Copy goes here"
        parameterId="secondaryButtonCopy"
        component={component}
        context={context}
      />
    }
    style={secondaryButtonStyle}
  />
);
