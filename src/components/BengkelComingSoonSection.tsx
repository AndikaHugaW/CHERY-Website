'use client';

import React from 'react';
import Image from '@/components/ui/optimized-image';
import { IMAGE_SIZES } from '@/lib/image-optimization';
import { BLUR_PLACEHOLDERS } from '@/lib/blur-placeholders';

export const BengkelComingSoonSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] overflow-hidden flex items-center justify-center text-center bg-neutral-900">
      {/* Full Width & Height Background Image */}
      <Image
        src="/images/layanan bengkel/hero-layanan-bengkel.webp"
        alt="Layanan Bengkel Chery Salatiga"
        fill
        preload
        qualityRole="hero"
        sizes={IMAGE_SIZES.fullBleed}
        placeholder="blur"
        blurDataURL={BLUR_PLACEHOLDERS['hero-bengkel']}
        className="object-cover object-center"
      />

      {/* Dark Contrast Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      {/* Content Box */}
      <div className="relative z-10 max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 py-16 flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-2xl">
          Layanan Bengkel Resmi Chery
        </h2>

        <p className="text-gray-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-medium drop-shadow">
          Layanan perawatan dan perbaikan resmi Chery Salatiga dengan teknisi bersertifikasi pabrikan, peralatan diagnostik modern, dan jaminan suku cadang asli untuk menjaga performa optimal mobil Chery Anda.
        </p>

        <div className="pt-2">
          <span className="bg-white text-gray-950 font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-2xl uppercase tracking-wider inline-block hover:scale-105 transition-transform cursor-pointer">
            Coming Soon
          </span>
        </div>
      </div>
    </section>
  );
};
