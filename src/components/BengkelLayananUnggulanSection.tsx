'use client';

import React from 'react';
import { Wrench, BatteryCharging, ShieldAlert, Sparkles, Check, Clock, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '@/data/contact';

export const BengkelLayananUnggulanSection: React.FC = () => {
  const services = [
    {
      id: 'periodic-maintenance',
      icon: Wrench,
      title: 'Periodic Maintenance',
      badge: 'Rutin & Terjadwal',
      isComingSoon: false,
      description:
        'Perawatan berkala menyeluruh sesuai pedoman pabrikan Chery untuk mempertahankan klaim garansi dan memastikan mobil selalu dalam kondisi prima.',
      checklist: [
        'Ganti Oli Mesin & Filter Orisinal',
        'Pengecekan Sistem Rem & Kaki-kaki',
        'Tune-Up & Kalibrasi Mesin',
        'Multi-Point Safety Check 30+ Titik',
      ],
    },
    {
      id: 'ev-hybrid-care',
      icon: BatteryCharging,
      title: 'EV & Hybrid Diagnostics',
      badge: 'Khusus EV & CSH',
      isComingSoon: false,
      description:
        'Layanan diagnostik dan pemeliharaan khusus baterai bertegangan tinggi, inverter, dan motor listrik Chery EV & Hybrid oleh teknisi berlisensi.',
      checklist: [
        'State of Health (SOH) Battery Check',
        'Inspeksi Pendingin Baterai & BMS',
        'Update Firmware & ECU Chery',
        'Pengecekan Port & Charging System',
      ],
    },
    {
      id: 'general-repair',
      icon: ShieldAlert,
      title: 'General Repair & Spare Parts',
      badge: '100% Suku Cadang Asli',
      isComingSoon: false,
      description:
        'Solusi perbaikan mekanikal dan elektrikal dengan suku cadang original Chery untuk performa andal, durabilitas tahan lama, dan bergaransi.',
      checklist: [
        'Perbaikan Mesin & Transmisi Otomatis',
        'Perawatan AC & Sistem Kelistrikan',
        'Spooring & Balancing Presisi Tinggi',
        'Jaminan Ketersediaan Suku Cadang',
      ],
    },
    {
      id: 'body-paint',
      icon: Sparkles,
      title: 'Body & Paint',
      badge: 'Segera Hadir',
      isComingSoon: true,
      description:
        'Fasilitas oven berteknologi tinggi dan tenaga spesialis pengecatan modern yang akan segera hadir untuk merestorasi tampilan mobil Chery Anda seperti baru.',
      checklist: [
        'Cat Oven Presisi Standar Internasional',
        'Perbaikan Penyok & Struktur Bodi',
        'Poles Bodi & Paint Protection',
        'Kemudahan Klaim Asuransi Rekanan',
      ],
    },
  ];

  const handleConsultation = () => {
    const text = encodeURIComponent(
      'Halo Bengkel Resmi Chery Salatiga, saya ingin konsultasi mengenai servis dan perawatan mobil Chery.'
    );
    window.open(`https://wa.me/${CONTACT_INFO.waNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="bg-[#F8F9FA] py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12 border-b border-gray-200/80">
      <div className="max-w-[1728px] mx-auto space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200/80 text-gray-800 text-xs font-bold uppercase tracking-wider">
            <span>Layanan Purna Jual Chery Salatiga</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Solusi Servis Lengkap & Profesional
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
            Perawatan terpadu dengan standar resmi dealer Chery untuk memastikan performa, efisiensi bahan bakar/baterai, serta keselamatan perjalanan Anda tetap maksimal.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className={`relative bg-white rounded-3xl p-6 sm:p-7 border ${
                  item.isComingSoon
                    ? 'border-amber-200/80 bg-linear-to-b from-white via-white to-amber-50/20'
                    : 'border-gray-200/80 hover:border-gray-300'
                } shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6 overflow-hidden`}
              >
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                      item.isComingSoon ? 'bg-neutral-800 text-white' : 'bg-black text-white'
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      item.isComingSoon
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {item.isComingSoon && <Clock className="w-3 h-3 text-amber-600" />}
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-2.5 pt-4 text-xs font-semibold border-t border-gray-100 mt-auto">
                  {item.checklist.map((checkText, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          item.isComingSoon ? 'text-amber-600' : 'text-emerald-600'
                        }`}
                      />
                      <span className={item.isComingSoon ? 'text-gray-600' : 'text-gray-700'}>
                        {checkText}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900">
              Perlu Konsultasi Kondisi Kendaraan Chery Anda?
            </h4>
            <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
              Service Advisor Chery Salatiga siap membantu menjawab keluhan dan estimasi perbaikan.
            </p>
          </div>
          <button
            onClick={handleConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B91C1C] hover:bg-red-700 active:scale-95 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat Service Advisor</span>
          </button>
        </div>

      </div>
    </section>
  );
};
