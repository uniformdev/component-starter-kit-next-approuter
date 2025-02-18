import type { MetadataRoute } from 'next';

const BASE_URL = process.env.BASE_URL ? `https://${process.env.BASE_URL}` : '';

export default function robots(): MetadataRoute.Robots {
  const domain = BASE_URL || 'http://localhost:3000';
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
