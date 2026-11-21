/**
 * Kualitas dan ukuran responsif untuk next/image — dealer mobil (hero tajam, katalog ringan).
 */
export const IMAGE_QUALITY = {
  hero: 88,
  product: 85,
  gallery: 82,
  thumbnail: 75,
  decorative: 78,
  logo: 90,
  avatar: 80,
} as const;

export type ImageQualityRole = keyof typeof IMAGE_QUALITY;

export const IMAGE_SIZES = {
  fullBleed: '100vw',
  heroSplit: '(max-width: 1024px) 100vw, 50vw',
  catalogCard:
    '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
  catalogCardWide:
    '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  featuredCard:
    '(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 500px',
  detailMain: '(max-width: 1024px) 100vw, 50vw',
  detailThumb: '(max-width: 768px) 33vw, 200px',
  specDiagram: '(max-width: 1024px) 100vw, 33vw',
  catalogSection: '(max-width: 768px) 100vw, 50vw',
  modalThumb: '96px',
  avatar: '(max-width: 640px) 112px, 128px',
  logo: '(max-width: 640px) 192px, 207px',
} as const;
