import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { NavigationOneColumnMenu } from './NavigationOneColumnMenu';
import { registerUniformComponent } from '@/canvas/compat';

export type NavigationOneColumnMenuProps = ComponentProps<{
  description?: string;
  icon?: string;
  primaryButtonCopy: string;
  primaryButtonLink: Types.ProjectMapLink;
  primaryButtonStyle: Types.ButtonStyles;
  secondaryButtonCopy: string;
  secondaryButtonLink: Types.ProjectMapLink;
  secondaryButtonStyle: Types.ButtonStyles;
}, 'menuLinks' | 'defaultContent'>;

export const navigationOneColumnMenuMapping = registerUniformComponent({
  type: 'navigationOneColumnMenu',
  component: NavigationOneColumnMenu,
});
