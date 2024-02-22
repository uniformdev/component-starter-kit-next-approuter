import { FC } from 'react';
import classNames from 'classnames';
import { UniformSlot, UniformText } from '@uniformdev/canvas-next-rsc/component';
import { AccordionProps } from '.';

export const Accordion: FC<AccordionProps> = ({ styles, component, context, slots }) => (
  <div className={classNames('text-secondary-content', styles?.container)}>
    <UniformText
      placeholder="Title goes here"
      parameterId="title"
      as="p"
      context={context}
      component={component}
      className={classNames('text-3xl font-extrabold pb-4', styles?.title)}
    />
    <UniformText
      placeholder="Description goes here"
      parameterId="description"
      as="p"
      context={context}
      component={component}
      className={classNames('text-xl pb-6', styles?.description)}
    />
    <UniformSlot context={context} slot={slots.items} data={component} />
  </div>
);
