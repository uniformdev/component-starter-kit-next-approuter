import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageParameters, UniformComposition, retrieveRoute } from '@uniformdev/canvas-next-rsc';
import { ResolvedRouteGetResponse, RouteGetResponseEdgehancedComposition } from '@uniformdev/canvas';
import { getPageMetaData } from '@/utilities';
import { componentResolver } from '@/canvas';

// IMPORTANT: SSG mode, uncomment this line (see other comments below)
// export { generateStaticParams } from '@uniformdev/canvas-next-rsc';

// Optionally, enable edge rendering mode to run render on the CDN nodes
// export const runtime = 'edge';

const isRouteWithoutErrors = (route: ResolvedRouteGetResponse): route is RouteGetResponseEdgehancedComposition =>
  'compositionApiResponse' in route &&
  route.compositionApiResponse !== undefined &&
  'composition' in route.compositionApiResponse;

export async function generateMetadata(props: PageParameters): Promise<Metadata> {
  const route = await retrieveRoute(props);
  if (!isRouteWithoutErrors(route)) return notFound();

  const composition = route.compositionApiResponse?.composition;
  return getPageMetaData(composition);
}

export default async function Home(props: PageParameters) {
  const route = await retrieveRoute(props);
  // IMPORTANT: SSG mode, change mode="server" to mode="static" below:
  return <UniformComposition {...props} route={route} resolveComponent={componentResolver} mode="server" />;
}

// IMPORTANT: SSG mode, uncomment this line:
export const dynamic = 'force-static';
