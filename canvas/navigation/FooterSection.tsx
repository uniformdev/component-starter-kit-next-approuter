import { FC } from 'react';
import { UniformSlot, ComponentProps, registerUniformComponent } from '@uniformdev/canvas-next-rsc';

type FooterSectionProps = ComponentProps<{
  title: string;
}>;

const FooterSection: FC<FooterSectionProps> = ({ title, component, context }) => (
  <div>
    <span className="footer-title opacity-100 text-primary">{title}</span>
    <UniformSlot
      name="links"
      data={component}
      context={context}
    />
  </div>
);

registerUniformComponent({
  type: 'footerSection',
  component: FooterSection,
});

export default FooterSection;
