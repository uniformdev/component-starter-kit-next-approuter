import { getProjectMapClient } from '@uniformdev/next-app-router';
import { ProjectMapNode } from '@uniformdev/project-map';
import localesConfig from '@/i18n/locales.json';

const LOCALE_SEGMENT = ':locale';

/**
 * Applies localized path segment if available
 */
const applyLocalizedPathSegment = (
  path: string,
  locale: string,
  locales?: Record<string, { pathSegment: string }>,
  pathSegment?: string
): string => {
  const localizedPath = locales?.[locale];

  if (localizedPath?.pathSegment && pathSegment) {
    return path.replace(pathSegment, localizedPath.pathSegment);
  }

  return path;
};

/**
 * Generates localized paths for a single project map node
 */
const generateLocalizedPaths = (node: ProjectMapNode, localeConfig: typeof localesConfig): string[] => {
  const { path, locales, pathSegment } = node;

  if (!path.includes(LOCALE_SEGMENT)) {
    return [path];
  }

  return localeConfig.locales.map(locale => {
    const pathWithLocale = path.replace(LOCALE_SEGMENT, locale);
    return applyLocalizedPathSegment(pathWithLocale, locale, locales, pathSegment);
  });
};

/**
 * Fetches project map nodes from Uniform
 */
const fetchProjectMapNodes = async (): Promise<ProjectMapNode[]> => {
  try {
    const client = getProjectMapClient({
      cache: {
        type: 'default',
      },
    });

    const { nodes } = await client.getNodes({ tree: false });
    return nodes ?? [];
  } catch (error) {
    console.error('Failed to fetch project map nodes:', error);
    return [];
  }
};

/**
 * Generates all static pages for the application
 * Returns an array of paths that should be statically generated
 */
const getAllStaticGeneratedPages = async (): Promise<string[]> => {
  const projectMapNodes = await fetchProjectMapNodes();

  if (!projectMapNodes.length) {
    return [];
  }

  const localizedPaths = projectMapNodes.map(node => generateLocalizedPaths(node, localesConfig));

  return localizedPaths.flat();
};

export default getAllStaticGeneratedPages;
