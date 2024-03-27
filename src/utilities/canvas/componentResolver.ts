import { DefaultNotImplementedComponent } from '@uniformdev/canvas-next-rsc/component';
import { ComponentInstance } from '@uniformdev/canvas';

export type ComponentMappings = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const createComponentResolver =
  (mappings: ComponentMappings) =>
  ({ component }: { component: ComponentInstance }) => ({
    component: mappings[component?.type] || DefaultNotImplementedComponent,
  });
