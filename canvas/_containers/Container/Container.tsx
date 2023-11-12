import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import BaseContainer from '../../../components/Container';
import { ContainerProps } from '.';

export const Container: FC<ContainerProps> = ({
  children,
  component,
  context,
  slots,
  ...rest
}) => (
  <BaseContainer {...rest} containerVariant={component?.variant}>
    <UniformSlot
      context={context}
      data={component}
      slot={slots['container-inner']}
    />
  </BaseContainer>
);
