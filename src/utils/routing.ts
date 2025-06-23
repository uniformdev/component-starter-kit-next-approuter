import { ResolvedRouteGetResponse, RouteGetResponseEdgehancedComposition, LinkParamValue } from '@uniformdev/canvas';

const DYNAMIC_KEY_REGEX = /:[a-zA-Z_]+/;

/**
 * Resolves a dynamic route to a concrete path by replacing placeholders with values from the provided inputs.
 *
 * @param {string} matchedRoute - The route containing dynamic placeholders.
 * @param {{ [dynamicKey: string]: string } | undefined} dynamicInputs - A map of dynamic keys to their replacement values.
 * @returns {string} - The resolved route with placeholders replaced.
 */
export const resolveRouteToPath = (
  matchedRoute: string,
  dynamicInputs: { [dynamicKey: string]: string } | undefined
): string =>
  dynamicInputs
    ? matchedRoute.replace(DYNAMIC_KEY_REGEX, dynamicKey => {
        return dynamicInputs?.[dynamicKey.substring(1)] || dynamicKey;
      })
    : matchedRoute;

/**
 * Checks if a given route response is free of errors and contains a composition.
 *
 * @param {ResolvedRouteGetResponse} route - The route response to check.
 * @returns {boolean} - True if the route contains a valid composition, otherwise false.
 */
export const isRouteWithoutErrors = (route: ResolvedRouteGetResponse): route is RouteGetResponseEdgehancedComposition =>
  'compositionApiResponse' in route && !!route.compositionApiResponse && 'composition' in route.compositionApiResponse;

/**
 * Formats a Uniform link into a URL or mailto link based on its type.
 *
 * @param {LinkParamValue | undefined} uniformLink - The Uniform link to format.
 * @returns {string} - The formatted link as a string.
 */
export const formatUniformLink = (uniformLink?: LinkParamValue): string => {
  if (!uniformLink) return '';

  if (uniformLink.type === 'email') {
    return `mailto:${uniformLink.path}`;
  }

  return uniformLink.path;
};

/**
 * Determines if a given link is an external URL.
 *
 * @param {string} href - The URL or link to evaluate.
 * @returns {boolean} - True if the link starts with "http", indicating it is an external link; otherwise, false.
 */
export const isExternalLink = (href?: string): boolean => href?.startsWith('http') ?? false;
