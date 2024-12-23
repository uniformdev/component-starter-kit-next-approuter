import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageParameters, UniformComposition, retrieveRoute } from '@uniformdev/canvas-next-rsc';
import { ResolvedRouteGetResponse, RouteGetResponseEdgehancedComposition } from '@uniformdev/canvas';
import type { Asset } from '@uniformdev/assets';
import { getMediaUrl } from '../../utilities';
import { componentResolver } from '../../canvas/index';

// Uncomment this to enable static site generation mode
// export { generateStaticParams } from '@uniformdev/canvas-next-rsc/component';

export const runtime = 'edge';

const VERCEL_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

const isRouteWithoutErrors = (route: ResolvedRouteGetResponse): route is RouteGetResponseEdgehancedComposition =>
  'compositionApiResponse' in route && !!route.compositionApiResponse && 'composition' in route.compositionApiResponse;

export async function generateMetadata(props: PageParameters): Promise<Metadata> {
  const route = await retrieveRoute(props);
  if (!isRouteWithoutErrors(route)) return notFound();
  const composition = route.compositionApiResponse.composition;

  const {
    pageTitle,
    pageMetaDescription,
    pageKeywords,
    openGraphTitle,
    openGraphDescription,
    openGraphImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    twitterCard,
  } = composition?.parameters || {};

  return {
    metadataBase: new URL(VERCEL_URL || 'http://localhost:3000'),
    title: (pageTitle?.value as string) ?? 'Uniform Component Starter Kit',
    description: pageMetaDescription?.value as string,
    keywords: pageKeywords?.value as string,
    openGraph: {
      title: (openGraphTitle?.value as string) ?? pageTitle?.value,
      description: (openGraphDescription?.value as string) ?? pageMetaDescription?.value,
      images: [
        {
          url: getMediaUrl(openGraphImage?.value as Asset | undefined),
          alt: openGraphTitle?.value as string,
        },
      ],
    },
    twitter: {
      title: (twitterTitle?.value as string) ?? pageTitle?.value,
      description: (twitterDescription?.value as string) ?? pageMetaDescription?.value,
      images: [
        {
          url: getMediaUrl(twitterImage?.value as Asset | undefined),
          alt: twitterTitle?.value as string,
        },
      ],
      card: twitterCard?.value as 'summary' | 'summary_large_image',
    },
  };
}

export default async function Home(props: PageParameters) {
  const route = await retrieveRoute(props);
  if (!isRouteWithoutErrors(route)) return notFound();
  return <UniformComposition {...props} route={route} resolveComponent={componentResolver} mode="server" />;
}
