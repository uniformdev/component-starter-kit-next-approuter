'use client';

import { FC } from 'react';
import { UniformText } from '@uniformdev/canvas-next-rsc/component';
import BaseButton from '../../components/Button';
import { formatProjectMapLink } from '../../utilities';
import { ButtonProps } from '.';

export const Button: FC<ButtonProps> = ({ link, style, animationType, component, context }) => {
  const { isContextualEditing } = context;
  return (
    <BaseButton
      href={formatProjectMapLink(link)}
      animationType={animationType}
      copy={
        <UniformText
          placeholder="buttonCopy goes here"
          parameterId="copy"
          onClick={isContextualEditing ? e => e.preventDefault() : undefined}
          component={component}
          context={context}
        />
      }
      style={style}
    />
  );
};
