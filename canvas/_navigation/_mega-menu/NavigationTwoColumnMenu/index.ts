import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { NavigationTwoColumnsMenu } from './NavigationTwoColumnMenu';
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
}, 'leftColumn' | 'rightColumn' | 'content'>;

export const navigationTwoColumnsMenuMapping = registerUniformComponent({
  type: 'navigationTwoColumnsMenu',
  component: NavigationTwoColumnsMenu,
});
