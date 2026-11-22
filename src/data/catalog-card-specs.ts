/**
 * Spesifikasi tampilan kartu katalog (sesuai lini produk Chery resmi).
 * Data diambil dari CMS resmi chery.co.id (highlight specs & tabel spesifikasi).
 */

export interface CarCardDisplaySpecs {
  /** Kapasitas baterai (BEV) atau sistem baterai (CSH). */
  baterai?: string;
  /** Konfigurasi mesin. */
  mesin?: string;
  /** Daya motor/mesin, sudah diformat (mis. "204 PS", "187 kW"). */
  tenaga?: string;
  /** Panjang bodi. */
  panjang: string;
  /** Jarak sumbu roda. */
  wheelbase: string;
  /** Jumlah penumpang. */
  kursi?: number;
  isNew?: boolean;
}

export const CAR_CARD_DISPLAY: Record<string, CarCardDisplaySpecs> = {
  'chery-q': {
    baterai: '42,7 kWh',
    mesin: 'Baterai 42,7 kWh',
    tenaga: '122 PS',
    panjang: '4195 mm',
    wheelbase: '2700 mm',
    kursi: 5,
    isNew: true,
  },
  j6: {
    baterai: '65,59 kWh',
    mesin: 'Baterai LFP',
    tenaga: '184 PS',
    panjang: '4406 mm',
    wheelbase: '2715 mm',
    kursi: 5,
  },
  'chery-e5': {
    baterai: '61 kWh',
    mesin: 'Baterai LFP',
    tenaga: '201 HP',
    panjang: '4424 mm',
    wheelbase: '2630 mm',
    kursi: 5,
  },
  'tiggo-9-csh': {
    baterai: '34,46 kWh',
    mesin: '1,5 TGDI',
    tenaga: '395 PS',
    panjang: '4810 mm',
    wheelbase: '2800 mm',
    kursi: 5,
  },
  'tiggo-8-csh': {
    baterai: '18,3 kWh',
    mesin: '1,5T DHE',
    tenaga: '204 PS',
    panjang: '4722 mm',
    wheelbase: '2710 mm',
    kursi: 7,
  },
  'tiggo-cross-csh-hybrid': {
    baterai: '1,8 kWh',
    mesin: '1,5L DHE',
    tenaga: '204 PS',
    panjang: '4330 mm',
    wheelbase: '2610 mm',
    kursi: 5,
  },
  'tiggo-8-pro-max': {
    mesin: '2,0 TGDI',
    tenaga: '187 kW',
    panjang: '4720 mm',
    wheelbase: '2710 mm',
    kursi: 7,
  },
  'tiggo-8': {
    mesin: '1,6 TGDI',
    tenaga: '186 PS',
    panjang: '4722 mm',
    wheelbase: '2710 mm',
    kursi: 7,
  },
  'tiggo-cross-sport': {
    mesin: '1,5T DCT',
    tenaga: '147 PS',
    panjang: '4330 mm',
    wheelbase: '2610 mm',
    kursi: 5,
  },
  'tiggo-cross': {
    mesin: '1,5L CVT',
    tenaga: '116 PS',
    panjang: '4320 mm',
    wheelbase: '2630 mm',
    kursi: 5,
  },
};

export const LINEUP_BY_POWERTRAIN = {
  BEV: ['chery-q', 'j6', 'chery-e5'],
  CSH: ['tiggo-9-csh', 'tiggo-8-csh', 'tiggo-cross-csh-hybrid'],
  ICE: ['tiggo-8-pro-max', 'tiggo-8', 'tiggo-cross-sport', 'tiggo-cross'],
} as const;

export const CATALOG_LINEUP_ORDER: string[] = [
  ...LINEUP_BY_POWERTRAIN.BEV,
  ...LINEUP_BY_POWERTRAIN.CSH,
  ...LINEUP_BY_POWERTRAIN.ICE,
];

export function getCarCardDisplay(carId: string): CarCardDisplaySpecs | undefined {
  return CAR_CARD_DISPLAY[carId];
}
