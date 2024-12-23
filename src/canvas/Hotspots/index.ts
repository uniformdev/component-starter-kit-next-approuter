import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import type { Asset } from '@uniformdev/assets';
import { Hotspots } from './Hotspots';

export type HotspotsProps = ComponentProps<
  {
    backgroundImage?: Asset[];
    alt?: string;

    fill?: boolean;
    height?: string;
    width?: string;
    objectFit?: Types.AvailableObjectFit;
  },
  'hotspots'
>;

export const hotspotsMappings = {
  hotspots: Hotspots,
};

export default Hotspots;
