import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { withoutContainer } from '../../hocs/withoutContainer';
import { Spacer } from './Spacer';

export type SpacerProps = ComponentProps<{
  colorStyle: Types.AvailableColor;
  thickness: number;
}>;

export enum SpacerVariants {
  Horizontal = 'horizontal',
}

export const spacerMappings = {
  spacer: withoutContainer(Spacer),
};

export default withoutContainer(Spacer);
