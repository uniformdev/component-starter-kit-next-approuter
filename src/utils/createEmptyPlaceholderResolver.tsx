import { ComponentType } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc-v2/component';
import { ResolveEmptyPlaceholderOptions } from '@/types/cskTypes';

export const DEFAULT_EMPTY_PLACEHOLDER = { component: () => <div className="h-full min-h-20 w-full" /> };

export type EmptyPlaceholderMapping = Record<
  string,
  (props: ResolveEmptyPlaceholderOptions) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: ComponentType<ComponentProps<any, any>> | null;
  }
>;

const createEmptyPlaceholderResolver =
  (_mappings: EmptyPlaceholderMapping) => (_props: ResolveEmptyPlaceholderOptions) => {
    // TODO: Implement empty placeholder resolver, for now we return default empty placeholder as we don't have target component name. Props contains slotName and slotIndex, it's not enough to identify the target component.
    // https://linear.app/uniform/issue/SE-662/csk-coffee-shop-template-new-app-router-sdk#comment-a32de2e6
    return DEFAULT_EMPTY_PLACEHOLDER;
  };

export default createEmptyPlaceholderResolver;
