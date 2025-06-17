import { retrieveRoute as uniformRetrieveRoute } from '@uniformdev/canvas-next-rsc';
import i18n from '@/i18n/locales.json';

/**
 * Checks if a given path includes a locale defined in the localization configuration.
 *
 * @param {string | string[]} path - The path or path segments to check.
 * @returns {boolean} - True if the path includes a recognized locale; otherwise, false.
 */
const isLocaleInPath = (path: string | string[]): boolean =>
  (Array.isArray(path) ? path : [path]).some(segment => (i18n.locales as string[]).includes(segment));

/**
 * Formats a given path to include the specified locale.
 *
 * @param {string | string[] | undefined} path - The path to format, which can be a string, array, or undefined.
 * @param {string} locale - The locale to prepend to the path.
 * @returns {string | string[]} - The formatted path with the locale, if applicable.
 */
const formatPath = (path: string | string[] | undefined, locale: string): string | string[] => {
  // If path is not defined, use the locale directly.
  if (!path) return locale;

  // If path already includes a recognized locale, return it as is.
  if (isLocaleInPath(path)) return path;

  // If path doesn't include a locale:
  // - For arrays, prepend the locale.
  // - For strings, concatenate the locale with '/'.
  return Array.isArray(path) ? [locale, ...path] : `${locale}/${path}`;
};

/**
 * Retrieves a route with an updated path that includes the specified locale.
 *
 * @param {Parameters<typeof uniformRetrieveRoute>[0]} props - The parameters for retrieving the route.
 * @param {string | null | undefined} locale - The locale to prepend to the route path.
 * @returns {Promise<ResolvedRouteGetResponse>} - The retrieved route response.
 */
const retrieveRoute = async (props: Parameters<typeof uniformRetrieveRoute>[0], locale?: string | null) => {
  // If no locale is provided, just return the original route.
  if (!locale) return uniformRetrieveRoute(props);

  const params = await props.params;
  const updatedParams = getUpdatedParams(params, locale);
  return uniformRetrieveRoute({
    ...props,
    params: updatedParams,
    // If the route is not found, try to retrieve the route without the locale(only if the locale is provided)
  }).then(route => (route.type === 'notFound' ? uniformRetrieveRoute(props) : route));
};

/**
 * Returns updated route parameters with the locale included in the path.
 *
 * @param {{ path?: string | string[] } | undefined} params - The original route parameters.
 * @param {string} locale - The locale to prepend to the path.
 * @returns {Promise<{ path?: string | string[] }>} - A promise resolving to the updated parameters.
 */
const getUpdatedParams = (params: { path?: string | string[] } | undefined, locale: string) =>
  Promise.resolve({
    ...params,
    path: formatPath(params?.path, locale),
  });

export default retrieveRoute;
