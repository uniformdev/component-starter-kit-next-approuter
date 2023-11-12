import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { RichText } from './RichText';
import { registerUniformComponent } from '@/canvas/compat';

export type RichTextProps = ComponentProps<{
  content?: string;
}>;

export enum RichTextVariants {
  Light = 'light',
}

export const richTextMappings = [undefined, RichTextVariants.Light].map(variantId =>
  registerUniformComponent({
    type: 'richText',
    component: RichText,
    variantId,
  })
);

export default RichText;
