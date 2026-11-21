'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from '@/components/ui/optimized-image';
import { IMAGE_SIZES } from '@/lib/image-optimization';
import Link from 'next/link';
import { Car, CARS_DATA } from '@/data/cars';
import { getCarCardDisplay } from '@/data/catalog-card-specs';
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Fuel,
  Gauge,
  Users,
  Battery,
} from 'lucide-react';

interface KatalogGridSectionProps {
  onOpenTestDrive?: (carId?: string) => void;
}

const ITEMS_PER_PAGE = 6;

const MODEL_OPTIONS = [
  { label: 'Semua Model', value: '' },
  ...Array.from(new Set(CARS_DATA.map((c) => c.model))).map((model) => ({
    label: model,
    value: model,
  })),
];

function powertrainBadgeLabel(car: Car): string {
  if (car.powertrain === 'BEV') return 'EV';
  if (car.powertrain === 'CSH') return 'CSH';
  return 'ICE';
}

function formatPower(car: Car): string {
  if (car.power && car.power !== 'N/A') {
    const ps = car.power.match(/(\d+)\s*PS/i);
    if (ps) return `${ps[1]} PS`;
    const hp = car.power.match(/(\d+)\s*HP/i);
    if (hp) return `${hp[1]} HP`;
    return car.power.split('/')[0].trim();
  }
  return '—';
}

function primarySpec(car: Car): string {
  if (car.powertrain === 'BEV') {
    return car.range || car.specs.range || car.battery || 'Listrik';
  }
  const engine = car.engine;
  if (engine.length > 22) return `${engine.slice(0, 20)}…`;
  return engine;
}

export const KatalogGridSection: React.FC<KatalogGridSectionProps> = ({
  onOpenTestDrive,
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('Semua');
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);

  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFilteredCars = async (queryOverride?: string) => {
    setLoading(true);
    const q = queryOverride !== undefined ? queryOverride : searchQuery;
    try {
      const params = new URLSearchParams();
      if (selectedModel) {
        params.append('models', selectedModel);
      }
      if (selectedTransmission && selectedTransmission !== 'Semua') {
        params.append('transmission', selectedTransmission);
      }
      if (q.trim()) {
        params.append('q', q.trim());
      }
      params.append('sort', sortBy === 'popular' ? 'newest' : sortBy);

      const res = await fetch(`/api/cars?${params.toString()}`);
      const json = await res.json();

      if (json.status === 'success' && Array.isArray(json.data)) {
        setCars(json.data);
      } else {
        setCars([]);
      }
    } catch (err) {
      console.error('Error fetching cars:', err);
      setCars([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilteredCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [cars.length, selectedModel, selectedTransmission, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(cars.length / ITEMS_PER_PAGE));

  const paginatedCars = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return cars.slice(start, start + ITEMS_PER_PAGE);
  }, [cars, currentPage]);

  const handleSearch = () => {
    setSearchQuery(searchInput);
    fetchFilteredCars(searchInput);
  };

  const applyFilters = () => {
    setSearchQuery(searchInput);
    fetchFilteredCars(searchInput);
  };

  const renderCarCard = (car: Car) => {
    const badge = powertrainBadgeLabel(car);
    const cardDisplay = getCarCardDisplay(car.id);
    const specCols =
      car.powertrain === 'CSH' && cardDisplay?.baterai
        ? 'grid-cols-2 sm:grid-cols-4'
        : 'grid-cols-3';

    const specCell = (label: string, value: string) => (
      <div key={`${car.id}-${label}`} className="flex flex-col items-center text-center min-w-0">
        <span className="text-[10px] font-medium text-gray-500 uppercase">{label}</span>
        <span className="text-base sm:text-lg font-bold text-gray-900 mt-1">{value}</span>
      </div>
    );

    return (
      <article
        key={car.id}
        className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
      >
        <div className="p-5 sm:p-6 flex flex-col flex-1 gap-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight uppercase">
              {car.name}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              {cardDisplay?.isNew && (
                <span className="text-[10px] font-extrabold uppercase text-red-600 bg-red-50 px-2 py-0.5 rounded">
                  New
                </span>
              )}
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-800">
                {badge}
              </span>
            </div>
          </div>

          <div className="relative aspect-[16/10] bg-[#f3f4f6] overflow-hidden rounded-lg">
            <Image
              src={car.image}
              alt={car.name}
              fill
              qualityRole="product"
              className="object-contain object-center p-2"
              sizes={IMAGE_SIZES.catalogCard}
            />
          </div>

          {cardDisplay ? (
            <div className={'grid gap-3 border-t border-gray-100 pt-4 ' + specCols}>
              {car.powertrain === 'BEV' &&
                cardDisplay.baterai &&
                specCell('Baterai', cardDisplay.baterai.replace(/ kwh/i, '').trim())}
              {car.powertrain === 'CSH' && cardDisplay.baterai && specCell('Baterai', cardDisplay.baterai)}
              {car.powertrain === 'CSH' && cardDisplay.mesin && specCell('Mesin', cardDisplay.mesin)}
              {car.powertrain === 'ICE' && cardDisplay.mesin && specCell('Mesin', cardDisplay.mesin)}
              {specCell('Panjang', cardDisplay.panjang.replace(/ mm/i, '').trim())}
              {specCell('Wheelbase', cardDisplay.wheelbase.replace(/ mm/i, '').trim())}
            </div>
          ) : null}

          <Link
            href={'/katalog/' + car.id}
            className="mt-auto w-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 text-sm font-bold py-2.5 px-4 rounded-full text-center transition-colors"
          >
            Lihat Detail
          </Link>
        </div>
      </article>
    );
  };

  return (
    <section id="katalog-grid" className="bg-[#fafafa] border-t border-gray-100">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-10">
        {/* Filter bar */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-4 mb-2">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Cari mobil kita..."
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-sm border border-gray-200 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300"
              />
            </div>

            <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 items-center">
              <div className="relative flex-1 sm:flex-none sm:min-w-[140px]">
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-200 rounded-2xl pl-3 pr-9 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-black/10 cursor-pointer"
                >
                  {MODEL_OPTIONS.map((opt) => (
                    <option key={opt.value || 'all'} value={opt.value}>
                      {opt.value ? opt.label : 'Semua Model'}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative flex-1 sm:flex-none sm:min-w-[160px]">
                <select
                  value={selectedTransmission}
                  onChange={(e) => setSelectedTransmission(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-200 rounded-2xl pl-3 pr-9 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-black/10 cursor-pointer"
                >
                  <option value="Semua">Semua Transmisi</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative flex-1 sm:flex-none sm:min-w-[180px]">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-200 rounded-2xl pl-3 pr-9 py-2.5 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-black/10 cursor-pointer"
                >
                  <option value="popular">Urutan: Paling Laku</option>
                  <option value="newest">Terbaru</option>
                  <option value="price-low">Harga Terendah</option>
                  <option value="price-high">Harga Tertinggi</option>
                  <option value="name-asc">Nama A–Z</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <button
                type="button"
                onClick={applyFilters}
                className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black hover:bg-neutral-800 text-white flex items-center justify-center transition-colors ml-auto lg:ml-0"
                aria-label="Terapkan pencarian"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-6 sm:mb-8 px-1">
          Menampilkan{' '}
          <span className="font-bold text-gray-900">{cars.length}</span> unit kendaraan
        </p>

        {loading ? (
          <div className="py-24 text-center text-gray-500 text-sm animate-pulse">
            Memuat data katalog mobil Chery...
          </div>
        ) : cars.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-xl border border-gray-200">
            <p className="text-gray-600 font-semibold">Tidak ada unit yang sesuai filter.</p>
            <button
              type="button"
              onClick={() => {
                setSearchInput('');
                setSearchQuery('');
                setSelectedModel('');
                setSelectedTransmission('Semua');
                setSortBy('newest');
                fetch('/api/cars?sort=newest')
                  .then((r) => r.json())
                  .then((j) => {
                    if (j.status === 'success') setCars(j.data);
                  });
              }}
              className="mt-4 px-5 py-2 bg-black text-white text-sm font-semibold rounded-lg"
            >
              Reset
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {paginatedCars.map((car) => renderCarCard(car))}
            </div>

            {totalPages > 1 && (
              <nav
                className="flex items-center justify-center gap-2 mt-12 sm:mt-14"
                aria-label="Paginasi katalog"
              >
                <button
                  type="button"
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="p-2 rounded-md border border-gray-200 disabled:opacity-40 hover:bg-white transition-colors"
                  aria-label="Halaman sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`min-w-[40px] h-10 px-3 text-sm font-semibold rounded-md border transition-colors ${
                      currentPage === page
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="p-2 rounded-md border border-gray-200 disabled:opacity-40 hover:bg-white transition-colors"
                  aria-label="Halaman berikutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </nav>
            )}
          </>
        )}
      </div>
    </section>
  );
};
