/**
 * Spesifikasi tampilan kartu katalog (sesuai lini produk Chery resmi).
 */

export interface CarCardDisplaySpecs {
  baterai?: string;
  mesin?: string;
  panjang: string;
  wheelbase: string;
  isNew?: boolean;
}

export const CAR_CARD_DISPLAY: Record<string, CarCardDisplaySpecs> = {
  'chery-q': {
    baterai: '42,7 kWh',
    panjang: '4195 mm',
    wheelbase: '2700 mm',
    isNew: true,
  },
  j6: {
    baterai: 'LFP',
    panjang: '4406 mm',
    wheelbase: '2715 mm',
  },
  'chery-e5': {
    baterai: 'LFP',
    panjang: '4424 mm',
    wheelbase: '2630 mm',
  },
  'j6t-csh': {
    baterai: 'LFP',
    mesin: '1,5 TGDI',
    panjang: '4503 mm',
    wheelbase: '2783 mm',
    isNew: true,
  },
  'tiggo-9-csh': {
    baterai: 'NCM',
    mesin: '1,5 TGDI',
    panjang: '4810 mm',
    wheelbase: '2800 mm',
  },
  'tiggo-8-csh': {
    baterai: 'LFP',
    mesin: '1,5T DHE',
    panjang: '4722 mm',
    wheelbase: '2710 mm',
  },
  'tiggo-cross-csh-hybrid': {
    mesin: '1,5L DHE',
    panjang: '4330 mm',
    wheelbase: '2610 mm',
  },
  'tiggo-8-pro-max': {
    mesin: '2,0 TGDI',
    panjang: '4720 mm',
    wheelbase: '2710 mm',
  },
  'tiggo-8': {
    mesin: '1,6 TGDI',
    panjang: '4722 mm',
    wheelbase: '2710 mm',
  },
  'tiggo-cross-sport': {
    mesin: '1,5T DCT',
    panjang: '4330 mm',
    wheelbase: '2610 mm',
  },
  'tiggo-cross': {
    mesin: '1,5L CVT',
    panjang: '4320 mm',
    wheelbase: '2630 mm',
  },
};

export const LINEUP_BY_POWERTRAIN = {
  BEV: ['chery-q', 'j6', 'chery-e5'],
  CSH: ['j6t-csh', 'tiggo-9-csh', 'tiggo-8-csh', 'tiggo-cross-csh-hybrid'],
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
