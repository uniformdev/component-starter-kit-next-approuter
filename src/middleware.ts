import { uniformMiddleware } from '@uniformdev/next-app-router/middleware';
import locales from '@/i18n/locales.json';
import { formatPath } from './utils/formatPath';

export default uniformMiddleware({
  rewriteRequestPath: async ({ url }) => ({ path: formatPath(url.pathname, locales.defaultLocale) }),
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
  runtime: 'experimental-edge',
};
