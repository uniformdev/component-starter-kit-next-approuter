import {
  ComponentProps,
  UniformSlot,
} from "@uniformdev/canvas-next-rsc/component";
import classNames from "classnames";
import { registerUniformComponent } from "@/canvas/compat";
import {
  CHILDREN_CONTAINER_STYLES,
  COMMON_PADDING,
} from "../../hocs/withoutContainer";
import {
  getGapClass,
  getMarginBottomClass,
  PaddingSize,
} from "../../utilities/styling";
import ThemeProvider from "../../components/ThemeProvider";

type SlotNames = "pageHeader" | "pageContent" | "pageFooter";
type Parameters = unknown;
type Props = ComponentProps<Parameters, SlotNames>;

export const BasePage = ({ slots, component, context }: Props) => {
  const gap = component?.slots?.pageHeader?.[0]?.parameters?.syntheticGap
    ?.value as PaddingSize | undefined;

  return (
    <ThemeProvider data={context.composition}>
      <div className={COMMON_PADDING}>
        <UniformSlot
          context={context}
          data={component}
          slot={slots.pageHeader}
        />
      </div>
      <div
        className={classNames(
          "flex flex-col flex-1",
          CHILDREN_CONTAINER_STYLES,
          COMMON_PADDING,
          getGapClass(gap),
          getMarginBottomClass(gap)
        )}
      >
        <UniformSlot
          context={context}
          data={component}
          slot={slots.pageContent}
        />
      </div>

      <div className={COMMON_PADDING}>
        <UniformSlot
          context={context}
          data={component}
          slot={slots.pageFooter}
        />
      </div>
    </ThemeProvider>
  );
};

export const mapping = registerUniformComponent({
  type: "page",
  component: BasePage,
});
