import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { withoutContainer } from '../../hocs/withoutContainer';
import { Modal } from './Modal';

export type ModalProps = ComponentProps<
  {
    closeOnClickOutside: boolean;
    maxWidth: Types.AvailableModalMaxWidth;
    automaticOpenTimeout: number;
  },
  'trigger' | 'content'
>;

export const modalMappings = {
  modal: withoutContainer(Modal),
};

export default withoutContainer(Modal);
