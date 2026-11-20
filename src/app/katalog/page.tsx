'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { CARS_DATA } from '@/data/cars';

const KatalogGridSection = dynamic(() =>
  import('@/components/KatalogGridSection').then((mod) => mod.KatalogGridSection)
);
const Footer = dynamic(() => import('@/components/Footer').then((mod) => mod.Footer));
const TestDriveModal = dynamic(
  () => import('@/components/TestDriveModal').then((mod) => mod.TestDriveModal),
  { ssr: false }
);

const FEATURED_CAR =
  CARS_DATA.find((c) => c.id === 'j6') ??
  CARS_DATA.find((c) => c.id === 'j6t-csh') ??
  CARS_DATA[0];

export default function KatalogPage() {
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<string | undefined>(undefined);

  const handleOpenTestDrive = (carId?: string) => {
    setSelectedCarId(carId);
    setTestDriveOpen(true);
  };

  const featuredPrice =
    FEATURED_CAR.rawPrice > 0 ? FEATURED_CAR.formattedPrice : FEATURED_CAR.priceStarting;

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar onOpenTestDrive={handleOpenTestDrive} />

      <section className="relative w-full min-h-[72vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-end overflow-hidden bg-neutral-900 pt-20">
        <Image
          src="/images/katalog unit/hero-katalog.webp"
          alt="Chery Hero Katalog"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 pb-12 sm:pb-16 lg:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
                Temukan Kendaraan Sesuai Gaya Hidup Anda
              </h1>
            </div>

            <div className="w-full lg:max-w-md xl:max-w-lg shrink-0 space-y-5 lg:-ml-4 xl:-ml-8">
              <div className="text-white">
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight">
                  Chery {FEATURED_CAR.model}
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-white/85 mt-1.5">
                  Mulai{' '}
                  <span className="font-semibold text-white">
                    {FEATURED_CAR.rawPrice > 0
                      ? featuredPrice
                      : featuredPrice || 'Harga Segera Diumumkan'}
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="#katalog-grid"
                  className="flex-1 min-w-0 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/40 text-white font-medium text-sm sm:text-base py-3 pl-8 sm:pl-9 pr-2 rounded-full flex items-center justify-between gap-4 transition-all group"
                >
                  <span>Lihat Semua Mobil</span>
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-gray-900 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => handleOpenTestDrive(FEATURED_CAR.id)}
                  className="flex-1 min-w-0 bg-white hover:bg-neutral-100 text-gray-900 font-semibold text-sm sm:text-base py-3 pl-8 sm:pl-9 pr-2 rounded-full flex items-center justify-between gap-4 transition-all group shadow-lg"
                >
                  <span>Booking Test Drive</span>
                  <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-900 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <KatalogGridSection onOpenTestDrive={handleOpenTestDrive} />

      <Footer onOpenTestDrive={handleOpenTestDrive} />

      <TestDriveModal
        isOpen={testDriveOpen}
        preselectedCarId={selectedCarId}
        onClose={() => setTestDriveOpen(false)}
      />
    </main>
  );
}
