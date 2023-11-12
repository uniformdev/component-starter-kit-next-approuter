import { FC } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { FooterSectionProps } from '.';

export const FooterSection: FC<FooterSectionProps> = ({
  title,
  component,
  context,
  slots,
}) => (
  <div>
    <span className="footer-title opacity-100 text-primary">{title}</span>
    <UniformSlot
      context={context}
      data={component}
      slot={slots.links}
    />
  </div>
);
