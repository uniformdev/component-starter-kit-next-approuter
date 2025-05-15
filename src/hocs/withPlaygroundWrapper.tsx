import { FC, ComponentType } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';

export function withPlaygroundWrapper<T extends object>(Component: ComponentType<T>): FC<ComponentProps<T>> {
  const WrappedComponent = (props: ComponentProps<T>) => {
    const { is_incontext_editing_playground } = props.context?.searchParams ?? {};
    const { type: compositionType } = props.context?.composition ?? {};
    const { type: componentType } = props.component ?? {};
    // If composiiton type is the same as the component type and is in playground mode for this component
    const isPlayground = !!is_incontext_editing_playground && compositionType === componentType;

    if (isPlayground) {
      return (
        <div className="flex justify-center py-16">
          <Component {...props} />
        </div>
      );
    }

    return <Component {...props} />;
  };

  WrappedComponent.displayName = `withPlaygroundWrapper(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
}
