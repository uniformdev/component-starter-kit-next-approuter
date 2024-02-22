import { CSSProperties } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { RichTextNode } from '@uniformdev/richtext';
import { RichText } from './RichText';

type Styles = {
  content?: string;
};

export type RichTextProps = ComponentProps<{
  content?: RichTextNode;
  color?: Types.ThemeColorsValues | string;
  style?: CSSProperties;
  styles?: Styles;
}>;

export const richTextMappings = {
  richText: RichText,
};

export default RichText;
