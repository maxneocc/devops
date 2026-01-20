import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neocc.co';

  // Static pages (without locale prefix)
  const staticPages = [
    '',
    '/formations',
    '/solutions',
    '/plateforme',
    '/blog',
    '/contact',
    '/mentions-legales',
    '/cgv',
    '/cgu',
    '/confidentialite',
  ];

  // Generate sitemap entries for each locale
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of staticPages) {
      const url = `${baseUrl}/${locale}${route}`;
      entries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route === '/solutions' || route === '/formations' ? 0.8 : 0.5,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${route}`])
          ),
        },
      });
    }
  }

  return entries;
}
