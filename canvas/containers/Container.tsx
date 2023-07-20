import { FC } from 'react';
import { UniformSlot, ComponentProps, registerUniformComponent } from '@uniformdev/canvas-next-rsc';
import BaseContainer, { Props as BaseContainerProps, ContainerVariants } from '@/components/Container';

export type ContainerProps = ComponentProps<BaseContainerProps>;

const Container: FC<ContainerProps> = props => (
  <BaseContainer {...props} containerVariant={props?.component?.variant}>
    <UniformSlot
      name="container-inner"
      data={props.component}
      context={props.context}
    />
  </BaseContainer>
);

[undefined, ContainerVariants.BackgroundInContainer, ContainerVariants.FluentContent].forEach(variantId => {
  registerUniformComponent({
    type: 'container',
    component: Container,
    variantId,
  });
});

export default Container;
