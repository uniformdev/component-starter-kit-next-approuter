import { CSSProperties } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Box } from './Box';

export type BoxProps = ComponentProps<{
  style: CSSProperties;
}>;

export const boxMappings = {
  box: Box,
};

export default Box;
