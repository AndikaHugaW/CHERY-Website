'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CARS_DATA } from '@/data/cars';
import { CONTACT_INFO } from '@/data/contact';
import { VehicleCard } from '@/components/VehicleCard';
import { IMAGE_SIZES } from '@/lib/image-optimization';

interface FeaturedUnitsSectionProps {
  onOpenTestDrive?: (carId?: string) => void;
}

export const FeaturedUnitsSection: React.FC<FeaturedUnitsSectionProps> = ({ onOpenTestDrive }) => {
  const featuredIds = ['chery-q', 'j6', 'chery-e5'];
  const featuredUnits = featuredIds
    .map((id) => CARS_DATA.find((c) => c.id === id))
    .filter((c): c is (typeof CARS_DATA)[number] => Boolean(c));

  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-b border-gray-200/80">
      <div className="max-w-[1728px] mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              Unit Unggulan
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Eksplorasi kendaraan Chery paling diminati. Inovasi desain dan performa tanpa kompromi untuk setiap perjalanan Anda.
            </p>
          </div>

          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 text-black hover:text-gray-700 font-bold text-sm sm:text-base transition-colors group shrink-0"
          >
            <span>Lihat Semua Unit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredUnits.map((car) => (
            <VehicleCard
              key={car.id}
              car={car}
              primaryLabel="Pesan"
              onPrimaryAction={() => {
                const text = `Halo Chery Salatiga, saya tertarik dan ingin memesan unit Chery ${car.name}. Mohon informasi ketersediaan unit, promo, dan penawaran terbaiknya.`;
                window.open(`https://wa.me/${CONTACT_INFO.waNumber}?text=${encodeURIComponent(text)}`, '_blank');
              }}
              sizes={IMAGE_SIZES.featuredCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
