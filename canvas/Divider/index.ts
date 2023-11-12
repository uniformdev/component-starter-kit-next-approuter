import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Divider } from './Divider';
import { registerUniformComponent } from '@/canvas/compat';

export type DividerProps = ComponentProps<{
  colorStyle: Types.AvailableColor;
  thickness: number;
}>;

export default Divider;

export const dividerMapping = registerUniformComponent({
  type: 'divider',
  component: Divider,
});
