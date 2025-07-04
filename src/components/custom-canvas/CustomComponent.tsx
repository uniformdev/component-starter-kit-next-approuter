import { FC } from 'react';
import { ComponentParameter, UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc-v2/component';
import { ComponentProps } from '@uniformdev/csk-components/types/cskTypes';
import { withFlattenParameters } from '@uniformdev/csk-components/utils/withFlattenParameters';

// Here, you can add parameters to be used on the canvas side.
export type CustomComponentParameters = {
  displayName?: string;
};
// Here, you can add slots names to be used on the canvas side.
enum CustomComponentSlots {
  CustomComponentContent = 'customComponentContent',
}

type CustomComponentProps = ComponentProps<CustomComponentParameters, CustomComponentSlots>;

const CustomComponent: FC<CustomComponentProps & CustomComponentParameters> = ({ parameters, component, slots }) => (
  // Your implementation of the component logic
  <div>
    <UniformText
      placeholder="Text goes here"
      parameter={parameters.displayName as ComponentParameter<string>}
      as="h1"
      component={component}
    />
    <UniformSlot slot={slots.customComponentContent} />
  </div>
);

export default withFlattenParameters(CustomComponent);
