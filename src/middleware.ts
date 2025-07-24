import { NextRequest } from 'next/server';
import { uniformMiddleware } from '@uniformdev/canvas-next-rsc-v2/middleware';
import locales from '@/i18n/locales.json';
import { formatPath } from './utils/formatPath';

export async function middleware(request: NextRequest) {
  return uniformMiddleware({
    rewriteRequestPath: async ({ url }) => ({ path: formatPath(url.pathname, locales.defaultLocale) }),
  })(request).then(result =>
    result.headers.get('x-middleware-rewrite')
      ? result
      : uniformMiddleware({
          rewriteRequestPath: async ({ url }) => ({ path: formatPath(url.pathname, undefined) }),
        })(request)
  );
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};

export const runtime = 'nodejs';
