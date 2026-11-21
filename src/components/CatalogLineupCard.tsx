'use client';

import React from 'react';
import Image from '@/components/ui/optimized-image';
import { IMAGE_SIZES } from '@/lib/image-optimization';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { Car } from '@/data/cars';
import { CarCardDisplaySpecs, getCarCardDisplay } from '@/data/catalog-card-specs';

interface CatalogLineupCardProps {
  car: Car;
  specs?: CarCardDisplaySpecs;
  /** CSH cards show 4 columns (Baterai + Mesin); BEV/ICE use 3 */
  variant: 'BEV' | 'CSH' | 'ICE';
}

function SpecCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center text-center min-w-0 flex-1">
      <span className="text-[10px] sm:text-xs font-medium text-white/85 uppercase tracking-wide">
        {label}
      </span>
      <span className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1 leading-tight">
        {value}
      </span>
      {(label === 'Panjang' || label === 'Wheelbase') && (
        <span className="text-[9px] sm:text-[10px] text-white/70 mt-0.5 uppercase">mm</span>
      )}
      {label === 'Baterai' && /\d/.test(value) && !/lfp|ncm/i.test(value) && (
        <span className="text-[9px] sm:text-[10px] text-white/70 mt-0.5">kWh</span>
      )}
    </div>
  );
}

export const CatalogLineupCard: React.FC<CatalogLineupCardProps> = ({ car, specs, variant }) => {
  const display = specs ?? getCarCardDisplay(car.id);
  if (!display) return null;

  const showEvIcon = variant === 'BEV';

  return (
    <article className="flex flex-col items-stretch text-white">
      <div className="relative flex items-start justify-between gap-2 mb-3">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">{car.name}</h3>
        <div className="flex items-center gap-2 shrink-0">
          {display.isNew && (
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-500 bg-white px-2 py-0.5 rounded">
              New
            </span>
          )}
          {showEvIcon && (
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-500/90 text-white">
              <Zap className="w-4 h-4 fill-current" />
            </span>
          )}
        </div>
      </div>

      <div className="relative w-full aspect-[16/10] flex items-center justify-center mb-6">
        <Image
          src={car.image}
          alt={car.name}
          fill
          qualityRole="product"
          sizes={IMAGE_SIZES.featuredCard}
          className="object-contain object-center"
        />
      </div>

      <div
        className={`grid gap-3 sm:gap-4 mb-8 ${
          variant === 'CSH' && display.baterai ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'
        }`}
      >
        {variant === 'BEV' && display.baterai && (
          <SpecCell label="Baterai" value={display.baterai.replace(/\s*kwh/i, '').trim()} />
        )}
        {variant === 'CSH' && display.baterai && (
          <SpecCell label="Baterai" value={display.baterai} />
        )}
        {variant === 'CSH' && display.mesin && <SpecCell label="Mesin" value={display.mesin} />}
        {variant === 'ICE' && display.mesin && <SpecCell label="Mesin" value={display.mesin} />}
        <SpecCell label="Panjang" value={display.panjang.replace(/\s*mm/i, '').trim()} />
        <SpecCell
          label="Wheelbase"
          value={display.wheelbase.replace(/\s*mm/i, '').trim()}
        />
      </div>

      <Link
        href={`/katalog/${car.id}`}
        className="w-full text-center border-2 border-white text-white hover:bg-white hover:text-neutral-800 font-bold py-3 px-4 rounded-full text-sm transition-colors"
      >
        Lihat Detail
      </Link>
    </article>
  );
};
