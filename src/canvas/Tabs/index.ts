import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { Tabs } from './Tabs';

type Styles = {
  container?: string;
};

export type TabsProps = ComponentProps<
  {
    size: 'tiny' | 'small' | 'normal' | 'large';
    styles?: Styles;
  },
  'tabs'
>;

export enum TabsVariant {
  Boxed = 'boxed',
  Lifted = 'lifted',
  Bordered = 'bordered',
}

export const tabsMappings = {
  tabs: Tabs,
};

export default Tabs;
