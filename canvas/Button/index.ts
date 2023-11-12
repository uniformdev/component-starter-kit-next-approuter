import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Button } from './Button';
import { registerUniformComponent } from '@/canvas/compat';

export type ButtonProps = ComponentProps<{
  copy: string;
  link: Types.ProjectMapLink;
  style: Types.ButtonStyles;
  animationType?: Types.AnimationType;
}>;

export const buttonMapping = registerUniformComponent({
  type: 'button',
  component: Button,
});

export default Button;
