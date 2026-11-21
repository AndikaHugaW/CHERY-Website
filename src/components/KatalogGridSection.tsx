'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { IMAGE_SIZES } from '@/lib/image-optimization';
import { Car, CARS_DATA } from '@/data/cars';
import { VehicleCard } from '@/components/VehicleCard';
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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

  const renderCarCard = (car: Car) => (
    <VehicleCard
      key={car.id}
      car={car}
      primaryLabel="Pesan"
      onPrimaryAction={() => onOpenTestDrive?.(car.id)}
      sizes={IMAGE_SIZES.catalogCard}
    />
  );

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
