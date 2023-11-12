import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { NavigationMenu } from './NavigationMenu';
import { registerUniformComponent } from '@/canvas/compat';


export type NavigationMenuProps = ComponentProps<{
  title: string;
  link: Types.ProjectMapLink;
}, 'content'>;

export const navigationMenuMapping = registerUniformComponent({
  type: 'navigationMenu',
  component: NavigationMenu,
});
