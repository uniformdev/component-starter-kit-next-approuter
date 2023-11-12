import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { NavigationMenuSection } from './NavigationMenuSection';
import { registerUniformComponent } from '@/canvas/compat';

export type NavigationMenuSectionProps = ComponentProps<{
  title: string;
}, 'links'>;

export const navigationMenuSectionMapping = registerUniformComponent({
  type: 'navigationMenuSection',
  component: NavigationMenuSection,
});
