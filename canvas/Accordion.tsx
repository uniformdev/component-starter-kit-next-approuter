import { FC } from 'react';
import { ComponentProps, UniformSlot, registerUniformComponent, UniformText } from '@uniformdev/canvas-next-rsc';

type Props = ComponentProps<{
  title: string;
  description: string;
}>;

const Accordion: FC<Props> = ({
  component,
  context,
}) => (
  <div className="text-secondary-content">
    <UniformText
      placeholder="Title goes here"
      parameterId="title"
      as="p"
      className="text-3xl font-extrabold pb-4"
      component={component}
    />
    <UniformText
      placeholder="Description goes here"
      parameterId="description"
      as="p"
      className="text-xl pb-6"
      component={component}
    />
    <UniformSlot
      name="items"
      data={component}
      context={context}
    />
  </div>
);

registerUniformComponent({
  type: 'accordion',
  component: Accordion,
});

export default Accordion;
