import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Accordion } from './Accordion';
import { registerUniformComponent } from '@/canvas/compat';

type Styles = {
  container?: string;
  title?: string;
  description?: string;
};

export type AccordionProps = ComponentProps<{
  title: string;
  description: string;
  styles?: Styles;
}, 'items'>;

export const accordionMapping = registerUniformComponent({
  type: 'accordion',
  component: Accordion,
});

export default Accordion;
