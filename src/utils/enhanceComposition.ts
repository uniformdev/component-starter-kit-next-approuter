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
    // @ts-expect-error
    context: { composition },
  });
};

const eventLabelEnhancer = async ({ context, component, parameter }: { context: any, component: any, parameter: any }) => {
  let value = parameter.value;

  // Helper to sluggify text
  const sluggify = (str: string) =>
    str
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');

  // Get replacements
  const replacements: Record<string, string> = {
    '%LOCALE%': 'en',
    '%COMPOSITION-TYPE%': sluggify(context?.composition?.type) || 'unknown',
    '%COMPOSITION-NAME%': sluggify(context?.composition?._name) || 'unknown',
    '%COMPONENT-TYPE%': sluggify(component?.type) || 'unknown',
    '%TEXT-PARAM%': component?.parameters?.text?.value ? sluggify(component.parameters.text.value) : 'unknown',
  };

  // Replace tokens
  Object.entries(replacements).forEach(([token, realValue]) => {
    value = value?.replaceAll(token, realValue);
  });

  return value;
};