import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { withoutContainer } from '../../../hocs/withoutContainer';
import { ContainerProps as BaseContainerProps } from '../../../components/Container';
import { Container } from './Container';

export type ContainerProps = ComponentProps<BaseContainerProps, 'container-inner'>;

export const containerMappings = {
  container: withoutContainer(Container),
};

export default Container;
