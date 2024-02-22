'use client';

import { FC, useState, Fragment } from 'react';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import classnames from 'classnames';
import { TabsProps } from '.';
import { TabTitle } from '../Tab/TabTitle';
import { getTabStyle } from './helpers';

export const Tabs: FC<TabsProps> = ({ component, size, styles, context, slots }) => {
  const tabs =
    component?.slots?.tabs?.map(tab => ({
      title: tab?.parameters?.title?.value as string,
      isActive: tab?.parameters?.isActive?.value as boolean,
    })) || [];

  const defaultActiveTabIndexFromCanvas = tabs?.findIndex(tab => tab.isActive);

  const defaultActiveTabIndex = defaultActiveTabIndexFromCanvas >= 0 ? defaultActiveTabIndexFromCanvas : 0;

  const [activeTabIndex, setActiveTabIndex] = useState<number>(defaultActiveTabIndex);

  return (
    <>
      <div
        className={classnames(
          'tabs overflow-x-auto flex-nowrap w-full',
          getTabStyle(component?.variant as Types.TabStyle),
          styles?.container
        )}
      >
        {tabs?.map((tab, index) => (
          <TabTitle
            onClick={() => setActiveTabIndex(index)}
            isActive={activeTabIndex === index}
            key={tab.title}
            title={tab.title}
            size={size}
            style={component?.variant as Types.TabStyle}
          />
        ))}
      </div>
      <UniformSlot context={context} slot={slots.tabs} data={component}>
        {data => <Fragment key={data.key}>{data?.slotIndex === activeTabIndex ? data.child : null}</Fragment>}
      </UniformSlot>
    </>
  );
};
