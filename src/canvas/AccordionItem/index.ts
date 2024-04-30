import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { AccordionItem } from './AccordionItem';

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

export const accordionItemMappings = {
  accordionItem: AccordionItem,
};

export default AccordionItem;
export * from './decorator';
