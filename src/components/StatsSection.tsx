'use client';

import React from 'react';

const statsData = [
  { value: '01', label: 'Authorized Dealer' },
  { value: '05+', label: 'Chery Models' },
  { value: '24/7', label: 'Sales Assistance' },
  { value: '100%', label: 'Customer Support' },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-[#F8F9FA] border-y border-gray-200/80 py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
      <div className="max-w-[1728px] mx-auto px-1 sm:px-8 lg:px-12">
        <div className="grid grid-cols-4 divide-x divide-gray-300/60 text-center">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-1 sm:px-4">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 mt-1 sm:mt-2 tracking-tight sm:tracking-wide text-center leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
