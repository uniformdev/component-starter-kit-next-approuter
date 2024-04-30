import { CSSProperties } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { AdvancedContainer } from './AdvancedContainer';
import { withoutContainer } from '../../../hocs/withoutContainer';
import { PaddingSize } from '../../../utilities/styling';

export enum AdvancedContainerVariants {
  FluidContent = 'fluidContent',
}

export type AdvancedContainerProps = ComponentProps<
  {
    title?: string;
    backgroundColor?: Types.ThemeColorsValues | string;
    paddingTop?: PaddingSize;
    paddingBottom?: PaddingSize;
    marginTop?: PaddingSize;
    marginBottom?: PaddingSize;
    style: CSSProperties;
  },
  'content' | 'background'
>;

export const advancedContainerMappings = {
  advancedContainer: withoutContainer(AdvancedContainer, { withoutPaddings: true }),
};

export default AdvancedContainer;
