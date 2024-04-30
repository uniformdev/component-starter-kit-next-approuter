import { draftMode } from 'next/headers';
import { ComponentProps, UniformSlot } from '@uniformdev/canvas-next-rsc/component';
import classNames from 'classnames';
import { getGapClass, getMarginBottomClass, PaddingSize } from '../../utilities/styling';
import { CHILDREN_CONTAINER_STYLES, COMMON_PADDING } from '../../hocs/withoutContainer';
import ThemeProvider from '../../components/ThemeProvider';
import UniformPreviewIcon from '../../components/UniformPreviewIcon';

type SlotNames = 'pageHeader' | 'pageContent' | 'pageFooter';
type Parameters = unknown;
type Props = ComponentProps<Parameters, SlotNames>;

export const BasePage = ({ slots, component, context }: Props) => {
  const { isEnabled: isEnabledDraftMode } = draftMode();
  const gap = component?.slots?.pageHeader?.[0]?.parameters?.syntheticGap?.value as PaddingSize | undefined;
  const isContextualEditing = context.isContextualEditing;

  return (
    <ThemeProvider data={context.composition}>
      <div className={COMMON_PADDING}>
        <UniformSlot context={context} slot={slots.pageHeader} data={component} />
      </div>
      <div
        className={classNames(
          'flex flex-col flex-1',
          CHILDREN_CONTAINER_STYLES,
          COMMON_PADDING,
          getGapClass(gap),
          getMarginBottomClass(gap)
        )}
      >
        <UniformSlot context={context} slot={slots.pageContent} data={component} />
      </div>

      <div className={COMMON_PADDING}>
        <UniformSlot context={context} slot={slots.pageFooter} data={component} />
      </div>

      {isEnabledDraftMode && <UniformPreviewIcon isContextualEditing={isContextualEditing} />}
    </ThemeProvider>
  );
};

export const pageMapping = {
  page: BasePage,
};
