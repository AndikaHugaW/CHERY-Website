export interface Car {
  id: string;
  name: string;
  trim: string;
  model: string;
  brand: string;
  year: string;
  color: string;
  description: string;
  kilometer: string;
  status: string;
  tagline: string;
  category: 'SUV' | 'MPV' | 'EV' | 'SEDAN';
  /** Lini produk Chery Indonesia: BEV, CSH, ICE */
  powertrain: 'BEV' | 'CSH' | 'ICE';
  bodyType: string;
  priceStarting: string;
  formattedPrice: string;
  rawPrice: number;
  engine: string;
  power: string;
  transmissionType: 'Automatic' | 'Manual';
  transmissionDetail: string;
  fuelType: 'Bensin' | 'Diesel' | 'Listrik' | 'Hybrid';
  seats: number;
  image: string;
  gallery: string[];
  battery?: string;
  range?: string;
  driveType?: string;
  badge?: {
    text: string;
    type: 'ready' | 'promo' | 'ev';
  };
  features: string[];
  specs: {
    acceleration?: string;
    range?: string;
    driveType?: string;
    warranty: string;
  };
}

// Generated from https://chery.co.id CMS (2026-11-20)

// Generated from https://chery.co.id CMS (2026-11-20)

// Generated from https://chery.co.id CMS (2026-11-20)

// Generated from https://chery.co.id CMS (2026-11-20)

// Generated from https://chery.co.id CMS (2026-11-20)

// Generated from https://chery.co.id CMS (2026-11-20)

export const CARS_DATA: Car[] = [
  {
    "id": "chery-q",
    "name": "CHERY Q",
    "trim": "CHERY Q PURE",
    "model": "CHERY Q",
    "brand": "Chery",
    "year": "2026",
    "color": "Dusk Purple",
    "description": "Prebook CHERY Q di E-Commerce hari ini untuk pengalaman berbelanja yang lancar!",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Prebook CHERY Q di E-Commerce hari ini untuk pengalaman berbelanja yang lancar!",
    "category": "EV",
    "powertrain": "BEV",
    "bodyType": "EV",
    "priceStarting": "Rp 249.9 Jt",
    "formattedPrice": "Rp 249.900.000",
    "rawPrice": 249900000,
    "engine": "Pengisian Daya Cepat 30%-80% dalam 16.5 menit",
    "power": "N/A",
    "transmissionType": "Automatic",
    "transmissionDetail": "Automatic",
    "fuelType": "Listrik",
    "seats": 5,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/main-image-desktop-02.webp",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/main-image-desktop-02.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/main-image-front.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/safety/apa-v2.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/interior/wireless-fast-charging.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/additional-on-sigma/17-Inch-Capsule-Loop-Alloy-Wheel.jpg",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/chery-q/additional-on-sigma/Electric-Tailgate-New.jpg"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Pengisian Daya Cepat 30%-80% dalam 16.5 menit",
      "20 ADAS + Autonomous Parking Assist",
      "Total 1,520L Trunk Capacity",
      "82% High-Strength Steel Body Structure",
      "IP68 Water & Dust Resistant Battery Protection",
      "6 Airbag",
      "20 ADAS Features",
      "540 Camera"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  },
  {
    "id": "j6t-csh",
    "name": "J6T CSH",
    "trim": "J6T CSH",
    "model": "J6T CSH",
    "brand": "Chery",
    "year": "2026",
    "color": "White Howlite",
    "description": "Nikmati performa berkendara maksimal dalam balutan gaya yang elegan. Temukan info spesifikasi, fitur dan harga Chery J6T CSH di sini.",
    "kilometer": "0 km",
    "status": "Coming Soon",
    "tagline": "Nikmati performa berkendara maksimal dalam balutan gaya yang elegan. Temukan info spesifikasi, fitur dan harga Chery J6T CSH di sini.",
    "category": "SUV",
    "powertrain": "CSH",
    "bodyType": "SUV",
    "priceStarting": "Segera Hadir",
    "formattedPrice": "Harga Segera Diumumkan",
    "rawPrice": 0,
    "engine": "Comprehensive Mileage 1000km",
    "power": "N/A",
    "transmissionType": "Automatic",
    "transmissionDetail": "Automatic",
    "fuelType": "Hybrid",
    "seats": 5,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/j6t%20csh/thumbnail-j6t-csh.webp",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/j6t%20csh/thumbnail-j6t-csh.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/j6t-csh/car-front-thumbnail.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/j6t-csh/comfort-tech/12%20Speakers%20with%2015%20Head%20Unit.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/j6t-csh/comfort-tech/540%20Camera.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/j6t-csh/comfort-tech/Multi-color%20Ambient%20Light.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/j6t-csh/comfort-tech/Multi-dimensional%20Rubik%20Cube%20Large%20Space%20Cockpit.webp"
    ],
    "badge": {
      "text": "SEGERA HADIR",
      "type": "promo"
    },
    "features": [
      "Comprehensive Mileage 1000km",
      "Ground clearance 220 mm",
      "Turn Pro Function",
      "15 ADAS",
      "6 Airbags",
      "Aluminum Body",
      "Protective Armor with Sandwich Structure"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  },
  {
    "id": "j6",
    "name": "J6",
    "trim": "J6T IWD",
    "model": "J6",
    "brand": "Chery",
    "year": "2026",
    "color": "White Howlite",
    "description": "Nikmati performa berkendara maksimal dalam balutan gaya yang elegan. Temukan info spesifikasi, fitur dan harga Chery J6 di sini.",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Teknologi Baterai",
    "category": "EV",
    "powertrain": "BEV",
    "bodyType": "EV",
    "priceStarting": "Rp 565.5 Jt",
    "formattedPrice": "Rp 565.500.000",
    "rawPrice": 565500000,
    "engine": "Baterai LFP",
    "power": "N/A",
    "transmissionType": "Automatic",
    "transmissionDetail": "Automatic",
    "fuelType": "Listrik",
    "seats": 5,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/J6.png",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/J6.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/omoda/product-types/j6/j6-front-thumbnail.png"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Baterai LFP",
      "Panjang 4406 mm",
      "AWD",
      "AKSELERASI: 6,5 detik",
      "TOP SPEED: 150 Km/h",
      "WHEELBASE: 2715 mm",
      "TORSI: 385 Nm",
      "69.77 kWh",
      "418 Km",
      "Spacious Cabin & Premium Material",
      "Aesthetic Design Interior",
      "Intelligent Voice Assistant",
      "Electric Panoramic Sunroof",
      "Intelligent Car Key",
      "6 Airbag",
      "Rangka Kemudi Elektrik",
      "Suspensi H-Arm Aluminium",
      "Sistem Keamanan Baterai Maksimal",
      "Kubus Rubik Multi Dimensional (35 Ruang Penyimpanan)",
      "Rangka Aluminum Alloy"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia",
      "range": "418 km"
    },
    "battery": "69 kWh",
    "range": "418 km"
  },
  {
    "id": "tiggo-9-csh",
    "name": "TIGGO 9 CSH",
    "trim": "TIGGO 9 CSH AWD",
    "model": "TIGGO 9 CSH",
    "brand": "Chery",
    "year": "2026",
    "color": "Starway White",
    "description": "Selangkah lebih maju bersama Tiggo 9 CSH. Nikmati performa super hybrid, kenyamanan luar biasa, fitur cerdas, dan keamanan komprehensif.",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Selangkah lebih maju bersama Tiggo 9 CSH. Nikmati performa super hybrid, kenyamanan luar biasa, fitur cerdas, dan keamanan komprehensif.",
    "category": "SUV",
    "powertrain": "CSH",
    "bodyType": "SUV",
    "priceStarting": "Rp 749.9 Jt",
    "formattedPrice": "Rp 749.900.000",
    "rawPrice": 749900000,
    "engine": "1400+ Comprehensive Mileage",
    "power": "N/A",
    "transmissionType": "Automatic",
    "transmissionDetail": "3 Dedicated Hybrid Transmission (DHT)",
    "fuelType": "Hybrid",
    "seats": 5,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/tiggo-9-csh/thumbnail-tiggo-9-csh.webp",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/tiggo-9-csh/thumbnail-tiggo-9-csh.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-9-csh/thumbnail-front-image.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-9-csh/super-comfort/super-large-comfortable-7-seat.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-9-csh/super-comfort/8-ways-electric-driver-seat-with-4-way-lumbar-support.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-9-csh/super-comfort/4-ways-electric-wheel-steering.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-9-csh/super-comfort/Electric%20Panoramic%20Sunroof.jpg"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "1400+ Comprehensive Mileage",
      "Akselerasi 0 - 100 km/h dalam 5,4s",
      "Automatic Parking Assist",
      "PURE EV MILEAGE: 180 KM+",
      "COMPREHENSIVE MILEAGE: 1400+ KM",
      "ACCELERATION: 0-100 km/h 5,4s",
      "COMPREHENSIVE TORQUE (SYSTEM): 650 Nm",
      "Strength Body Structure",
      "17 ADAS",
      "10 Airbags",
      "Key: Keyless Entry",
      "Tyre: 20\" Aluminum rims",
      "Headlight: LED",
      "Four Exhaust Pipes: Available",
      "LCD Cluster: 10.25-inch",
      "Capacitive Touch Screen: 15.6-inch"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  },
  {
    "id": "tiggo-8-csh",
    "name": "TIGGO 8 CSH",
    "trim": "TIGGO 8 CSH FWD COMFORT",
    "model": "TIGGO 8 CSH",
    "brand": "Chery",
    "year": "2026",
    "color": "Aurora Green",
    "description": "Nikmati kombinasi sempurna performa dan kenyamanan bersama TIGGO 8 CSH. Temukan fitur-fitur canggih dan spesifikasi partner bertualang Anda di sini!",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Nikmati kombinasi sempurna performa dan kenyamanan bersama TIGGO 8 CSH. Temukan fitur-fitur canggih dan spesifikasi partner bertualang Anda di sini!",
    "category": "SUV",
    "powertrain": "CSH",
    "bodyType": "SUV",
    "priceStarting": "Rp 459.9 Jt",
    "formattedPrice": "Rp 459.900.000",
    "rawPrice": 459900000,
    "engine": "Jarak Tempuh EV 90 Km",
    "power": "N/A",
    "transmissionType": "Automatic",
    "transmissionDetail": "Dedicated Hybrid Transmission (1DHT)",
    "fuelType": "Hybrid",
    "seats": 7,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Tiggo%208%20CSH.png",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Tiggo%208%20CSH.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-8-csh/thumbnail-front-image-desktop.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-8-csh/best-comfort/super-large-comfortable-7-seater.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-8-csh/best-comfort/front-passenger-seat-massage.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-8-csh/best-comfort/ventilated-front-seat.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-8-csh/best-comfort/comfortable-chassis-optimize-vibration-reduction.webp"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Jarak Tempuh EV 90 Km",
      "Jarak Tempuh Hybrid 1300+ Km",
      "14 ADAS",
      "PURE EV MILEAGE: 90 Km",
      "COMPREHENSIVE MILEAGE: 1300+ Km",
      "POWER: 204 PS",
      "TORQUE: 310 Nm",
      "Bodi high-strength terintegrasi dengan T1X platform",
      "10 Airbags",
      "14 Fungsi ADAS",
      "Perlindungan baterai collision resistant armor",
      "Battery High Voltage Cutoff within 2ms against Collision",
      "Baterai dengan perlindungan anti air IP68"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  },
  {
    "id": "tiggo-8-pro-max",
    "name": "TIGGO 8 PRO MAX",
    "trim": "TIGGO 8 PRO MAX FWD",
    "model": "TIGGO 8 PRO MAX",
    "brand": "Chery",
    "year": "2026",
    "color": "Black Platinum",
    "description": "Review mobil SUV Chery TIGGO 8 PRO MAX 2024, dari interior, warna, spesifikasi dan harga dengan teknologi modern yang canggih, sporty dan stylish",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Review mobil SUV Chery TIGGO 8 PRO MAX 2024, dari interior, warna, spesifikasi dan harga dengan teknologi modern yang canggih, sporty dan stylish",
    "category": "SUV",
    "powertrain": "ICE",
    "bodyType": "SUV",
    "priceStarting": "Rp 578.5 Jt",
    "formattedPrice": "Rp 578.500.000",
    "rawPrice": 578500000,
    "engine": "Mesin 2,0 T",
    "power": "N/A",
    "transmissionType": "Automatic",
    "transmissionDetail": "7 DCT with Electronic Shifter",
    "fuelType": "Bensin",
    "seats": 7,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Tiggo-8-Pro-Max.png",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Tiggo-8-Pro-Max.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-8-pro-max/thumbnail-front-image-desktop.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-8-pro-max/photos/tiggo-photo-1.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-8-pro-max/photos/tiggo-photo-2.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-8-pro-max/photos/tiggo-photo-3.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-8-pro-max/photos/tiggo-photo-4.webp"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Mesin 2,0 T",
      "Panjang 4720 mm",
      "AWD",
      "Mesin: 2.0 TGDI",
      "Panjang: 4720 mm",
      "Output Tenaga: 187 kW",
      "Torsi: 390 Nm",
      "10 Airbags System Provides All-Round Protection (AWD)",
      "12 ADAS (Advanced Driver Assistance System)",
      "Intelligent Embedded Driving Recorder",
      "Key: Keyless Entry and Push Button",
      "Headlight: Auto LED Headlight with Welcome Home Function",
      "Tyre: 19 Inch (235 / 50 R19)",
      "Rear Parking Sensors: Available",
      "Color Interior: Brown",
      "HD Panoramic Camera: 540 HD Panoramic Camera",
      "Head-unit: 24,6 Inch Curved Dual Screed",
      "A/C: Dual Zone + 2nd Row + 3rd Row",
      "Speakers: 8"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  },
  {
    "id": "tiggo-8",
    "name": "TIGGO 8",
    "trim": "TIGGO 8 COMFORT",
    "model": "TIGGO 8",
    "brand": "Chery",
    "year": "2026",
    "color": "White Howlite",
    "description": "Review mobil SUV Chery TIGGO 8 2024, dari interior, warna, spesifikasi dan harga dengan teknologi modern yang stylish, sporty & aesthetic",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Review mobil SUV Chery TIGGO 8 2024, dari interior, warna, spesifikasi dan harga dengan teknologi modern yang stylish, sporty & aesthetic",
    "category": "SUV",
    "powertrain": "ICE",
    "bodyType": "SUV",
    "priceStarting": "Rp 362.5 Jt",
    "formattedPrice": "Rp 362.500.000",
    "rawPrice": 362500000,
    "engine": "Mesin Turbo 1.6",
    "power": "N/A",
    "transmissionType": "Automatic",
    "transmissionDetail": "7 DCT with Electronic Shifter",
    "fuelType": "Bensin",
    "seats": 7,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Tiggo%208.png",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Tiggo%208.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-8/thumbnail-front-image-desktop.png"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Mesin Turbo 1.6",
      "Panjang 4722 mm",
      "FWD",
      "Mesin: 1.6 TGDI",
      "Panjang: 4722 mm",
      "Tenaga Maksimum: 186 PS",
      "Torsi: 290 Nm",
      "6 Airbag",
      "ADAS (Advanced Driver Assistance System)",
      "Key: Keyless Entry and Push Button Start",
      "Headlight: Auto LED Headlight with Welcome Home Function",
      "Tyre: 18 Inch (235/55 R18)",
      "Parking & Breaking: Disc Brake with EPS",
      "Rear Parking Sensors: Available",
      "Exterior Door Mirror with Illuminated Light",
      "Exterior Mirror Position Memory",
      "Electric Sunroof",
      "Color Interior: Black",
      "HD Panoramic Camera: 360 HD Panoramic Camera",
      "Head Unit: 10.25 inch HD DIsplay",
      "Speakers: 8 Sony Speakers",
      "A/C: N95 Filter Dual Zone + 2nd Row",
      "Main Visor Make-up Mirror with Light"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  },
  {
    "id": "tiggo-cross-csh-hybrid",
    "name": "TIGGO CROSS CSH",
    "trim": "TIGGO CROSS CSH Hybrid",
    "model": "TIGGO CROSS CSH",
    "brand": "Chery",
    "year": "2026",
    "color": "Black Platinum",
    "description": "Rasakan masa depan berkendara dengan Chery TIGGO CROSS CSH Hybrid. Lebih nyaman, sangat cepat, dan dilengkapi fitur cerdas untuk perjalanan lebih pintar.",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Rasakan masa depan berkendara dengan Chery TIGGO CROSS CSH Hybrid. Lebih nyaman, sangat cepat, dan dilengkapi fitur cerdas untuk perjalanan lebih pintar.",
    "category": "SUV",
    "powertrain": "CSH",
    "bodyType": "SUV",
    "priceStarting": "Rp 339.8 Jt",
    "formattedPrice": "Rp 339.800.000",
    "rawPrice": 339800000,
    "engine": "1,5L DHE",
    "power": "204 PS / 310 Nm",
    "transmissionType": "Automatic",
    "transmissionDetail": "Dedicated Hybrid Transmission (DHT)",
    "fuelType": "Hybrid",
    "seats": 5,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Tiggo-Cross-CSH.png",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Tiggo-Cross-CSH.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-cross-csh/thumbnail-front-image.png"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Konsumsi Bahan Bakar 1:25",
      "Akselerasi 0 - 100 km/h dalam 8s",
      "17 ADAS",
      "MESIN: 1,5L DHE",
      "PANJANG: 4330 MM",
      "OUTPUT TENAGA: 204 PS",
      "TORSI: 310 Nm",
      "17 ADAS Function",
      "High-rigidity Vehicle Body",
      "Aluminium Alloy Front Anti-Collision Beam",
      "Surrounding 7 Airbags for Safety Protection",
      "ANCAP Five-star Collision Safety",
      "Key: Keyless Entry and Push Button Start",
      "Tyre: 17\" Shield Alloy",
      "Headlight: LED",
      "Energy Crystal Outline Lamp: Available",
      "Color Interior: Black Color",
      "Speakers: 6"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  },
  {
    "id": "tiggo-cross-sport",
    "name": "TIGGO CROSS SPORT",
    "trim": "TIGGO CROSS SPORT",
    "model": "TIGGO CROSS SPORT",
    "brand": "Chery",
    "year": "2026",
    "color": "Black Platinum",
    "description": "Bebaskan perjalanan Anda dengan SUV yang dirancang untuk sensasi. Dilengkapi teknologi pintar, kenyamanan mewah, dan keamanan mutakhir untuk ketenangan pikiran.",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Bebaskan perjalanan Anda dengan SUV yang dirancang untuk sensasi. Dilengkapi teknologi pintar, kenyamanan mewah, dan keamanan mutakhir untuk ketenangan pikiran.",
    "category": "SUV",
    "powertrain": "ICE",
    "bodyType": "SUV",
    "priceStarting": "Rp 304.9 Jt",
    "formattedPrice": "Rp 304.900.000",
    "rawPrice": 304900000,
    "engine": "1,5T DCT",
    "power": "147 PS / 210 Nm",
    "transmissionType": "Automatic",
    "transmissionDetail": "DCT",
    "fuelType": "Bensin",
    "seats": 5,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-cross-sport/thumbnail-home-tiggo-cross-sport.webp",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-cross-sport/thumbnail-home-tiggo-cross-sport.webp"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Mesin 1,5T DCT",
      "Panjang 4330 MM",
      "Wheelbase 2610 MM",
      "MESIN: 1,5T DCT",
      "PANJANG: 4318 MM",
      "OUTPUT TENAGA: 147 PS",
      "TORSI: 210 Nm",
      "7 ADAS (Advanced Driver Assistance System)",
      "Color Interior: Black Color",
      "Speakers: 6",
      "Super Wide 20.5 inch HD Display: Available",
      "Key: Keyless Entry and Push Button Start",
      "Tyre: 18\" Dual Sport Velg",
      "Headlight: LED"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  },
  {
    "id": "tiggo-cross",
    "name": "TIGGO CROSS",
    "trim": "TIGGO CROSS COMFORT",
    "model": "TIGGO CROSS",
    "brand": "Chery",
    "year": "2026",
    "color": "Red Ruby",
    "description": "Hadapi tiap petualangan dengan performa, kenyamanan dan ketangguhan maksimal dari TIGGO Cross. Temukan spesifkasi fitur dan harganya di sini.",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Hadapi tiap petualangan dengan performa, kenyamanan dan ketangguhan maksimal dari TIGGO Cross. Temukan spesifkasi fitur dan harganya di sini.",
    "category": "SUV",
    "powertrain": "ICE",
    "bodyType": "SUV",
    "priceStarting": "Rp 264.5 Jt",
    "formattedPrice": "Rp 264.500.000",
    "rawPrice": 264500000,
    "engine": "1,5L CVT",
    "power": "116 PS / 138 Nm",
    "transmissionType": "Automatic",
    "transmissionDetail": "CVT",
    "fuelType": "Bensin",
    "seats": 5,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/main-images/Tiggo%20Cross.png",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/main-images/Tiggo%20Cross.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/tiggo/product-types/tiggo-cross/thumbnail-front-image-desktop.webp"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Mesin 1,5L CVT",
      "Panjang 4320 MM",
      "Wheelbase 2630 MM",
      "MESIN: 1,5L CVT",
      "PANJANG: 4320 MM",
      "OUTPUT TENAGA: 116 PS",
      "TORSI: 138 Nm",
      "6 Airbags",
      "15 ADAS (Advanced Driver Assistance Systems)",
      "Bodi Baja 60%",
      "Key: Keyless Entry and Push Button Start",
      "Tyre: 215 / 65 R16 Alloy Wheel",
      "Headlight: LED",
      "Energy Crystal Outline Lamp: Available",
      "Color Interior: Black Color",
      "Speakers: 4"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  },
  {
    "id": "chery-e5",
    "name": "CHERY E5",
    "trim": "CHERY E5 PURE",
    "model": "CHERY E5",
    "brand": "Chery",
    "year": "2026",
    "color": "Green Jade",
    "description": "Review mobil listrik futuristik para urban, CHERY E5, dari warna two one, interior dan spesifikasi berteknologi high-level!",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Teknologi Baterai Next-Gen",
    "category": "EV",
    "powertrain": "BEV",
    "bodyType": "EV",
    "priceStarting": "Rp 379.9 Jt",
    "formattedPrice": "Rp 379.900.000",
    "rawPrice": 379900000,
    "engine": "Baterai LFP ",
    "power": "201 HP / 340 Nm",
    "transmissionType": "Automatic",
    "transmissionDetail": "Automatic",
    "fuelType": "Listrik",
    "seats": 5,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/omoda/product-types/omoda-e5/Chery%20E5.png",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/omoda/product-types/omoda-e5/Chery%20E5.png"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Baterai LFP",
      "Panjang 4424 mm",
      "Wheelbase 2630 mm",
      "AKSELERASI: 7,2 Sec",
      "KECEPATAN MAKSIMAL: 175 Km/h",
      "OUTPUT TENAGA: 201 HP",
      "TORSI: 340 Nm",
      "61,06 kWh",
      "430 Km",
      "Energi Berkelanjutan",
      "Perawatan Mudah",
      "Solusi Ringan Pajak",
      "Didukung Program Pemerintah",
      "Garansi Seumur Hidup",
      "Struktur Super Kuat",
      "ADAS (Advanced Driver Assistance System)",
      "Engine Immobilizer",
      "Chip Qualcomm 8155",
      "6 Ring Air Bag",
      "ISOFIX",
      "Sertifikasi IP68",
      "Dimension: 4424x1830x1588 mm",
      "Ground Clearance: 190 mm (Unladen) / 131 mm (Laden)",
      "Wheel Base: 2630 mm"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia",
      "range": "430 km"
    },
    "battery": "61 kWh",
    "range": "430 km"
  },
  {
    "id": "chery-c5-csh",
    "name": "CHERY C5 CSH",
    "trim": "CHERY C5 CSH",
    "model": "CHERY C5 CSH",
    "brand": "Chery",
    "year": "2026",
    "color": "Two Tone, White Howlite Black",
    "description": "Nikmati sensasi akselerasi 0-100km/jam dalam 7,7 detik bersama Chery C5 CSH. Temukan teknologi Super Hybrid dan desain futuristik Anda di sini!",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "AKSELERASI MAKSIMUM",
    "category": "SUV",
    "powertrain": "CSH",
    "bodyType": "SUV",
    "priceStarting": "Rp 409.9 Jt",
    "formattedPrice": "Rp 409.900.000",
    "rawPrice": 409900000,
    "engine": "1,5 TGDI",
    "power": "N/A",
    "transmissionType": "Automatic",
    "transmissionDetail": "Automatic",
    "fuelType": "Hybrid",
    "seats": 5,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/c5-csh/thumbnails/chery-c5-csh-fix.webp",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/c5-csh/thumbnails/chery-c5-csh-fix.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/c5-csh/thumbnails/car-front-thumbnail.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/c5-csh/exteriors/new-wheel-design.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/c5-csh/exteriors/new-roof-rack.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/c5-csh/exteriors/new-interior-design.webp",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/csh/c5-csh/exteriors/new-csh-emblem.webp"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Comprehensive Mileage 1000km+",
      "Konsumsi Bahan Bakar 20,4 km/L (NEDC)",
      "Akselerasi 0-100 km di 7,7s",
      "MESIN: 1,5 TGDI",
      "COMPREHENSIVE MILEAGE: 1000 Km+",
      "TENAGA: 204 PS",
      "TORSI: 310 Nm",
      "7 Airbag",
      "14 ADAS Safety Items"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  },
  {
    "id": "chery-c5",
    "name": "CHERY C5",
    "trim": "CHERY C5 Z",
    "model": "CHERY C5",
    "brand": "Chery",
    "year": "2026",
    "color": "Black Platinum",
    "description": "Temukan desain mutakhir dan inovasi dari Chery C5. Rasakan performa dan gaya futuristik untuk perjalanan harian Anda. Futuristic Reborn dimulai di sini!",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Temukan desain mutakhir dan inovasi dari Chery C5. Rasakan performa dan gaya futuristik untuk perjalanan harian Anda. Futuristic Reborn dimulai di sini!",
    "category": "SEDAN",
    "powertrain": "ICE",
    "bodyType": "SEDAN",
    "priceStarting": "Rp 324.9 Jt",
    "formattedPrice": "Rp 324.900.000",
    "rawPrice": 324900000,
    "engine": "1,5L TCI",
    "power": "145 HP / 230 Nm",
    "transmissionType": "Automatic",
    "transmissionDetail": "6 Wet Speed DCT with Electronic Shifter",
    "fuelType": "Bensin",
    "seats": 5,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Chery%20C5.png",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Chery%20C5.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/omoda/product-types/c5/c5-front-thumbnail.png"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Mesin 1,5L TCI",
      "Panjang 4400 MM",
      "10 ADAS",
      "MESIN: 1,5L TCI",
      "PANJANG: 4400 MM",
      "OUTPUT TENAGA: 145 HP",
      "TORSI: 230 Nm",
      "6 WET DCT Transmission",
      "Suspensi McPherson Depan & Suspensi Multi-link Belakang",
      "10 ADAS (Advanced Driver Assistance System)",
      "1,5 Turbo Charged Engine",
      "6 Airbags",
      "Tyre: R18 inch Black Shadow Blade Alloy",
      "Keyless Entry and Headlamp Remote: Auto",
      "LED Daytime Running Lamp & LED Headlight: Available",
      "Speakers: 6 Speakers",
      "Seat Cover: Faux Leather Combine with Fabric",
      "Parking & Brake: EPB with Autohold , Front Ventilated Disc Brakes and Rear Disc Brakes",
      "Airbag: 6 Airbags (Front, Side, Curtain)"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  },
  {
    "id": "omoda-5-gt",
    "name": "OMODA 5 GT",
    "trim": "OMODA 5 GT FWD",
    "model": "OMODA 5 GT",
    "brand": "Chery",
    "year": "2026",
    "color": "White Howlite Black",
    "description": "Review mobil Chery SUV OMODA 5 GT, dari interior, warna dan spesifikasi dengan mesin performa tinggi dan teknologi mutakhir!",
    "kilometer": "0 km",
    "status": "Tersedia",
    "tagline": "Review mobil Chery SUV OMODA 5 GT, dari interior, warna dan spesifikasi dengan mesin performa tinggi dan teknologi mutakhir!",
    "category": "SUV",
    "powertrain": "ICE",
    "bodyType": "SUV",
    "priceStarting": "Rp 458.8 Jt",
    "formattedPrice": "Rp 458.800.000",
    "rawPrice": 458800000,
    "engine": "1,6 TGDI",
    "power": "197 HP / 290 Nm",
    "transmissionType": "Automatic",
    "transmissionDetail": "7 DCT with Electronic Shifter",
    "fuelType": "Bensin",
    "seats": 5,
    "image": "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Omoda-5-GT-AWD.png",
    "gallery": [
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/product-list-nov/Omoda-5-GT-AWD.png",
      "https://cheryidn.sgp1.cdn.digitaloceanspaces.com/prod/product-models/omoda/product-types/omoda-5-gt/thumbnail-front-image-desktop.webp"
    ],
    "badge": {
      "text": "TERSEDIA",
      "type": "ready"
    },
    "features": [
      "Mesin 1,6L TGDI",
      "Panjang 4400 mm",
      "Wheelbase 2630 mm",
      "MESIN: 1,6 TGDI",
      "PANJANG: 4400 mm",
      "OUTPUT TENAGA: 197 HP",
      "TORSI: 290 Nm",
      "6 Ring Airbag",
      "ADAS (Advanced Driver Assistance System)",
      "Anti-lock Braking System (ABS): Available"
    ],
    "specs": {
      "warranty": "Garansi resmi Chery Indonesia"
    }
  }
];
