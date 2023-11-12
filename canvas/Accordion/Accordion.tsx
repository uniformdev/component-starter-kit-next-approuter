import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { AccordionProps } from '.';

export const Accordion: FC<AccordionProps> = ({
  styles,
  component,
  context,
  slots,
}) => (
  <div className={classNames('text-secondary-content', styles?.container)}>
    <UniformText
      placeholder="Title goes here"
      parameterId="title"
      as="p"
      className={classNames('text-3xl font-extrabold pb-4', styles?.title)}
      component={component}
      context={context}
    />
    <UniformText
      placeholder="Description goes here"
      parameterId="description"
      as="p"
      className={classNames('text-xl pb-6', styles?.description)}
      component={component}
      context={context}
    />
    <UniformSlot
      data={component}
      context={context}
      slot={slots.items}
    />
  </div>
);
