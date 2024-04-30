import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Accordion } from './Accordion';

type Styles = {
  container?: string;
  title?: string;
  description?: string;
};

export type AccordionProps = ComponentProps<
  {
    title: string;
    description: string;
    styles?: Styles;
  },
  'items'
>;

export const accordionMappings = {
  accordion: Accordion,
};

export default Accordion;
