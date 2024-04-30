import type { Metadata } from 'next';
import type { Asset } from '@uniformdev/assets';
import { PageParameters, UniformComposition, retrieveRoute } from '@uniformdev/canvas-next-rsc';
import { getMediaUrl } from '../../utilities';
import { componentResolver } from '../../canvas/index';

// Uncomment this to enable static site generation mode
// export { generateStaticParams } from '@uniformdev/canvas-next-rsc';

// Optionally, enable edge rendering mode to run render on the CDN nodes
// export const runtime = 'edge';

const VERCEL_URL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

export async function generateMetadata(props: PageParameters): Promise<Metadata> {
  const route = await retrieveRoute(props);
  if (!('compositionApiResponse' in route)) throw new Error('No composition found');
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
  return <UniformComposition {...props} route={route} resolveComponent={componentResolver} mode="server" />;
}
