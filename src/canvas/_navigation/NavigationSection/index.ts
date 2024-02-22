import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { NavigationSection } from './NavigationSection';

export type NavigationSectionProps = ComponentProps<{ title: string }>;

export const navigationSectionMappings = {
  navigationSection: NavigationSection,
};

export default NavigationSection;
