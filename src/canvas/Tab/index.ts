import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Tab } from './Tab';

export type TabTitleProps = {
  title: string;
  size: Types.TabSize;
  style: Types.TabStyle;
  isActive: boolean;
  onClick: () => void;
};

export type TabProps = ComponentProps<unknown, 'content'>;

export const tabMappings = {
  tab: Tab,
};

export default Tab;
export * from './TabTitle';
