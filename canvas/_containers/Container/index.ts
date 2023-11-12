import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { withoutContainer } from '../../../hocs/withoutContainer';
import { ContainerProps as BaseContainerProps, ContainerVariants } from '../../../components/Container';
import { Container } from './Container';
import { registerUniformComponent } from '@/canvas/compat';

export type ContainerProps = ComponentProps<BaseContainerProps, 'container-inner'>;

export const containerMappings = [undefined, ContainerVariants.BackgroundInContainer, ContainerVariants.FluidContent].map(variantId => {
  return registerUniformComponent({
    type: 'container',
    component: withoutContainer(Container),
    variantId,
  });
});

export default Container;
