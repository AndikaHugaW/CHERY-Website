'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from '@/components/ui/optimized-image';
import { IMAGE_SIZES } from '@/lib/image-optimization';
import { getCarGallery } from '@/lib/car-gallery';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Car } from '@/data/cars';
import { CONTACT_INFO } from '@/data/contact';
import {
  Check,
  ArrowLeft,
  PhoneCall,
  ChevronLeft,
  ChevronRight,
  Settings,
  User,
  Fuel,
  ImageOff,
} from 'lucide-react';

const GALLERY_THUMBS_VISIBLE = 3;

import { CAR_VARIANTS_MAP, CarVariantCard } from '@/data/variants';
import type { LucideIcon } from 'lucide-react';

/**
 * Satu item spesifikasi kendaraan pada card varian.
 *
 * Ikon diletakkan pada sel berukuran tetap (16px x 20px = lebar ikon x
 * line-height teks) dan dipusatkan di dalamnya. Dengan begitu ikon selalu
 * sejajar dengan baris pertama teks — baik teksnya satu baris maupun
 * membungkus ke baris berikutnya — tanpa pergeseran manual per item.
 * Lebar sel yang tetap juga membuat teks pada keempat item mulai pada
 * posisi x yang sama dalam setiap kolom.
 */
function VariantSpec({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex min-w-0 items-start gap-2">
      <span className="flex h-5 w-4 shrink-0 items-center justify-center text-gray-400">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <span className="min-w-0 break-words leading-5">{label}</span>
    </div>
  );
}


export default function CarDetailPage() {
  const params = useParams();
  const router = useRouter();
  const carId = params?.id as string;

  const [car, setCar] = useState<Car | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [thumbPage, setThumbPage] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Galeri diambil dari folder mobil masing-masing lewat manifest build
   * (src/data/car-gallery-manifest.ts) — bukan lagi array CDN hardcode.
   * Urutan = urutan nama file, dan sudah deduplikasi (path + isi file).
   * Kosong `[]` berarti folder tidak ditemukan / belum berisi gambar.
   */
  const gallery = useMemo(() => (car ? getCarGallery(car) : []), [car]);

  /**
   * Index gambar yang sedang tampil. Bila `selectedImage` belum cocok
   * dengan isi galeri, jatuh ke gambar pertama agar primary dan thumbnail
   * aktif selalu sinkron. -1 hanya bila galeri benar-benar kosong.
   */
  const matchedIndex = gallery.indexOf(selectedImage);
  const activeIndex =
    matchedIndex >= 0 ? matchedIndex : gallery.length > 0 ? 0 : -1;
  const activeSrc = activeIndex >= 0 ? gallery[activeIndex] : '';
  const activeNumber = activeIndex >= 0 ? activeIndex + 1 : 1;

  useEffect(() => {
    if (!carId) return;

    const fetchCarDetail = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/cars/${carId}`);
        const json = await res.json();

        if (json.status === 'success' && json.data) {
          setCar(json.data);
          setThumbPage(0);
          setSelectedImage(getCarGallery(json.data)[0] ?? '');
        } else {
          setError(json.message || 'Mobil tidak ditemukan');
        }
      } catch (err) {
        console.error('Error fetching car detail:', err);
        setError('Gagal memuat data mobil');
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetail();
  }, [carId]);

  /**
   * Pilih gambar dari thumbnail: primary ikut berganti, dan strip thumbnail
   * digeser bila gambar terpilih berada di luar jendela yang terlihat.
   *
   * Logika ini sengaja ditaruh di sini, bukan di `useEffect`, karena
   * `selectedImage` hanya pernah berubah lewat pemuatan data dan klik
   * thumbnail — keduanya sudah menangani reset halaman secara eksplisit.
   */
  const selectImage = (imgUrl: string) => {
    const idx = gallery.indexOf(imgUrl);
    setSelectedImage(imgUrl);

    if (idx === -1 || gallery.length <= GALLERY_THUMBS_VISIBLE) return;
    setThumbPage((prev) => {
      if (idx < prev) return idx;
      if (idx >= prev + GALLERY_THUMBS_VISIBLE) {
        return Math.min(
          idx - GALLERY_THUMBS_VISIBLE + 1,
          gallery.length - GALLERY_THUMBS_VISIBLE
        );
      }
      return prev;
    });
  };

  const handleWhatsAppContact = () => {
    if (!car) return;
    const phone = CONTACT_INFO.waNumber;
    const text = encodeURIComponent(
      `Halo Chery Salatiga, saya tertarik dengan unit ${car.name} (${car.trim}) - ${car.formattedPrice}. Bisa tanyakan informasi promo & simulasi kreditnya?`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const currentVariants: CarVariantCard[] = (carId && CAR_VARIANTS_MAP[carId]) || [];

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex-1 max-w-[1728px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-24 pb-8 md:pt-28 md:pb-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500 mb-8">
          <Link href="/" className="hover:text-black transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/katalog" className="hover:text-black transition-colors">
            Mobil
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-extrabold">
            {car ? `Chery ${car.name}` : 'Detail Mobil'}
          </span>
        </nav>

        {/* Loading State */}
        {loading && (
          <div className="py-24 text-center space-y-4">
            <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-gray-500 font-bold">Memuat detail unit kendaraan...</p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="py-20 text-center space-y-4 bg-gray-50 border border-gray-200 rounded-3xl p-8 max-w-xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold text-black">Unit Tidak Ditemukan</h2>
            <p className="text-gray-500 text-sm">{error}</p>
            <Link
              href="/katalog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors shadow-md shadow-black/20"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Katalog
            </Link>
          </div>
        )}

        {/* Section 1: Main Content Layout */}
        {!loading && car && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: Image Showcase & Gallery (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              
              {/*
                Main Image Frame — full bleed.
                Rasio tetap (16/9) agar tinggi card tidak lompat saat ganti
                gambar; object-cover + tanpa padding supaya gambar menempel
                sampai ke tepi. Pemotongan di tepi diterima demi tampilan penuh.
                Rasio 16/9 dipilih karena mayoritas gambar galeri ≈ 1.85.
              */}
              <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-gray-200/90 bg-gray-50 shadow-sm group">
                {activeSrc ? (
                  <Image
                    src={activeSrc}
                    alt={`${car.name} gambar ${activeNumber}`}
                    fill
                    qualityRole="product"
                    sizes={IMAGE_SIZES.detailMain}
                    className="object-cover object-center transition-all duration-500"
                    /* Next 16: `priority` sudah deprecated, diganti `preload`. */
                    preload
                  />
                ) : (
                  /* Folder mobil tidak ditemukan / kosong dan gambar katalog
                     pun tidak ada: placeholder aman, bukan error. */
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                    <ImageOff className="w-10 h-10 text-gray-300" aria-hidden />
                    <p className="text-sm font-bold text-gray-400">
                      Gambar belum tersedia
                    </p>
                    <p className="text-xs text-gray-400">
                      Folder gambar {car.name} masih kosong.
                    </p>
                  </div>
                )}
              </div>

              {/* Thumbnails Row / Carousel (>3 gambar) */}
              {gallery.length > 0 && (() => {
                const useCarousel = gallery.length > GALLERY_THUMBS_VISIBLE;
                const maxThumbPage = Math.max(0, gallery.length - GALLERY_THUMBS_VISIBLE);
                const startIdx = useCarousel ? thumbPage : 0;
                const visibleThumbs = useCarousel
                  ? gallery.slice(thumbPage, thumbPage + GALLERY_THUMBS_VISIBLE)
                  : gallery;

                return (
                  <div
                    className="flex items-stretch gap-2 sm:gap-3"
                    aria-label="Galeri thumbnail"
                  >
                    {useCarousel && (
                      <button
                        type="button"
                        disabled={thumbPage <= 0}
                        onClick={() => setThumbPage((p) => Math.max(0, p - 1))}
                        className="shrink-0 self-center w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-35 disabled:pointer-events-none transition-colors shadow-sm flex items-center justify-center"
                        aria-label="Thumbnail sebelumnya"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-800" />
                      </button>
                    )}

                    <div className="flex-1 min-w-0 grid grid-cols-3 gap-3 sm:gap-3.5">
                      {visibleThumbs.map((imgUrl, visibleIdx) => {
                        // Index absolut dalam daftar galeri penuh.
                        const idx = startIdx + visibleIdx;
                        const isSelected = activeIndex === idx;
                        return (
                          <button
                            key={`${idx}-${imgUrl}`}
                            type="button"
                            onClick={() => selectImage(imgUrl)}
                            aria-current={isSelected}
                            className={`relative aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden transition-all cursor-pointer ${
                              isSelected
                                ? 'border-2 border-black ring-2 ring-black/10 shadow-md shadow-black/10'
                                : 'border border-gray-200 hover:border-gray-300 opacity-85 hover:opacity-100'
                            }`}
                          >
                            <div className="relative w-full h-full">
                              <Image
                                src={imgUrl}
                                alt={`${car.name} gambar ${idx + 1}`}
                                fill
                                qualityRole="thumbnail"
                                sizes={IMAGE_SIZES.detailThumb}
                                className="object-cover object-center"
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {useCarousel && (
                      <button
                        type="button"
                        disabled={thumbPage >= maxThumbPage}
                        onClick={() => setThumbPage((p) => Math.min(maxThumbPage, p + 1))}
                        className="shrink-0 self-center w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-35 disabled:pointer-events-none transition-colors shadow-sm flex items-center justify-center"
                        aria-label="Thumbnail berikutnya"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-800" />
                      </button>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Right Column: Car Details, Specs & Features (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              {/* Top Content Group */}
              <div className="space-y-6">
                {/* Header Title & Subtitle */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
                    {car.name}
                  </h1>
                  <p className="text-sm font-bold text-gray-500 mt-1">
                    Mulai dari
                  </p>

                  {/* Price Display */}
                  <div className="mt-4">
                    <span className="text-2xl sm:text-3xl font-black text-black tracking-tight">
                      {car.formattedPrice || car.priceStarting}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-4 font-medium">
                    {car.description ||
                      `${car.name} ${car.year || '2026'} SUV premium dengan ruang kabin yang luas dan nyaman. Cocok untuk keluarga dengan fitur keselamatan dan teknologi terkini.`}
                  </p>
                </div>

                {/* Spesifikasi Section */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-gray-900">Spesifikasi</h3>
                    <Link
                      href={`/katalog/${car.id}/spesifikasi`}
                      className="text-xs font-bold text-black hover:underline flex items-center gap-1"
                    >
                      <span>Lihat Spesifikasi Lengkap &gt;</span>
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-6 text-xs sm:text-sm">
                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Tahun</span>
                      <span className="font-extrabold text-gray-900">{car.year || '2026'}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Warna</span>
                      <span className="font-extrabold text-gray-900">{car.color || 'Hitam'}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Transmisi</span>
                      <span className="font-extrabold text-gray-900">{car.transmissionDetail || car.transmissionType}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Bahan Bakar</span>
                      <span className="font-extrabold text-gray-900">{car.fuelType}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Kilometer</span>
                      <span className="font-extrabold text-gray-900">{car.kilometer || '0 km'}</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200/60 pb-2.5">
                      <span className="text-gray-500 font-semibold">Status</span>
                      <span className="font-extrabold text-gray-900">{car.status || 'Tersedia'}</span>
                    </div>
                  </div>
                </div>

                {/* Fitur Section */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-black text-gray-900">Fitur</h3>
                    {car.features && car.features.length > 0 && (
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                        {car.features.length} fitur utama
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 text-xs sm:text-sm max-h-[420px] overflow-y-auto pr-1 scrollbar-thin">
                    {car.features && car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-gray-800">
                        <Check className="w-4 h-4 text-black shrink-0 stroke-[3] mt-0.5" />
                        <span className="font-bold text-gray-800 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons — berdampingan seperti mockup */}
              <div className="flex flex-row gap-3 pt-6 mt-auto">
                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="flex-1 min-w-0 bg-black hover:bg-gray-900 text-white font-bold py-3.5 px-4 rounded-xl text-sm sm:text-base transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0" strokeWidth={2} />
                  <span>Hubungi Kami</span>
                </button>

                <Link
                  href="/katalog"
                  className="flex-1 min-w-0 bg-white border border-black hover:bg-gray-50 text-black font-bold py-3.5 px-4 rounded-xl text-sm sm:text-base transition-colors text-center flex items-center justify-center"
                >
                  <span>Kembali ke daftar</span>
                </Link>
              </div>

            </div>

          </div>
        )}

        {/* Section 2: Varian Unit / Varian Tersedia */}
        {!loading && car && currentVariants.length > 0 && (
          <section className="mt-16 sm:mt-24 pt-12 border-t border-gray-200">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight">
                Pilih Varian {car.name}
              </h2>
              <p className="text-sm font-semibold text-gray-500">
                {currentVariants.length} Tingkat/Varian tersedia
              </p>
            </div>

            {/* Cards Grid using Katalog Unit card style */}
            <div className={`grid grid-cols-1 ${currentVariants.length === 1 ? 'max-w-lg mx-auto' : currentVariants.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6 lg:gap-8`}>
              {currentVariants.map((v, index) => (
                <div
                  key={index}
                  onClick={() => car && router.push(`/katalog/${car.id}/spesifikasi?variant=${encodeURIComponent(v.name)}`)}
                  className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer group"
                >
                  {/* Top Image Showcase */}
                  <div className="relative aspect-[5/3] sm:aspect-[16/10] bg-[#F2F4F7] w-full overflow-hidden">
                    {v.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-white/90 text-gray-900 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm tracking-wider uppercase">
                          {v.badge}
                        </span>
                      </div>
                    )}
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      qualityRole="product"
                      sizes={IMAGE_SIZES.catalogCardWide}
                      className="object-contain object-center p-4 sm:p-6 group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>


                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    
                    {/* Title, Trim & Price */}
                    <div>
                      <h3 className="text-2xl font-black text-black tracking-tight leading-tight">
                        {v.name}
                      </h3>
                      <p className="text-xs font-medium text-gray-500 mt-1">
                        {v.trim}
                      </p>

                      <div className="mt-3">
                        <span className="text-2xl font-black text-black">
                          {v.price}
                        </span>
                      </div>
                    </div>

                    {/* Specs 4-box grid — 2 kolom x 2 baris, ikon & teks selalu sejajar */}
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-gray-100 pt-4 text-xs font-medium text-gray-600">
                      <VariantSpec icon={Settings} label={v.engine} />
                      <VariantSpec icon={Settings} label={v.transmission} />
                      <VariantSpec icon={User} label={`${v.seats} Seats`} />
                      <VariantSpec icon={Fuel} label={v.fuelType} />
                    </div>

                    {/* Fitur Utama List */}
                    <div className="space-y-2 pt-3 border-t border-gray-100">
                      <p className="text-xs font-black text-gray-900 uppercase tracking-wider">
                        Fitur utama :
                      </p>
                      <ul className="space-y-1.5 text-xs text-gray-600 font-medium">
                        {v.features.slice(0, 6).map((f, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-gray-400 shrink-0">•</span>
                            <span className="line-clamp-2 leading-snug">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Action */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href={`/katalog/${car.id}/spesifikasi?variant=${encodeURIComponent(v.name)}`}
                        className="text-xs font-extrabold text-black group-hover:translate-x-1 transition-transform flex items-center gap-1 hover:underline"
                      >
                        Spesifikasi {v.name} &gt;
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
