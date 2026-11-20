import { MetadataRoute } from 'next';
import { CARS_DATA } from '@/data/cars';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://kiasemarang.id';

  const routes = ['', '/katalog', '/bengkel', '/kontak'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const carRoutes = CARS_DATA.flatMap((car) => [
    {
      url: `${baseUrl}/katalog/${car.id}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/katalog/${car.id}/spesifikasi`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.65,
    },
  ]);

  return [...routes, ...carRoutes];
}
