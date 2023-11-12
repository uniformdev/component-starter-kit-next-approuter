import { ResolveComponentFunction, DefaultNotImplementedComponent } from '@uniformdev/canvas-next-rsc/component';
import { resolver } from './';

export const resolveComponent: ResolveComponentFunction = ({ component }) => {
  const baseComponent = resolver({ component });

  if (baseComponent?.component) {
    return baseComponent;
  }

  return {
    component: DefaultNotImplementedComponent,
  };
};
