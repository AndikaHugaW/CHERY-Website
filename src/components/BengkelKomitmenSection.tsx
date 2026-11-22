'use client';

import React from 'react';
import { ShieldCheck, Award, Cpu, Clock, CheckCircle } from 'lucide-react';

export const BengkelKomitmenSection: React.FC = () => {
  const commitments = [
    {
      icon: Award,
      title: 'Teknisi Tersertifikasi Chery',
      desc: 'Dikerjakan langsung oleh teknisi profesional yang telah melewati sertifikasi standar pabrikan resmi Chery Indonesia.',
    },
    {
      icon: ShieldCheck,
      title: '100% Chery Genuine Parts',
      desc: 'Kepastian penggunaan suku cadang asli bergaransi resmi untuk menjaga keaslian, performa, dan keamanan kendaraan Anda.',
    },
    {
      icon: Cpu,
      title: 'Diagnostik Digital Mutakhir',
      desc: 'Dilengkapi fasilitas computerized scanning modern untuk deteksi akurat sistem mesin, kelistrikan, hingga baterai EV/Hybrid.',
    },
    {
      icon: Clock,
      title: 'Transparan & Tepat Waktu',
      desc: 'Estimasi biaya dan pengerjaan yang transparan di awal tanpa biaya tersembunyi, serta jaminan ketepatan waktu servis.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12 border-b border-gray-200/80">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Brand Commitment Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#B91C1C] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#B91C1C]" />
              <span>Komitmen Purna Jual Chery Salatiga</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
              Dedikasi Terbaik untuk Kenyamanan & Ketenteraman Berkendara Anda
            </h2>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Chery Salatiga berkomitmen memberikan rasa tenang (<span className="font-semibold text-gray-900 italic">peace of mind</span>) di setiap kilometer perjalanan Anda. Kami menghadirkan standar bengkel resmi berkelas global dengan fasilitas modern, teknisi berpengalaman, dan jaminan suku cadang asli untuk melindungi investasi serta keselamatan Anda dan keluarga.
              </p>
              <p>
                Fasilitas bengkel kami dirancang mengutamakan ketelitian, transparansi servis, serta proses ramah lingkungan yang efisien. Percayakan pemeliharaan dan perawatan mobil Chery Anda kepada bengkel resmi Chery Salatiga demi performa kendaraan yang selalu prima dan mulus seperti baru.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-gray-800">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Garansi Resmi Pabrikan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ruang Tunggu Nyaman & Ber-AC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Booking Servis Tanpa Antre</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Commitment Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {commitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-7 border border-gray-200/80 hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
