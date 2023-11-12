'use client';

import { FC, useCallback, useState, useEffect } from 'react';
import classNames from 'classnames';
import { UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import { getModalMaxWidth } from './helpers';
import { ModalProps } from '.';

export const Modal: FC<ModalProps> = ({ closeOnClickOutside, automaticOpenTimeout, maxWidth, component, context, slots }) => {
  const [showModal, setShowModal] = useState(false);

  const { isContextualEditing } = context;

  const onToggleModal = useCallback(() => {
    if (!isContextualEditing) setShowModal(prev => !prev);
  }, [isContextualEditing]);

  const onClickOutside = useCallback(() => {
    if (!isContextualEditing && closeOnClickOutside) setShowModal(false);
  }, [closeOnClickOutside, isContextualEditing]);

  const onClickContent = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      if (!isContextualEditing) e.stopPropagation();
    },
    [isContextualEditing]
  );

  const isModalContentPlaceholder =
    !component?.slots?.content?.length || component?.slots?.content?.[0]?._id?.startsWith('placeholder');

  const isModalTriggerPlaceholder = !component?.slots?.trigger?.length;

  useEffect(() => {
    if (isContextualEditing) return;
    if (isModalTriggerPlaceholder && automaticOpenTimeout) {
      setTimeout(() => setShowModal(true), automaticOpenTimeout * 1000);
    }
  }, [isModalTriggerPlaceholder, automaticOpenTimeout, isContextualEditing]);

  return (
    <div>
      <div onClick={onToggleModal} className="max-w-screen-xl mx-auto">
        <UniformSlot
          context={context}
          data={component}
          slot={slots.trigger}
        />
      </div>
      {isModalContentPlaceholder ? (
        <UniformSlot
          context={context}
          data={component}
          slot={slots.content}
        />
      ) : (
        <dialog
          open={showModal}
          className={classNames('modal w-full h-full', {
            // we need override uniform add button zIndex(9900)
            'modal-open z-[9901]': showModal,
          })}
          onClick={onClickOutside}
        >
          <form
            method="dialog"
            className={classNames('modal-box p-8', getModalMaxWidth(maxWidth))}
            onClick={onClickContent}
          >
            <div onClick={onToggleModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </div>
            <UniformSlot
              context={context}
              data={component}
              slot={slots.content}
            />
          </form>
        </dialog>
      )}
    </div>
  );
};
