import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import BaseButton from '../../components/Button';
import { formatProjectMapLink } from '../../utilities';
import { ButtonProps } from '.';

export const Button: FC<ButtonProps> = ({ copy, link, style, animationType, component, context }) => {
  const { isContextualEditing } = context || {};

  if (!Boolean(copy) && !isContextualEditing) {
    return null;
  }

  return (
    <BaseButton
      href={formatProjectMapLink(link)}
      animationType={animationType}
      copy={
        <UniformText placeholder="buttonCopy goes here" parameterId="copy" component={component} context={context} />
      }
      style={style}
    />
  );
};
