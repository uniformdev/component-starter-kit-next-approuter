import { ComponentType, FC } from 'react';
import { flattenValues, FlattenValuesOptions } from '@uniformdev/canvas';
import { ComponentProps } from '@/types/cskTypes';

export const withFlattenParameters = <TProps extends ComponentProps<T>, T>(
  WrappedComponent: ComponentType<TProps>,
  options?: FlattenValuesOptions
): ComponentType<TProps> => {
  const ComponentWithContainer: FC<TProps> = props => (
    <WrappedComponent {...flattenValues(props, options)} {...props} />
  );
  ComponentWithContainer.displayName = `withFlattenParameters(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return ComponentWithContainer;
};
