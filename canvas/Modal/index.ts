import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { withoutContainer } from '../../hocs/withoutContainer';
import { Modal } from './Modal';
import { registerUniformComponent } from '@/canvas/compat';

export type ModalProps = ComponentProps<{
  closeOnClickOutside: boolean;
  maxWidth: Types.AvailableModalMaxWidth;
  automaticOpenTimeout: number;
}, 'trigger' | 'content'>;

export const modalMapping = registerUniformComponent({
  type: 'modal',
  component: withoutContainer(Modal),
});

export default withoutContainer(Modal);
