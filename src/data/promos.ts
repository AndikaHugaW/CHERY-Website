export interface Promo {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  discountValue: string;
  validUntil: string;
  description: string;
  highlights: string[];
}

export const PROMOS_DATA: Promo[] = [
  {
    id: 'promo-dp-ringan',
    title: 'Promo Spesial Chery Salatiga',
    subtitle: 'DP Ringan Mulai 10% atau Angsuran Terjangkau',
    tag: 'LIMITED DEAL',
    discountValue: 'Free Wallbox Charger',
    validUntil: '31 Agustus 2026',
    description: 'Dapatkan penawaran khusus pembelian Chery EV6 di Dealer Resmi Chery Salatiga. Bonus Wallbox Home Charger senilai Rp 20 Juta & Free Instalasi Listrik.',
    highlights: [
      'Gratis Home Charger + Instalasi PLN',
      'Bunga 0% tenor hingga 2 tahun',
      'Free Service & Sparepart 5 Tahun',
      'Trade-in Bonus hingga Rp 15 Juta'
    ]
  },
  {
    id: 'promo-seltos-merdeka',
    title: 'Paket Kredit Chery Seltos Turbo',
    subtitle: 'Angsuran Ringan & Cashback Spesial',
    tag: 'POPULAR CHOICE',
    discountValue: 'Cashback s/d 25 Juta',
    validUntil: '31 Agustus 2026',
    description: 'Wujudkan impian memiliki SUV modern Chery Seltos dengan skema angsuran fleksibel dan approval instan 1 hari kerja.',
    highlights: [
      'DP Mulai 15%',
      'Proses Leasing Mudah & Cepat',
      'Gratis Kaca Film Solargard 3M',
      'Gratis Karpet Dasar & Karpet Original'
    ]
  },
  {
    id: 'promo-carens-family',
    title: 'Special Family Package Carens',
    subtitle: 'All New Carens Special Financing',
    tag: 'FAMILY FAVOURITE',
    discountValue: 'Free Asuransi All Risk 1 Thn',
    validUntil: '15 September 2026',
    description: 'Nikmati perjalanan keluarga tingkat premium bersama Chery All New Carens. Dapatkan Asuransi All Risk gratis selama 1 tahun penuh.',
    highlights: [
      'Free Asuransi All Risk 1 Tahun',
      'Bunga Rendah Mulai 2.75%',
      'Garansi Mesin & Transmisi 5 Tahun',
      'Layanan Emergency Towing 24/7'
    ]
  }
];
