import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Breadcrumbs } from './Breadcrumbs';

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

export const breadcrumbsMappings = {
  breadcrumbs: Breadcrumbs,
};

export default Breadcrumbs;
