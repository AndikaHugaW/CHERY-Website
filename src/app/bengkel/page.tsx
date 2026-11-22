'use client';

import React from 'react';
import Image from '@/components/ui/optimized-image';
import { IMAGE_SIZES } from '@/lib/image-optimization';
import { BLUR_PLACEHOLDERS } from '@/lib/blur-placeholders';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { LiquidGlass } from '@/components/ui/liquid-glass';

const BengkelKomitmenSection = dynamic(() => import('@/components/BengkelKomitmenSection').then(mod => mod.BengkelKomitmenSection));
const BengkelLayananUnggulanSection = dynamic(() => import('@/components/BengkelLayananUnggulanSection').then(mod => mod.BengkelLayananUnggulanSection));
const BengkelJadwalServisSection = dynamic(() => import('@/components/BengkelJadwalServisSection').then(mod => mod.BengkelJadwalServisSection));
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer));

export default function BengkelPage() {

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col justify-between">
      {/* Section 1: Navbar */}
      <Navbar />

      {/* Section 1: Hero / Coming Soon */}
      <section className="relative w-full aspect-[16/9] min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] max-h-[720px] flex items-center justify-center text-center overflow-hidden bg-neutral-900">
        {/* Background Image: /images/layanan bengkel/hero-layanan-bengkel.webp */}
        <Image
          src="/images/layanan bengkel/hero-layanan-bengkel.webp"
          alt="Layanan Bengkel Resmi Chery"
          fill
          preload
          qualityRole="hero"
          sizes={IMAGE_SIZES.fullBleed}
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDERS['hero-bengkel']}
          className="object-cover object-center"
        />

        {/* Light contrast overlay for text readability */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 py-16 flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl drop-shadow-lg">
            Layanan Bengkel Resmi Chery
          </h1>

          <p className="text-gray-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mt-4 font-medium drop-shadow">
            Layanan perawatan dan perbaikan resmi Chery Salatiga dengan teknisi bersertifikasi pabrikan, peralatan diagnostik modern, dan jaminan suku cadang asli untuk menjaga performa optimal mobil Chery Anda.
          </p>

          <div className="pt-6">
            <LiquidGlass
              radius={999}
              scale={26}
              aberration={10}
              bevelDepth={18}
              frost={0.3}
              tint={0.16}
              className="inline-flex shadow-[0_12px_40px_rgb(0_0_0/0.25),inset_0_1px_0_rgb(255_255_255/0.5)]"
            >
              <span className="text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full inline-block uppercase tracking-wider drop-shadow">
                Coming soon
              </span>
            </LiquidGlass>
          </div>
        </div>
      </section>

      {/* Section 2: Komitmen Deskripsi */}
      <BengkelKomitmenSection />

      {/* Section 3: Layanan Unggulan Kami (3 Cards Grid) */}
      <BengkelLayananUnggulanSection />

      {/* Section 4: Jadwalkan Servis Anda (Form & Dealership Image) */}
      <BengkelJadwalServisSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
