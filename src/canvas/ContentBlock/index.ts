import { Document } from '@contentful/rich-text-types';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { ContentBlock } from './ContentBlock';

type Styles = {
  title?: string;
  text?: string;
};
export type ContentBlockProps = ComponentProps<{
  title?: string;
  titleStyle: Types.HeadingStyles;
  link?: Types.ProjectMapLink;
  text: string;
  content?: string | Document;
  styles?: Styles;
}>;

export const contentBlockMappings = {
  content: ContentBlock,
};

export default ContentBlock;
