import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Divider } from './Divider';

export type DividerProps = ComponentProps<{
  colorStyle: Types.AvailableColor;
  thickness: number;
}>;

export const dividerMappings = {
  divider: Divider,
};

export default Divider;
