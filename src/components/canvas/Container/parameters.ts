import { SpaceType, ViewPort } from '@/types/cskTypes';

type HeightType = 'full' | 'screen' | 'svh' | 'lvh' | 'dvh' | 'min' | 'max' | 'fit';

export type ContainerParameters = {
  displayName?: string;
  anchor?: string;
  backgroundColor?: string;
  spacing?: SpaceType | ViewPort<SpaceType>;
  border?: string | ViewPort<string>;
  fluidContent?: boolean;
  height?: HeightType | ViewPort<HeightType>;
};
