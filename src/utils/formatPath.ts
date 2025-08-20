import i18n from '@/i18n/locales.json';

/**
 * Checks if a given path includes a locale defined in the localization configuration.
 *
 * @param {string} path - The URL path to check (e.g. "/en/about" or "fr/contact").
 * @returns {boolean} True if the first segment of the path matches one of the configured locales; otherwise, false.
 */
const isLocaleInPath = (path: string): boolean => {
  const [firstSegment] = path.split('/').filter(Boolean);
  return firstSegment ? (i18n.locales as string[]).some(locale => locale === firstSegment) : false;
};

/**
 * Formats a given path to include the specified locale as its first segment.
 *
 * @param {string} path - The original URL path (e.g. "/about" or "contact").
 * @param {string} [locale] - The locale to prepend to the path (e.g. "en" or "fr").
 * @returns {string} The formatted path, ensuring it starts with the locale (e.g. "/en/about").
 */
export const formatPath = (path: string, locale?: string): string => {
  if (!locale) return path;

  if (isLocaleInPath(path)) return path;

  return `/${locale}${path}`;
};
