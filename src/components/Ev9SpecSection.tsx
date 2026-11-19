'use client';

import React from 'react';
import Image from 'next/image';

export const Ev9SpecSection: React.FC = () => {
  return (
    <section 
      className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[500px] sm:min-h-[580px] lg:min-h-[calc(100vh-80px)] overflow-hidden flex flex-col justify-between py-6 sm:py-8 lg:py-12 px-4 sm:px-8 lg:px-16 text-white"
    >
      {/* Background Image: herosection 2.png without dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing page/herosection 2.png"
          alt="Specification Chery Q"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Top Header & Specs Group */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Title */}
        <div className="text-center pt-2 sm:pt-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
            Specification (Chery Q)
          </h2>
        </div>

        {/* Middle Specs: Exactly 30px below Title */}
        <div className="w-full max-w-[1500px] mx-auto flex items-center justify-between gap-4 px-2 sm:px-6 lg:px-12 mt-[30px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          {/* Left: DIMENSION | LENGTH, WIDTH, HEIGHT */}
          <div className="flex items-start gap-2.5 sm:gap-4">
            <span className="font-bold text-[11px] sm:text-sm md:text-base text-white tracking-wider uppercase pt-0.5">
              DIMENSION
            </span>
            <div className="w-[1.5px] h-14 sm:h-18 md:h-20 bg-transparent shrink-0 self-stretch my-0.5" />
            <div className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-white/90">LENGTH</span>
                <span className="font-bold text-white">113.2 IN</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-white/90">WIDTH</span>
                <span className="font-bold text-white">184.8 IN</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-white/90">HEIGHT</span>
                <span className="font-bold text-white">72.8 IN</span>
              </div>
            </div>
          </div>

          {/* Right: DIMENSION | POWER, HORSEPOWER */}
          <div className="flex items-start gap-2.5 sm:gap-4 ml-auto">
            <span className="font-bold text-[11px] sm:text-sm md:text-base text-white tracking-wider uppercase pt-0.5">
              DIMENSION
            </span>
            <div className="w-[1.5px] h-10 sm:h-12 md:h-14 bg-transparent shrink-0 self-stretch my-0.5" />
            <div className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-white/90">POWER</span>
                <span className="font-bold text-white">208 KW</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-white/90">HORSEPOWER</span>
                <span className="font-bold text-white">283 HP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: 4 Horizontal Quick Stats */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto pb-2 sm:pb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
          <div>
            <span className="block text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-white uppercase">
              BATTERY CAPACITY
            </span>
            <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mt-0.5 tracking-tight uppercase">
              51 KWH
            </span>
          </div>

          <div>
            <span className="block text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-white uppercase">
              DUAL MOTOR
            </span>
            <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mt-0.5 tracking-tight uppercase">
              AWD
            </span>
          </div>

          <div>
            <span className="block text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-white uppercase">
              TOP SPEED
            </span>
            <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mt-0.5 tracking-tight uppercase">
              225 KM/H
            </span>
          </div>

          <div>
            <span className="block text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-white uppercase">
              WEIGHT
            </span>
            <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mt-0.5 tracking-tight uppercase">
              4,030 LBS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
