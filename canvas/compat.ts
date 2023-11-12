import { ComponentProps } from "@uniformdev/canvas-next-rsc/component";

export type ComponentMapping = {
  type: string;
  variantId?: string;
  component: React.ComponentType<ComponentProps<any>>;
};

export const registerUniformComponent = (mapping: ComponentMapping) => {
  return mapping;
};
