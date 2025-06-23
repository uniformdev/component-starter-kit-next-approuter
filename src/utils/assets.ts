import { AssetParamValue } from '@uniformdev/assets';
import { flattenValues } from '@uniformdev/canvas';

type ResolvedAsset = {
  id?: string;
  url: string;
  file?: string;
  size?: number;
  title?: string;
  width?: number;
  height?: number;
  mediaType?: string;
  description?: string;
};

/**
 * Resolves a list of assets, filtering out any entries without a valid URL.
 *
 * @param {AssetParamValue | undefined} image - The list of assets to resolve.
 * @returns {ResolvedAsset[]} - An array of resolved assets with valid URLs.
 */
export const resolveAsset = (image?: AssetParamValue): ResolvedAsset[] =>
  (flattenValues(image as never) || []).filter(({ url }) => Boolean(url));
