'use client';

import React, { useEffect, useState } from 'react';
import Image from '@/components/ui/optimized-image';
import { IMAGE_SIZES } from '@/lib/image-optimization';
import { BLUR_PLACEHOLDERS } from '@/lib/blur-placeholders';
import Link from 'next/link';
import { 
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';

interface HeroSectionProps {
  onOpenTestDrive?: (carId?: string) => void;
}

const HERO_SLIDES = [
  {
    src: '/images/landing page/landingpage 1.webp',
    alt: 'Chery Salatiga',
    blurDataURL: BLUR_PLACEHOLDERS.landingpage1,
  },
  {
    src: '/images/landing page/landingpage 2.jpg',
    alt: 'Chery Semarang',
  },
  {
    src: '/images/landing page/landingpage 3.jpg',
    alt: 'Chery Semarang',
  },
  {
    src: '/images/landing page/landingpage 4.png',
    alt: 'Chery Semarang',
  },
] as const;

const SLIDE_INTERVAL_MS = 5500;
const FADE_DURATION_MS = 1200;

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTestDrive }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-[92dvh] md:min-h-screen flex flex-col justify-end md:justify-between overflow-hidden bg-neutral-950 text-white p-6 sm:p-10 lg:p-14 rounded-none my-0 z-20">
      {/* 1. Fullscreen background — slide 1 tetap landingpage 1, lalu transisi 2–4 */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-none bg-neutral-950">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;
          const blurProps =
            'blurDataURL' in slide && slide.blurDataURL
              ? { placeholder: 'blur' as const, blurDataURL: slide.blurDataURL }
              : { placeholder: 'empty' as const };

          return (
            <div
              key={slide.src}
              className="absolute inset-0 transition-opacity ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                transitionDuration: `${FADE_DURATION_MS}ms`,
              }}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={isActive ? slide.alt : ''}
                fill
                preload={index === 0}
                qualityRole="hero"
                sizes={IMAGE_SIZES.fullBleed}
                {...blurProps}
                className="object-cover object-center w-full h-full rounded-none"
              />
            </div>
          );
        })}
      </div>

      {/* 2. MOBILE HERO CONTENT (<= 768px Only - Bottom Aligned Editorial Layout) */}
      <div className="relative z-20 w-full max-w-xl space-y-5 px-0 pb-8 sm:pb-10 pt-4 md:hidden mt-auto">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight flex flex-col gap-2">
          <span>Temukan Mobil</span>
          <span>Chery Impian Anda</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base font-medium text-white/80 tracking-wide pb-1">
          Dealer resmi Chery Semarang
        </p>

        {/* Action Buttons (Stacked Vertically) */}
        <div className="space-y-3.5 pt-1 max-w-md">
          {/* Primary CTA: Glass Pill */}
          <Link
            href="/katalog"
            className="w-full bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/30 text-white font-semibold text-base py-3 pl-6 pr-2.5 rounded-full flex items-center justify-between shadow-lg transition-all group active:scale-[0.98]"
          >
            <span className="font-semibold tracking-tight">Lihat Semua Mobil</span>
            <span className="w-11 h-11 rounded-full bg-white text-gray-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
              <ArrowRight className="w-5 h-5 text-gray-900" />
            </span>
          </Link>

          {/* Secondary CTA: Solid White Pill */}
          <button
            onClick={() => onOpenTestDrive?.()}
            className="w-full bg-white hover:bg-gray-100 text-gray-950 font-bold text-base py-3 pl-6 pr-2.5 rounded-full flex items-center justify-between shadow-2xl transition-all group active:scale-[0.98] text-left"
          >
            <span className="font-bold tracking-tight">Booking Test Drive</span>
            <span className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
              <ArrowRight className="w-5 h-5 text-white" />
            </span>
          </button>
        </div>
      </div>

      {/* 3. DESKTOP/TABLET FLOATING GLASS MENU CARD (Middle-Right - >= 768px Only) */}
      <div className="relative z-20 hidden md:flex justify-end w-full my-auto py-4">
        <div className="w-full max-w-[260px] sm:max-w-[290px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-5 sm:p-6 shadow-2xl text-white space-y-2">
          <Link 
            href="/katalog"
            className="flex items-center justify-between text-lg sm:text-xl font-bold text-white border-b border-white/15 pb-3 group"
          >
            <span>Katalog Unit</span>
            <ArrowUpRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link 
            href="/bengkel"
            className="block text-sm sm:text-base font-normal text-white/80 hover:text-white border-b border-white/15 py-2.5 transition-colors"
          >
            Layanan Bengkel
          </Link>

          <Link 
            href="/#promo"
            className="block text-sm sm:text-base font-normal text-white/80 hover:text-white border-b border-white/15 py-2.5 transition-colors"
          >
            Promo Bulan Ini
          </Link>

          <div className="block text-sm sm:text-base font-normal text-white/80 border-b border-white/15 py-2.5">
            Authorized Dealer
          </div>

          <Link 
            href="/kontak"
            className="block text-sm sm:text-base font-normal text-white/80 hover:text-white pt-2 transition-colors"
          >
            Kontak & Lokasi
          </Link>
        </div>
      </div>

      {/* 4. DESKTOP/TABLET BOTTOM ROW (Headline + Action Pill Buttons - >= 768px Only) */}
      <div className="relative z-20 hidden md:flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full pt-4 pb-2">
        
        {/* Headline with 20px gap */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight flex flex-col gap-[20px] max-w-2xl">
          <span>Temukan Mobil</span>
          <span>Chery Impian Anda</span>
        </h1>

        {/* Action Buttons: Side-by-Side horizontally on Desktop */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full lg:w-auto shrink-0">
          
          {/* Button 1: Glass Pill */}
          <Link
            href="/katalog"
            className="w-full sm:w-auto bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/30 text-white font-semibold text-base sm:text-lg py-2.5 sm:py-3 pl-6 pr-2.5 rounded-full flex items-center justify-between gap-4 shadow-lg transition-all group active:scale-[0.98]"
          >
            <span className="font-semibold tracking-tight whitespace-nowrap">Lihat Semua Mobil</span>
            <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-gray-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
            </span>
          </Link>

          {/* Button 2: Solid White Pill */}
          <button
            onClick={() => onOpenTestDrive?.()}
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-950 font-bold text-base sm:text-lg py-2.5 sm:py-3 pl-6 pr-2.5 rounded-full flex items-center justify-between gap-4 shadow-2xl transition-all group active:scale-[0.98] text-left"
          >
            <span className="font-bold tracking-tight whitespace-nowrap">Booking Test Drive</span>
            <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </span>
          </button>
        </div>

      </div>

    </section>
  );
};
