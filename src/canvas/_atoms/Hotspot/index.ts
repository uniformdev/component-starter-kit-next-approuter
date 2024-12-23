import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { Hotspot } from './Hotspot';

export type HotspotProps = ComponentProps<
  {
    icon?: Asset[];
    iconHorizontalPosition?: string;
    iconVerticalPosition?: string;

    tooltipPosition?: Types.Position;
    tooltipWidth?: string;
    tooltipBackgroundColor?: Types.ThemeColorsValues | string;
    withTooltipShadow?: boolean;
  },
  'content'
>;

export const hotspotMappings = {
  hotspot: Hotspot,
};

export default Hotspot;
