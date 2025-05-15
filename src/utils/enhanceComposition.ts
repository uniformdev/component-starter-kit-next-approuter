'use server';

import type { ComponentInstance, RootComponentInstance } from '@uniformdev/canvas';
import { EnhancerBuilder, enhance } from '@uniformdev/canvas';

export const enhanceComposition = async (composition: RootComponentInstance) => {
  await enhanceParameters(composition, composition);
};

const enhanceParameters = async (component: ComponentInstance, composition: RootComponentInstance) => {
  await enhance({
    composition: component,
    enhancers: new EnhancerBuilder().component(
      'button',
      (button) =>
        button
          .parameterName('eventLabel', eventLabelEnhancer)
    ),
    context: { composition: composition },
  });
};

const eventLabelEnhancer = async ({ context, component, parameter }: { context: any, component: any, parameter: any }) => {
  console.log('parameter!!!!', { parameter, component, context });
  return parameter.value;
};