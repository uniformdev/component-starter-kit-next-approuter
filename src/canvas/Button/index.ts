import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Button } from './Button';

export type ButtonProps = ComponentProps<{
  copy: string;
  link: Types.ProjectMapLink;
  style: Types.ButtonStyles;
  animationType?: Types.AnimationType;
}>;

export const buttonMappings = {
  button: Button,
};

export default Button;
