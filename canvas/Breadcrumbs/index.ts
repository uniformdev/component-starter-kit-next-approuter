import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Breadcrumbs } from './Breadcrumbs';
import { registerUniformComponent } from '@/canvas/compat';

export type BreadcrumbSeparator = 'slash' | 'chevron' | 'none';

type Styles = {
  container?: string;
};
export type BreadcrumbsProps = ComponentProps<{
  colorStyle: Types.AvailableColor;
  displayRootNode: boolean;
  displayPlaceholderNodes: boolean;
  separator: BreadcrumbSeparator;
  styles?: Styles;
}>;

export const breadcrumbMapping = registerUniformComponent({
  type: 'breadcrumbs',
  component: Breadcrumbs,
});

export default Breadcrumbs;
