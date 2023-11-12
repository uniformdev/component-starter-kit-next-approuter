import { Document } from '@contentful/rich-text-types';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { ContentBlock } from './ContentBlock';
import { registerUniformComponent } from '@/canvas/compat';

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

export const contentMapping = registerUniformComponent({
  type: 'content',
  component: ContentBlock,
});

export default ContentBlock;
