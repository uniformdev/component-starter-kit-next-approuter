import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { NavigationSectionProps } from '.';

export const NavigationSection: FC<NavigationSectionProps> = ({ title, component, context, slots }) => (
  <div>
    <span className="footer-title opacity-100 text-primary">{title}</span>
    <UniformSlot context={context} slot={slots.links} data={component} />
  </div>
);
