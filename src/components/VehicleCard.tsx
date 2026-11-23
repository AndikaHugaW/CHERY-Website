'use client';

import React from 'react';
import Image from '@/components/ui/optimized-image';
import { IMAGE_SIZES } from '@/lib/image-optimization';
import Link from 'next/link';
import { Car } from '@/data/cars';
import { CONTACT_INFO } from '@/data/contact';
import { getCarCardDisplay, CarCardDisplaySpecs } from '@/data/catalog-card-specs';
import { Fuel, Gauge, Users, BatteryCharging, ArrowRight, Ruler, Milestone } from 'lucide-react';

/**
 * Kartu unit unified untuk seluruh katalog.
 * Referensi layout: badge di atas gambar, judul + harga, baris spesifikasi ikon, dual action button.
 */
interface VehicleCardProps {
  car: Car;
  /** 覆盖默认展示规格（可选）。 */
  specs?: CarCardDisplaySpecs;
  /** 主行动按钮文案，默认「Pesan」。 */
  primaryLabel?: string;
  /** 主行动回调；不传时退化为链接到详情页。 */
  onPrimaryAction?: () => void;
  /** 详情页链接。 */
  detailHref?: string;
  /** 图片加载尺寸提示。 */
  sizes?: string;
  /** 深色卡片（用于深色背景区块）。 */
  tone?: 'light' | 'dark';
}

const POWERTRAIN_LABEL: Record<Car['powertrain'], string> = {
  BEV: 'EV',
  CSH: 'CSH',
  ICE: 'ICE',
};

/**
 * Baris spesifikasi dan baris tombol memakai lebar penuh + gap yang sama,
 * sehingga tepi kiri/kanan keduanya selalu identik dan ritme jaraknya konsisten.
 * Baris spesifikasi membagi lebar secara merata sesuai jumlah komponen
 * (3 komponen -> 3 kolom, 4 komponen -> 4 kolom), sedangkan baris tombol
 * selalu 2 kolom sama lebar.
 */

/** Kelas gap literal agar Tailwind v4 tidak mem-purge class dinamis. */
const CARD_GRID_GAP = 'gap-2.5 sm:gap-3';

/**
 * Penempatan horizontal tiap komponen spesifikasi di dalam grid.
 * Grid spesifikasi memakai 3 kolom di web dan mobile agar konsisten dan sejajar.
 * - kolom 1 -> batas kiri tombol "Pesan"
 * - kolom 2 -> titik tengah card (= titik tengah celah kedua tombol)
 * - kolom 3 -> batas kanan tombol "Detail Spesifikasi"
 * justify-self memposisikan blok item; dt/dd ikut rata agar label dan
 * nilai berhenti pada anchor yang sama di mobile maupun web.
 */
const SPEC_ALIGN = {
  start: {
    item: 'justify-self-start sm:justify-self-start',
    label: 'justify-start sm:justify-start',
    value: 'text-left sm:text-left',
  },
  center: {
    item: 'justify-self-center sm:justify-self-center',
    label: 'justify-center sm:justify-center',
    value: 'text-center sm:text-center',
  },
  end: {
    item: 'justify-self-end sm:justify-self-end',
    label: 'justify-end sm:justify-end',
    value: 'text-right sm:text-right',
  },
} as const;

type SpecAlignKey = keyof typeof SPEC_ALIGN;

const SPEC_ALIGN_ORDER: Record<number, SpecAlignKey[]> = {
  2: ['start', 'end'],
  3: ['start', 'center', 'end'],
  4: ['start', 'center', 'center', 'end'],
};

/** Jumlah kolom grid per jumlah spesifikasi (mobile 3 kolom agar rapi seperti web). */
const SPEC_GRID_COLS: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-4',
};

function formatPower(car: Car): string {
  const power = car.power?.trim();
  if (!power || power === 'N/A') return '—';
  const ps = power.match(/(\d+)\s*PS/i);
  if (ps) return `${ps[1]} PS`;
  const hp = power.match(/(\d+)\s*HP/i);
  if (hp) return `${hp[1]} HP`;
  return power.split('/')[0].trim();
}

function formatEngine(car: Car): string {
  const engine = car.engine?.trim();
  if (!engine) return '—';
  if (engine.length > 18) return `${engine.slice(0, 16)}…`;
  return engine;
}

/** Ambil spesifikasi tampilan: preferensi override, lalu fallback ke tabel spesifikasi kartu. */
export function resolveCardSpecs(car: Car, specs?: CarCardDisplaySpecs) {
  return specs ?? getCarCardDisplay(car.id);
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  car,
  specs,
  primaryLabel = 'Pesan',
  onPrimaryAction,
  detailHref,
  sizes = IMAGE_SIZES.catalogCard,
  tone = 'light',
}) => {
  const display = resolveCardSpecs(car, specs);
  const badge = POWERTRAIN_LABEL[car.powertrain];
  const isDark = tone === 'dark';
  const href = detailHref ?? `/katalog/${car.id}`;

  // Baris spesifikasi mengikuti referensi: Mesin · Tenaga ·Kursi.
  // Data diambil dari tabel spesifikasi kartu (catalog-card-specs.ts).
  const specItems: { label: string; value: string; unit?: string }[] = [];

  const engineLabel = display?.mesin ?? formatEngine(car);
  if (engineLabel && engineLabel !== '—') {
    specItems.push({ label: 'Mesin', value: engineLabel });
  }

  const powerLabel = display?.tenaga ?? formatPower(car);
  if (powerLabel && powerLabel !== '—') {
    specItems.push({
      label: 'Tenaga',
      value: powerLabel.replace(/\s*(PS|HP|kW)\s*$/i, '').trim(),
      unit: powerLabel.match(/\s*(PS|HP|kW)\s*$/i)?.[1],
    });
  }

  const seatCount = display?.kursi ?? car.seats;
  if (seatCount) {
    specItems.push({ label: 'Kursi', value: String(seatCount), unit: 'Seater' });
  }

  const fallbackSpecs = [
    { icon: Fuel, label: formatEngine(car) },
    { icon: Gauge, label: formatPower(car) },
    { icon: Users, label: `${car.seats}-Seater` },
  ];

  // Grid spesifikasi: lebar penuh identik container tombol; tiap item
  // diposisikan dengan justify-self agar sejajar dengan anchor tombol.
  const specCount = Math.min(specItems.length, 4);
  const specGridCols = SPEC_GRID_COLS[specCount] ?? SPEC_GRID_COLS[3];
  const specAligns = SPEC_ALIGN_ORDER[specCount] ?? SPEC_ALIGN_ORDER[3];

  const handlePrimaryClick = () => {
    if (onPrimaryAction) {
      onPrimaryAction();
    } else {
      const text = `Halo Chery Salatiga, saya tertarik dan ingin memesan unit Chery ${car.name}. Mohon informasi ketersediaan unit, promo, dan penawaran terbaiknya.`;
      window.open(`https://wa.me/${CONTACT_INFO.waNumber}?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ease-out ${
        isDark
          ? 'border-white/12 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]'
          : 'border-gray-200/90 bg-white hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.28)]'
      }`}
    >
      {/* Image */}
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden ${
          isDark ? 'bg-white/[0.03]' : 'bg-gradient-to-b from-[#f6f7f9] to-[#eceef2]'
        }`}
      >
        <Image
          src={car.image}
          alt={car.name}
          fill
          qualityRole="product"
          sizes={sizes}
          className="object-contain object-center p-4 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        {/* Badge */}
        <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide backdrop-blur-md ${
              isDark
                ? 'bg-white/15 text-white ring-1 ring-inset ring-white/20'
                : 'bg-white/90 text-gray-900 ring-1 ring-inset ring-gray-900/5 shadow-sm'
            }`}
          >
            {badge}
          </span>
          {display?.isNew && (
            <span className="inline-flex items-center rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
              New
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div>
          <h3
            className={`text-lg sm:text-[1.375rem] font-bold tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {car.name}
          </h3>
          <p className={`mt-1 sm:mt-1.5 text-xs sm:text-sm font-medium ${isDark ? 'text-white/70' : 'text-gray-500'}`}>
            Mulai{' '}
            <span className={isDark ? 'font-semibold text-white' : 'font-semibold text-gray-900'}>
              {car.rawPrice > 0 ? car.formattedPrice : car.priceStarting}
            </span>
          </p>
        </div>

        {/* Specs — memakai grid yang sama dengan baris tombol agar tepi kolom sejajar */}
        {display && specItems.length > 0 ? (
          <dl
            className={`mt-4 sm:mt-5 grid ${specGridCols} ${CARD_GRID_GAP} gap-y-3 sm:gap-y-4 border-t pt-4 sm:pt-5 ${
              isDark ? 'border-white/10' : 'border-gray-100'
            }`}
          >
            {specItems.map((item, index) => {
              const align = SPEC_ALIGN[specAligns[index] ?? 'start'];
              return (
                <div key={item.label} className={`min-w-0 ${align.item}`}>
                  <dt
                    className={`flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider ${
                      isDark ? 'text-white/55' : 'text-gray-400'
                    } ${align.label}`}
                  >
                    {item.label === 'Mesin' && <Fuel className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden />}
                    {item.label === 'Tenaga' && <Gauge className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden />}
                    {item.label === 'Kursi' && <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden />}
                    {item.label === 'Baterai' && (
                      <BatteryCharging className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden />
                    )}
                    {item.label === 'Panjang' && <Ruler className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden />}
                    {item.label === 'Wheelbase' && <Milestone className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" aria-hidden />}
                    <span className="truncate">{item.label}</span>
                  </dt>
                  <dd
                    className={`mt-1 sm:mt-1.5 text-[11px] sm:text-sm font-bold leading-tight break-words ${
                      isDark ? 'text-white' : 'text-gray-900'
                    } ${align.value}`}
                  >
                    {item.value}
                    {item.unit && (
                      <span className={`ml-0.5 text-[10px] sm:text-[11px] font-medium ${isDark ? 'text-white/50' : 'text-gray-400'}`}>
                        {item.unit}
                      </span>
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        ) : (
          <div className="mt-4 sm:mt-5 flex items-center justify-between gap-3 border-t border-gray-100 pt-4 sm:pt-5">
            {fallbackSpecs.map((spec) => {
              const Icon = spec.icon;
              return (
                <div key={spec.label} className="flex min-w-0 items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-gray-400" aria-hidden />
                  <span className="truncate text-[11px] sm:text-xs font-semibold text-gray-600">{spec.label}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Actions — lebar penuh, dua tombol sama lebar, sejajar dengan baris spesifikasi */}
        <div className={`mt-5 sm:mt-6 grid grid-cols-2 ${CARD_GRID_GAP}`}>
          <button
            type="button"
            onClick={handlePrimaryClick}
            className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-full px-2 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-sm font-bold transition-all duration-200 active:scale-[0.98] cursor-pointer ${
              isDark
                ? 'bg-white text-gray-900 hover:bg-white/90'
                : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}
          >
            {primaryLabel}
          </button>

          <Link
            href={href}
            className={`group/btn inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-full border px-2 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-sm font-bold transition-all duration-200 active:scale-[0.98] ${
              isDark
                ? 'border-white/25 text-white hover:border-white/50 hover:bg-white/10'
                : 'border-gray-300 text-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white'
            }`}
          >
            <span className="whitespace-nowrap">Detail Spesifikasi</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default VehicleCard;
