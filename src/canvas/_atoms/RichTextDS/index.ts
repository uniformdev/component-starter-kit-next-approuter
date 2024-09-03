import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { RichText } from './RichText';
import { Elements } from '@kontent-ai/delivery-sdk';

export type RichTextProps = ComponentProps<{
  text: Elements.RichTextElement;
}>;

export const richTextDSMappings = {
  richTextWithDatasource: RichText,
};

export default RichText;
