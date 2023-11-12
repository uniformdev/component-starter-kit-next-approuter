import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { FooterSection } from './FooterSection';
import { registerUniformComponent } from '@/canvas/compat';

export type FooterSectionProps = ComponentProps<{ title: string }, 'links'>;

export const footerSectionMapping = registerUniformComponent({
  type: 'footerSection',
  component: FooterSection,
});

export default FooterSection;
