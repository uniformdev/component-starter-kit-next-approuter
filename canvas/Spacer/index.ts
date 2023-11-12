import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { withoutContainer } from '../../hocs/withoutContainer';
import { Spacer } from './Spacer';
import { registerUniformComponent } from '@/canvas/compat';

export type SpacerProps = ComponentProps<{
  colorStyle: Types.AvailableColor;
  thickness: number;
}>;

export enum SpacerVariants {
  Vertical = 'vertical',
}

export const spacerMappings = [undefined, SpacerVariants.Vertical].map(variantId => {
  return registerUniformComponent({
    type: 'spacer',
    component: withoutContainer(Spacer),
    variantId,
  });
});

export default withoutContainer(Spacer);
