import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chery Semarang - Dealer Resmi Mobil Chery',
    short_name: 'Chery Semarang',
    description: 'Dealer Resmi Mobil Chery Semarang. Promo terbaru, test drive gratis & simulasi kredit.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
