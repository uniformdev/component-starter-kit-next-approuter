import { generateSitemap } from '@uniformdev/csk-components/utils/sitemap';
import localesConfig from '@/i18n/locales.json';

export default generateSitemap(process.env.BASE_URL ? `https://${process.env.BASE_URL}` : 'http://localhost:3000', {
  locale: localesConfig.locales,
});
