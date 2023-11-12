import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { AccordionItem } from './AccordionItem';
import { registerUniformComponent } from '@/canvas/compat';

type Styles = {
  container?: string;
  toggleButton?: string;
  title?: string;
  description?: string;
};

export type AccordionItemProps = ComponentProps<{
  title: string;
  description: string;
  styles?: Styles;
}>;

export const accordionItemMapping = registerUniformComponent({
  type: 'accordionItem',
  component: AccordionItem,
});

export default AccordionItem;
