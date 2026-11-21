import NextImage, { type ImageProps } from 'next/image';
import { IMAGE_QUALITY, type ImageQualityRole } from '@/lib/image-optimization';

export type OptimizedImageProps = ImageProps & {
  /** Preset kualitas; override dengan prop `quality` jika perlu. */
  qualityRole?: ImageQualityRole;
};

/**
 * Wrapper `next/image` dengan kualitas preset agar AVIF/WebP tetap tajam tanpa file berlebihan.
 */
export function OptimizedImage({
  quality,
  qualityRole = 'product',
  ...props
}: OptimizedImageProps) {
  return (
    <NextImage {...props} quality={quality ?? IMAGE_QUALITY[qualityRole]} />
  );
}

export default OptimizedImage;
