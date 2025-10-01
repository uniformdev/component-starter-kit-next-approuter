import { HTMLAttributes } from 'react';
import { AssetParamValueItem } from '@uniformdev/canvas';
import { ComponentParameter } from '@uniformdev/canvas-next-rsc-shared-v2';

export type ResolveEmptyPlaceholderOptions = {
  slotName: string;
  slotIndex: number;
};

export type ViewPort<T> = {
  desktop?: T;
  tablet?: T;
  mobile?: T;
};

export type SpaceType = Pick<
  NonNullable<HTMLAttributes<HTMLDivElement>['style']>,
  | 'marginTop'
  | 'marginLeft'
  | 'paddingTop'
  | 'marginRight'
  | 'paddingLeft'
  | 'marginBottom'
  | 'paddingRight'
  | 'paddingBottom'
>;

type ToComponentParameters<T> = {
  [K in keyof T]: ComponentParameter<T[K]>;
};

export type ComponentProps<
  T,
  S extends string = string,
> = import('@uniformdev/canvas-next-rsc-v2/component').ComponentProps<ToComponentParameters<T>, S>;

type ValueOfField<F> = F extends { value: infer V } ? V : never;
type FlattenFields<T extends AssetParamValueItem> = {
  [K in keyof T['fields']]: ValueOfField<T['fields'][K]>;
};
type RenameKey<T, K extends keyof T, NewName extends PropertyKey> = Omit<T, K> & { [P in NewName]: T[K] };

export type ResolvedAssetFromItem<T extends AssetParamValueItem> = RenameKey<FlattenFields<T>, 'id', 'file'> & {
  id: T['_id'];
};

export type ReplaceFieldsWithAssets<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: ResolvedAssetFromItem<AssetParamValueItem>[];
};
