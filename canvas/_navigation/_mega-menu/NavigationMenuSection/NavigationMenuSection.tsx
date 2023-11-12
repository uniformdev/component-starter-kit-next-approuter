import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { NavigationMenuSectionProps } from '.';

export const NavigationMenuSection: FC<NavigationMenuSectionProps> = ({
  title,
  context,
  component,
  slots,
}) => (
  <div>
    <p className="text-primary-content font-bold">{title}</p>
    <UniformSlot
      context={context}
      data={component}
      slot={slots.links}
    />
  </div>
);
