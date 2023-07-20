import { FC } from 'react';

import { ComponentProps, UniformSlot, registerUniformComponent } from '@uniformdev/canvas-next-rsc';

type LinkProps = ComponentProps<{
  title: string;
}>;

const NavigationMenuSection: FC<LinkProps> = ({ title, component, context }) => (
  <div>
    <p className="text-primary-content font-bold">{title}</p>
    <UniformSlot
      name="links"
      data={component}
      context={context}
    />
  </div>
);

registerUniformComponent({
  type: 'navigationMenuSection',
  component: NavigationMenuSection,
});
