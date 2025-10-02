import { ResolveEmptyPlaceholderOptions } from '@/types/cskTypes';
import { DEFAULT_EMPTY_PLACEHOLDER } from '@/utils/createEmptyPlaceholderResolver';
import { CarouselSlots } from '.';

export const CarouselEmptyPlaceholder = (props: ResolveEmptyPlaceholderOptions) => {
  switch (props.slotName) {
    case CarouselSlots.Items:
      return { component: () => <div className="mx-20 h-20 w-full" /> };
    default:
      return DEFAULT_EMPTY_PLACEHOLDER;
  }
};
