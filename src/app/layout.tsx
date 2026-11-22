import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

/*
 * Font memakai Satoshi yang di-host lokal (public/fonts) dan dideklarasikan
 * sebagai @font-face di globals.css. Sengaja tidak memakai `next/font/google`
 * agar proses build di CI/Vercel tidak bergantung pada akses jaringan ke
 * fonts.googleapis.com.
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://kiasemarang.id'),
  title: {
    default: 'Chery Salatiga - Dealer Resmi Mobil Chery Jawa Tengah',
    template: '%s | Chery Semarang',
  },
  description:
    'Website resmi Dealer Chery Semarang. Katalog lengkap Tiggo, Chery C5, J6, Chery Q/E5, dan lini CSH hybrid — harga & spesifikasi resmi chery.co.id. Test drive gratis & simulasi kredit.',
  keywords: [
    'Chery Salatiga',
    'Dealer Chery Salatiga',
    'Tiggo Cross Salatiga',
    'Chery J6',
    'Chery Q',
    'Mobil Listrik Salatiga',
    'Dealer Mobil Salatiga',
    'Promo Chery Salatiga',
    'Service Chery Salatiga',
  ],
  authors: [{ name: 'Chery Salatiga' }],
  creator: 'Chery Salatiga',
  publisher: 'Chery Salatiga',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://kiasemarang.id',
    siteName: 'Chery Semarang',
    title: 'Chery Salatiga - Dealer Resmi Mobil Chery Jawa Tengah',
    description:
      'Dealer resmi Chery di Salatiga dengan pilihan SUV, MPV, dan EV terbaru. Promo spesial, test drive gratis, dan kredit DP ringan.',
    images: [
      {
        url: '/images/kontak/kantor.jpeg',
        width: 1200,
        height: 630,
        alt: 'Chery Semarang Showroom Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chery Semarang - Dealer Resmi Mobil Chery Jawa Tengah',
    description:
      'Website resmi Dealer Chery Semarang. Servis resmi, test drive gratis & simulasi kredit.',
    images: ['/images/kontak/kantor.jpeg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/logo/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/images/logo/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/logo/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/images/logo/favicon.ico',
    apple: '/images/logo/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900 min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

