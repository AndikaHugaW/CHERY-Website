export interface SpecItem {
  name: string;
  subName?: string;
  values: Record<string, string>;
}

export interface SpecCategory {
  id: string;
  title: string;
  items: SpecItem[];
}

export interface CarSpecification {
  carId: string;
  carName: string;
  tagline: string;
  variants: string[];
  categories: SpecCategory[];
  dimensionDiagram?: {
    lengthWidthHeight: string;
    wheelbase: string;
    tread: string;
    overhang: string;
    groundClearance: string;
    cargoCapacity: string;
  };
}

// Generated from https://chery.co.id CMS (2026-11-20)

export const CAR_SPECIFICATIONS: Record<string, CarSpecification> = {
  "chery-q": {
    "carId": "chery-q",
    "carName": "CHERY Q",
    "tagline": "Prebook CHERY Q di E-Commerce hari ini untuk pengalaman berbelanja yang lancar!",
    "variants": [
      "CHERY Q PURE",
      "CHERY Q RIZZ"
    ],
    "categories": []
  },
  "j6t-csh": {
    "carId": "j6t-csh",
    "carName": "J6T CSH",
    "tagline": "Nikmati performa berkendara maksimal dalam balutan gaya yang elegan. Temukan info spesifikasi, fitur dan harga Chery J6T CSH di sini.",
    "variants": [
      "J6T CSH"
    ],
    "categories": []
  },
  "j6": {
    "carId": "j6",
    "carName": "J6",
    "tagline": "Teknologi Baterai",
    "variants": [
      "J6T IWD",
      "J6T",
      "J6 IWD Phantom Edition",
      "J6 Phantom Edition",
      "J6 IWD",
      "J6"
    ],
    "categories": [
      {
        "id": "electric-car-feature",
        "title": "Electric Car Feature",
        "items": [
          {
            "name": "Vehicle",
            "values": {
              "J6 IWD Phantom Edition": "Electric Vehicle",
              "J6 Phantom Edition": "Electric Vehicle",
              "J6 IWD": "Electric Vehicle",
              "J6": "Electric Vehicle"
            }
          },
          {
            "name": "Battery Type",
            "values": {
              "J6 IWD Phantom Edition": "Lithium Iron Phospate Battery",
              "J6 Phantom Edition": "Lithium Iron Phospate Battery",
              "J6 IWD": "Lithium Iron Phospate Battery",
              "J6": "Lithium Iron Phospate Battery"
            }
          },
          {
            "name": "Battery Capacity - Distance (Km)",
            "values": {
              "J6 IWD Phantom Edition": "69.77 kwh - 418 Km",
              "J6 Phantom Edition": "65,59 kWh - 426 Km",
              "J6 IWD": "69.77 kwh - 418 Km",
              "J6": "65,59 kWh - 426 Km"
            }
          },
          {
            "name": "Total Motor Horsepower (Ps)",
            "values": {
              "J6 IWD Phantom Edition": "279 Ps",
              "J6 Phantom Edition": "184 Ps",
              "J6 IWD": "279 Ps",
              "J6": "184 Ps"
            }
          },
          {
            "name": "Max Torque (Nm)",
            "values": {
              "J6 IWD Phantom Edition": "165/220 Nm",
              "J6 Phantom Edition": "220 Nm",
              "J6 IWD": "165/220 Nm",
              "J6": "220 Nm"
            }
          },
          {
            "name": "Acceleration 0-100 Km/h",
            "values": {
              "J6 IWD Phantom Edition": "6,5 seconds",
              "J6 Phantom Edition": "10,5 seconds",
              "J6 IWD": "6,5 seconds",
              "J6": "10,5 seconds"
            }
          },
          {
            "name": "NEDC 100Km Power Consumption",
            "values": {
              "J6 IWD Phantom Edition": "19 kWh/100Km",
              "J6 Phantom Edition": "17,9 kWh/100Km",
              "J6 IWD": "19 kWh/100Km",
              "J6": "17,9 kWh/100Km"
            }
          },
          {
            "name": "Ultra Fast Charging Battery",
            "values": {
              "J6 IWD Phantom Edition": "30% - 80% in 30 minutes",
              "J6 Phantom Edition": "30% - 80% in 30 minutes",
              "J6 IWD": "30% - 80% in 30 minutes",
              "J6": "30% - 80% in 30 minutes"
            }
          },
          {
            "name": "V2L",
            "values": {
              "J6 IWD Phantom Edition": "3.3 kW",
              "J6 Phantom Edition": "3.3 kW",
              "J6 IWD": "3.3 kW",
              "J6": "3.3 kW"
            }
          },
          {
            "name": "Processor",
            "values": {
              "J6 IWD Phantom Edition": "Snapdragon 8155",
              "J6 Phantom Edition": "Snapdragon 8155",
              "J6 IWD": "Snapdragon 8155",
              "J6": "Snapdragon 8155"
            }
          },
          {
            "name": "Driving Mode",
            "values": {
              "J6 IWD Phantom Edition": "Eco, Normal, Sports, All Road, Slippery, Sand, Muddy, Bumpy, Custom",
              "J6 Phantom Edition": "Eco, Normal, Sport + Custom",
              "J6 IWD": "Eco, Normal, Sports, All Road, Slippery, Sand, Muddy, Bumpy, Custom",
              "J6": "Eco, Normal, Sport + Custom"
            }
          }
        ]
      },
      {
        "id": "exterior",
        "title": "Exterior",
        "items": [
          {
            "name": "Dimension",
            "values": {
              "J6 IWD Phantom Edition": "4406 x 1910 x 1715 mm",
              "J6 Phantom Edition": "4406 x 1910 x 1715 mm",
              "J6 IWD": "4406 x 1910 x 1715 mm",
              "J6": "4406 x 1910 x 1715 mm"
            }
          },
          {
            "name": "Ground Clearance",
            "values": {
              "J6 IWD Phantom Edition": "200 mm (No-Load) / 170 mm (Full-Load)",
              "J6 Phantom Edition": "200 mm (No-Load) / 170 mm (Full-Load)",
              "J6 IWD": "200 mm (No-Load) / 170 mm (Full-Load)",
              "J6": "200 mm (No-Load) / 170 mm (Full-Load)"
            }
          },
          {
            "name": "Wheelbase",
            "values": {
              "J6 IWD Phantom Edition": "2715 mm",
              "J6 Phantom Edition": "2715 mm",
              "J6 IWD": "2715 mm",
              "J6": "2715 mm"
            }
          },
          {
            "name": "Suspension",
            "values": {
              "J6 IWD Phantom Edition": "F:MacPherson Strut R:Multi-Link Suspension",
              "J6 Phantom Edition": "F:MacPherson Strut R:Multi-Link Suspension",
              "J6 IWD": "F:MacPherson Strut R:Multi-Link Suspension",
              "J6": "F:MacPherson Strut R:Multi-Link Suspension"
            }
          },
          {
            "name": "Parking & Brake",
            "values": {
              "J6 IWD Phantom Edition": "Front & Rear Disc EPB with Autohold",
              "J6 Phantom Edition": "Front & Rear Disc EPB with Autohold",
              "J6 IWD": "Front & Rear Disc EPB with Autohold",
              "J6": "Front & Rear Disc EPB with Autohold"
            }
          },
          {
            "name": "Tyre",
            "values": {
              "J6 IWD Phantom Edition": "225/55 R19 Futuristic Aluminium Velg",
              "J6 Phantom Edition": "225/60 R18",
              "J6 IWD": "225/55 R19 Futuristic Aluminium Velg",
              "J6": "225/60 R18"
            }
          },
          {
            "name": "Power Tailgate",
            "values": {
              "J6 IWD Phantom Edition": "Soft Closing",
              "J6 Phantom Edition": "Soft Closing",
              "J6 IWD": "Soft Closing",
              "J6": "Soft Closing"
            }
          },
          {
            "name": "Roof Rail",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Power Sunroof",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          }
        ]
      },
      {
        "id": "interior",
        "title": "Interior",
        "items": [
          {
            "name": "Interior Color Option",
            "values": {
              "J6 IWD Phantom Edition": "Green Black Oat Nature",
              "J6 Phantom Edition": "Green Black Oat Nature",
              "J6 IWD": "Green Black Oat Nature",
              "J6": "Green Black Oat Nature"
            }
          },
          {
            "name": "Interior Panel",
            "values": {
              "J6 IWD Phantom Edition": "Soft-Touch Interior Panel Combine with Gold style",
              "J6 Phantom Edition": "Soft-Touch Interior Panel Combine with Gold style",
              "J6 IWD": "Soft-Touch Interior Panel Combine with Gold style",
              "J6": "Soft-Touch Interior Panel Combine with Gold style"
            }
          },
          {
            "name": "Steering Tech",
            "values": {
              "J6 IWD Phantom Edition": "Electronic Power Steering with 4 Way Manual Adjustable",
              "J6 Phantom Edition": "Electronic Power Steering with 4 Way Manual Adjustable",
              "J6 IWD": "Electronic Power Steering with 4 Way Manual Adjustable",
              "J6": "Electronic Power Steering with 4 Way Manual Adjustable"
            }
          },
          {
            "name": "Steering Wheel Material",
            "values": {
              "J6 IWD Phantom Edition": "Leather Steering Wheel with Multi-Function Features",
              "J6 Phantom Edition": "Leather Steering Wheel with Multi-Function Features",
              "J6 IWD": "Leather Steering Wheel with Multi-Function Features",
              "J6": "Leather Steering Wheel with Multi-Function Features"
            }
          },
          {
            "name": "Seat",
            "values": {
              "J6 IWD Phantom Edition": "5 Seats (2+3)",
              "J6 Phantom Edition": "5 Seats (2+3)",
              "J6 IWD": "5 Seats (2+3)",
              "J6": "5 Seats (2+3)"
            }
          },
          {
            "name": "Driver Seat 6 Way Power Adjustment + Seat Memory",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Passenger Seat 4 Way Power Adjustment",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Leg Support",
            "values": {
              "J6 IWD Phantom Edition": "Driver and Passenger",
              "J6 Phantom Edition": "Driver Only",
              "J6 IWD": "Driver and Passenger",
              "J6": "Driver Only"
            }
          },
          {
            "name": "Seat Massage",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Not Available",
              "J6 IWD": "Available",
              "J6": "Not Available"
            }
          }
        ]
      },
      {
        "id": "light",
        "title": "Light",
        "items": [
          {
            "name": "Automatic LED Headlight with Leveling Switch Manual",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "High Beam Auto Adjust",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "LED DRL Daytime Running Lamp",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Rear Lamp & Center High Mounting Stop Light",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Emergency Stop Signal",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Follow-me Home Headlight Function",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Multi-Color Ambient ",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Welcoming Light Features",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          }
        ]
      },
      {
        "id": "safety",
        "title": "Safety",
        "items": [
          {
            "name": "Airbag",
            "values": {
              "J6 IWD Phantom Edition": "6 Airbags (Front Dual, Front Side, Side Curtain Airbags)",
              "J6 Phantom Edition": "6 Airbags (Front Dual, Front Side, Side Curtain Airbags)",
              "J6 IWD": "6 Airbags (Front Dual, Front Side, Side Curtain Airbags)",
              "J6": "6 Airbags (Front Dual, Front Side, Side Curtain Airbags)"
            }
          },
          {
            "name": "Body Frame",
            "values": {
              "J6 IWD Phantom Edition": "Unique All-aluminium Multi-cavity Cage Body",
              "J6 Phantom Edition": "Unique All-aluminium Multi-cavity Cage Body",
              "J6 IWD": "Unique All-aluminium Multi-cavity Cage Body",
              "J6": "Unique All-aluminium Multi-cavity Cage Body"
            }
          },
          {
            "name": "Engine Immobilizer ",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Vehicle Body Anti-Theft",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Miniature Circuit Breaker (MCB)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Battery Protection Under Car",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Collision Dampening Point",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Water Protection: IP68",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          }
        ]
      },
      {
        "id": "comfort-infotainment",
        "title": "Comfort & Infotainment",
        "items": [
          {
            "name": "Head-unit",
            "values": {
              "J6 IWD Phantom Edition": "15,6 inches Touch Screen",
              "J6 Phantom Edition": "15,6 inches Touch Screen",
              "J6 IWD": "15,6 inches Touch Screen",
              "J6": "15,6 inches Touch Screen"
            }
          },
          {
            "name": "Mobile Connect",
            "values": {
              "J6 IWD Phantom Edition": "Wireless Android Auto & Apple Carplay",
              "J6 Phantom Edition": "Wireless Android Auto & Apple Carplay",
              "J6 IWD": "Wireless Android Auto & Apple Carplay",
              "J6": "Wireless Android Auto & Apple Carplay"
            }
          },
          {
            "name": "Speakers",
            "values": {
              "J6 IWD Phantom Edition": "12 Infinity Speakers",
              "J6 Phantom Edition": "8 Pioneer Speakers",
              "J6 IWD": "12 Infinity Speakers",
              "J6": "8 Pioneer Speakers"
            }
          },
          {
            "name": "Two Zone A/C with PM2,5 Filter",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Smartphone Fast Wireless Charger 50W with Cooling & Reminder System",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Driver & Passenger Ventilated Seat (Front Row & Second Row)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Keyless Entry",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Intelligent Automatic Front Wiper",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Intelligent Voice Assistance",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          }
        ]
      },
      {
        "id": "driving-assistant",
        "title": "Driving Assistant",
        "items": [
          {
            "name": "540° HD Panoramic Camera",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Anti-lock Brake System",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Electric Brake Force Distribution (EBD)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Brake Assist System (BAS)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Electronic Stability Program (ESP) + Traction Control System (TCS)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Hill-start Assist Control (HAC) + Hill Descent Control (HDC)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Tyre Pressure Monitoring System (TPMS)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Auto Central Locking Door",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Rear Parking Sensor",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Parking Brake Deceleration Control System (CDP)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Vehicle Dynamic Control System (VDC)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Comfort Brake Function (CST)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Coordinated Regenerative Braking System (CRBS)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Tips for Fatigue Driving",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          }
        ]
      },
      {
        "id": "advanced-driving-assistant",
        "title": "Advanced Driving Assistant",
        "items": [
          {
            "name": "Adaptive Cruise Control (ACC)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Automatic Emergency Braking (AEB)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Blind Spot Detection (BSD)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Door Open Warning (DOW)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Drive Away Information (DAI)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Emergency Lane Keeping (ELK)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Forward Collision Warning (FCW)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Lane Departure Warning (LDW)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Lane Departure Prevention (LDP)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Low Speed Driving Reminder",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Parallel Assist (LCW)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Traffic Jam Assist (TJA)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Rear Collision Warning (RCW)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          },
          {
            "name": "Rear Cross Trafic Alert (RCTA)",
            "values": {
              "J6 IWD Phantom Edition": "Available",
              "J6 Phantom Edition": "Available",
              "J6 IWD": "Available",
              "J6": "Available"
            }
          }
        ]
      }
    ]
  },
  "tiggo-9-csh": {
    "carId": "tiggo-9-csh",
    "carName": "TIGGO 9 CSH",
    "tagline": "Selangkah lebih maju bersama Tiggo 9 CSH. Nikmati performa super hybrid, kenyamanan luar biasa, fitur cerdas, dan keamanan komprehensif.",
    "variants": [
      "TIGGO 9 CSH AWD"
    ],
    "categories": [
      {
        "id": "basic",
        "title": "Basic",
        "items": [
          {
            "name": "Dimensions",
            "values": {
              "TIGGO 9 CSH AWD": "4810 x 1925 x 1741 mm"
            }
          },
          {
            "name": "Wheel Base",
            "values": {
              "TIGGO 9 CSH AWD": "2800 mm"
            }
          },
          {
            "name": "Suspension",
            "values": {
              "TIGGO 9 CSH AWD": "Multi-link Independent Rear Suspension"
            }
          },
          {
            "name": "Engine Type",
            "values": {
              "TIGGO 9 CSH AWD": "1.5 TGDI Turbo Engine - 5th Gen. Dedicated Hybrid Engine"
            }
          },
          {
            "name": "Transmission",
            "values": {
              "TIGGO 9 CSH AWD": "3 Dedicated Hybrid Transmission (DHT)"
            }
          },
          {
            "name": "Engine Power",
            "values": {
              "TIGGO 9 CSH AWD": "143 PS"
            }
          },
          {
            "name": "Engine Torque",
            "values": {
              "TIGGO 9 CSH AWD": "215 Nm"
            }
          },
          {
            "name": "Drive Motor Power",
            "values": {
              "TIGGO 9 CSH AWD": "238 PS"
            }
          },
          {
            "name": "Drive Motor Torque",
            "values": {
              "TIGGO 9 CSH AWD": "310 Nm"
            }
          },
          {
            "name": "Comprehensive System Power",
            "values": {
              "TIGGO 9 CSH AWD": "395 PS"
            }
          },
          {
            "name": "Comprehensive System Torque",
            "values": {
              "TIGGO 9 CSH AWD": "650 Nm"
            }
          },
          {
            "name": "Battery Capacity",
            "values": {
              "TIGGO 9 CSH AWD": "34.46 kWh"
            }
          },
          {
            "name": "Endurance of Pure Electricity",
            "values": {
              "TIGGO 9 CSH AWD": "180 km+"
            }
          },
          {
            "name": "Comprehensive Endurance Mileage",
            "values": {
              "TIGGO 9 CSH AWD": "1400 km+"
            }
          },
          {
            "name": "Fuel Consumption by Battery Discharge",
            "values": {
              "TIGGO 9 CSH AWD": "19 km/L"
            }
          },
          {
            "name": "Acceleration Time",
            "values": {
              "TIGGO 9 CSH AWD": "5.4s"
            }
          },
          {
            "name": "Seat",
            "values": {
              "TIGGO 9 CSH AWD": "7"
            }
          }
        ]
      },
      {
        "id": "exterior",
        "title": "Exterior",
        "items": [
          {
            "name": "Key",
            "values": {
              "TIGGO 9 CSH AWD": "Keyless Entry"
            }
          },
          {
            "name": "Tyre",
            "values": {
              "TIGGO 9 CSH AWD": "20\" Aluminum rims"
            }
          },
          {
            "name": "Headlight",
            "values": {
              "TIGGO 9 CSH AWD": "LED"
            }
          },
          {
            "name": "Rearlight",
            "values": {
              "TIGGO 9 CSH AWD": "LED"
            }
          },
          {
            "name": "Four Exhaust Pipes",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Fuel Tank 70L",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Side rack/roof rail",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Shark-fin Antena",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Headlight delay off",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Ceremonial exterior lighting effect",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Load Roof Rail",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Auto wiper rain sensing",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Exterior mirror with illuminated lights",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          }
        ]
      },
      {
        "id": "interior",
        "title": "Interior",
        "items": [
          {
            "name": "LCD Cluster",
            "values": {
              "TIGGO 9 CSH AWD": "10.25-inch"
            }
          },
          {
            "name": "Capacitive Touch Screen",
            "values": {
              "TIGGO 9 CSH AWD": "15.6-inch"
            }
          },
          {
            "name": "Leather Steering with 4 Ways Electric Adjuster",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Sun Visor with Vanity Mirrors",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "All Automatic Power Window",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "A/C Two Zone with AQS, PM2.5/N95 Air Filter",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Negative ION Air Purification and Second Row Air Vent A/C",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Intelligent Voice Assistant",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "50W Fast Wireless Charging",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Bluetooth + Radio",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Voice Control (Indonesia)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Driver Power Seat (6 ways) + Power Lumbar Support (4 ways)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Front Passenger 4-Way Electric Seat",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Seat Ventilation (including heating function)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Seat Memory (driver seat)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Front Passenger Seat Massage + Power Leg Rest",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Armrest with Storage",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Multi-color Ambient Light",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Acoustic Laminated Front Glass",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Wireless Android Auto/Apple CarPlay",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "AR HUD Augmented Reality HUD",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "540 HD Camera",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          }
        ]
      },
      {
        "id": "safety",
        "title": "Safety",
        "items": [
          {
            "name": "Airbags",
            "values": {
              "TIGGO 9 CSH AWD": "10"
            }
          },
          {
            "name": "ISOFIX Interface",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Vehicle Body Anti-theft",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Mechanical Child Safety Lock",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Front Seat Belt Height Adjustable",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          }
        ]
      },
      {
        "id": "driving-assistant",
        "title": "Driving Assistant",
        "items": [
          {
            "name": "Electronic Parking Brake (EPB) + Auto Hold",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Anti-lock Braking System (ABS)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Electronic Brake Force Distribution (EBD)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Brake Assistant System (BAS) + Brake Override System (BOS)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Traction Control (TCS)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Emergency Brake Assist (EBA)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Hill-Start Assist Control (HAC) + Hill Descent Control (HDC)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Tyre Pressure Monitoring System (TPMS)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Auto Central Locking Door",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Cruise Control",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Traction Control System (FCS)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Seat Belt Not Alarmed",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Door / Trunk Not Closed Alarm",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Automatic Parking Assist (APA)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          }
        ]
      },
      {
        "id": "advanced-driving-assistant",
        "title": "Advanced Driving Assistant",
        "items": [
          {
            "name": "Lane Departure Warning (LDW)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Lane Departure Prevention (LDP)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Emergency Lane Keeping (ELK)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Blind Spot Detection (BSD)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Lane Changing Assistance (LCA)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Front Collision Warming (FCW)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Departure Ahead Inform (DA)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Rear Collision Warming (RCW)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Intelligent Evasion System (IES)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Alert (RCTA)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Braking (RCTB)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Door Opening Warning (DOW)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Intelligent Headlight Control (IHC)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Adaptive Cruise Control (ACC) in Full Speed Range",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Integrated Chase Assistance (ICA)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Traffic Jam Assistance (TJA)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          },
          {
            "name": "Automatic Emergency Braking (AEB)",
            "values": {
              "TIGGO 9 CSH AWD": "Available"
            }
          }
        ]
      }
    ],
    "dimensionDiagram": {
      "lengthWidthHeight": "-",
      "wheelbase": "2800 mm",
      "tread": "-",
      "overhang": "-",
      "groundClearance": "-",
      "cargoCapacity": "-"
    }
  },
  "tiggo-8-csh": {
    "carId": "tiggo-8-csh",
    "carName": "TIGGO 8 CSH",
    "tagline": "Nikmati kombinasi sempurna performa dan kenyamanan bersama TIGGO 8 CSH. Temukan fitur-fitur canggih dan spesifikasi partner bertualang Anda di sini!",
    "variants": [
      "TIGGO 8 CSH FWD COMFORT",
      "TIGGO 8 CSH FWD PREMIUM",
      "TIGGO 8 CSH AWD"
    ],
    "categories": [
      {
        "id": "basic",
        "title": "Basic",
        "items": [
          {
            "name": "Dimension",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "4725 x 1860 x 1705 mm"
            }
          },
          {
            "name": "Wheel base",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "2710 mm"
            }
          },
          {
            "name": "Suspension",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Independent suspension (Front & Rear)"
            }
          },
          {
            "name": "Parking & Braking",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Disc (Front & Rear) with ESP"
            }
          },
          {
            "name": "Engine Type",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "1,5T DHE"
            }
          },
          {
            "name": "Engine Power (kW)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "105/143PS (14.5 Compression Ratio)"
            }
          },
          {
            "name": "Engine Torque (N.m)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "215 (14.5 Compression Ratio)"
            }
          },
          {
            "name": "Drive Motor Power (kW)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "150/204 PS"
            }
          },
          {
            "name": "Drive Motor Torque (N.m)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "310"
            }
          },
          {
            "name": "Comprehensive System Power (kW)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "255/347 PS (14.5 Compression Ratio)"
            }
          },
          {
            "name": "Comprehensive System Torque (N.m)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "525 (14.5 Compression Ratio)"
            }
          },
          {
            "name": "Battery Capacity (kWh)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "18.3"
            }
          },
          {
            "name": "Endurance of Pure Electricity (Km)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "90+ Km"
            }
          },
          {
            "name": "Comprehensive Endurance Mileage (Km)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "1300+ Km"
            }
          },
          {
            "name": "Fuel Consumption by Battery Discharge",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "19+ Km/L"
            }
          },
          {
            "name": "Comprehensive Fuel Consumption (L/100km)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "76+ Km/L"
            }
          },
          {
            "name": "Acceleration Time (s)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "8.5s"
            }
          },
          {
            "name": "Hybrid System",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "1DHTa"
            }
          },
          {
            "name": "Transmission",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Dedicated Hybrid Transmission (1DHT)"
            }
          },
          {
            "name": "Seats",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "7"
            }
          }
        ]
      },
      {
        "id": "exterior",
        "title": "Exterior",
        "items": [
          {
            "name": "Key",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Keyless Entry"
            }
          },
          {
            "name": "Tyre",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "19\" aluminum alloy rims (235/50 R19)"
            }
          },
          {
            "name": "Headlight",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "LED"
            }
          },
          {
            "name": "Rearlight",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "LED"
            }
          },
          {
            "name": "Follow-me Home Lamp",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Auto Lighting",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Rear Parking Sensors",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Hidden Door Handle",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Shark-fin Antena",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Side Pedal",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Load Capacity Roof Rail",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Electric Panoramic Sunroof",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Induction Electric Tailgate (Key Sensing)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          }
        ]
      },
      {
        "id": "interior",
        "title": "Interior",
        "items": [
          {
            "name": "Color Interior",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Black Color"
            }
          },
          {
            "name": "Speakers",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "12"
            }
          },
          {
            "name": "10.25 LCD Cluster",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "15.6 Capacitive Touch Screen",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Leather Steering Wheel with Steering Tilt and Telescopic",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Sun Visor with Vanity Mirrors",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "All Automatic Power Window",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "A/C Two Zone with AQS, PM2.5/N95 Air Filter",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Negative ION Air Purification",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Second Row Air Vent A/C",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Intelligent Voice Assistant",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Driver Power Seat (6 ways) + Power lumbar support (4 ways)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Front Passenger 4-way Electric Seat",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Seat Ventilation",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Seat Memory (Driver Seat)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Seat Massage",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Armrest with Storage",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Multi-color Ambient Light",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Front Silent Glass",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Mobile Connect Android Auto / Carplay",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "AR HUD Augmented Reality HUD",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "540° HD Camera",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Front Passenger Seat massage + Power Leg Rest",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          }
        ]
      },
      {
        "id": "safety",
        "title": "Safety",
        "items": [
          {
            "name": "Airbags",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "10"
            }
          },
          {
            "name": "ISOFIX",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Vehicle Body Anti-theft",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          }
        ]
      },
      {
        "id": "driving-assistant",
        "title": "Driving Assistant",
        "items": [
          {
            "name": "Electronic Parking Brake (EPB) + Autohold",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Electronic Brake Force Distribution (EBD)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Brake Assistant System (BAS) + Brake Overide System (BOS)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Electronic Stability Program (ESP)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Hill-start Assist Control (HAC) + Hill Down Control (HDC)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Traction Control (TCS)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Tyre Pressure Monitoring System (TPMS)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Auto Central Locking Door",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Cruise Control",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Anti-lock Braking System (ABS)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Emergency Brake Assist (EBA)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          }
        ]
      },
      {
        "id": "advanced-driving-assistant",
        "title": "Advanced Driving Assistant",
        "items": [
          {
            "name": "Lane Departure Warning (LDW)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Lane Keeping Assist (LKA)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Lane Departure Prevention (LDP)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Traffic Jam Assist (TJA)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Integrated Cruise Assist (ICA)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Intelligent High-beam Control Headlamp (IHC)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Adaptive Cruise Control (ACC)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Front Collision Warning (FCW)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Autonomous Emergency Braking (AEB)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Automatic Emergency Braking System (AEBS)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Emergency Lane Keeping (ELK)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Blind Spot Detection (BSD)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Alert (RCTA)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          },
          {
            "name": "Door Opening Warning (DOW)",
            "values": {
              "TIGGO 8 CSH FWD PREMIUM": "Available"
            }
          }
        ]
      }
    ]
  },
  "tiggo-8-pro-max": {
    "carId": "tiggo-8-pro-max",
    "carName": "TIGGO 8 PRO MAX",
    "tagline": "Review mobil SUV Chery TIGGO 8 PRO MAX 2024, dari interior, warna, spesifikasi dan harga dengan teknologi modern yang canggih, sporty dan stylish",
    "variants": [
      "TIGGO 8 PRO MAX FWD",
      "TIGGO 8 PRO MAX AWD"
    ],
    "categories": [
      {
        "id": "basic",
        "title": "Basic",
        "items": [
          {
            "name": "Dimension",
            "values": {
              "TIGGO 8 PRO MAX FWD": "4720 x 1860 x 1705 mm",
              "TIGGO 8 PRO MAX AWD": "4720 x 1860 x 1705 mm"
            }
          },
          {
            "name": "Wheel Base",
            "values": {
              "TIGGO 8 PRO MAX FWD": "2710 mm\t",
              "TIGGO 8 PRO MAX AWD": "2710 mm"
            }
          },
          {
            "name": "Suspension",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Freestanding Rear Suspension",
              "TIGGO 8 PRO MAX AWD": "Freestanding Rear Suspension"
            }
          },
          {
            "name": "Parking & Breaking",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Disc Brake with EPS",
              "TIGGO 8 PRO MAX AWD": "Disc Brake with EPS"
            }
          },
          {
            "name": "Engine Type",
            "values": {
              "TIGGO 8 PRO MAX FWD": "2.0 TGDI Engine",
              "TIGGO 8 PRO MAX AWD": "2.0 TGDI Engine"
            }
          },
          {
            "name": "Maximum Power (PS) -- Maximum Torque (Nm)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "187 kW -- 390 Nm",
              "TIGGO 8 PRO MAX AWD": "187 kW -- 390 Nm"
            }
          },
          {
            "name": "Transmission",
            "values": {
              "TIGGO 8 PRO MAX FWD": "7 DCT with Electronic Shifter",
              "TIGGO 8 PRO MAX AWD": "7 DCT with Electronic Shifter"
            }
          },
          {
            "name": "Seats",
            "values": {
              "TIGGO 8 PRO MAX FWD": "7",
              "TIGGO 8 PRO MAX AWD": "7"
            }
          }
        ]
      },
      {
        "id": "exterior",
        "title": "Exterior",
        "items": [
          {
            "name": "Key",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Keyless Entry and Push Button",
              "TIGGO 8 PRO MAX AWD": "Keyless Entry and Push Button"
            }
          },
          {
            "name": "Headlight",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Auto LED Headlight with Welcome Home Function",
              "TIGGO 8 PRO MAX AWD": "Auto LED Headlight with Welcome Home Function"
            }
          },
          {
            "name": "Tyre",
            "values": {
              "TIGGO 8 PRO MAX FWD": "19 Inch (235 / 50 R19)",
              "TIGGO 8 PRO MAX AWD": "19 Inch (235 / 50 R19)"
            }
          },
          {
            "name": "Rear Parking Sensors",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Load Capacity Rail",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Silent Glass",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Door Mirror Power Adjust + Door Mirror Heating",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Electric Sunroof",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Shark-fin Antena",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Auto Speed Adjust Front Wiper",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Exterior Door Mirror with Illuminated Light",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Exterior Mirror Position Memory",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Fog Lamp",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "-"
            }
          }
        ]
      },
      {
        "id": "interior",
        "title": "Interior",
        "items": [
          {
            "name": "Color Interior",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Brown",
              "TIGGO 8 PRO MAX AWD": "Brown"
            }
          },
          {
            "name": "HD Panoramic Camera",
            "values": {
              "TIGGO 8 PRO MAX FWD": "540 HD Panoramic Camera",
              "TIGGO 8 PRO MAX AWD": "540 HD Panoramic Camera"
            }
          },
          {
            "name": "Head-unit",
            "values": {
              "TIGGO 8 PRO MAX FWD": "24,6 Inch Curved Dual Screed",
              "TIGGO 8 PRO MAX AWD": "24,6 Inch Curved Dual Screed"
            }
          },
          {
            "name": "A/C",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Dual Zone + 2nd Row + 3rd Row",
              "TIGGO 8 PRO MAX AWD": "Dual Zone + 2nd Row + 3rd Row"
            }
          },
          {
            "name": "Speakers",
            "values": {
              "TIGGO 8 PRO MAX FWD": "8",
              "TIGGO 8 PRO MAX AWD": "10"
            }
          },
          {
            "name": "Leather Steering Wheel",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Intelligent Voice Assistant",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Auto Window with Anti Pinched System",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Mobile Connect Android Auto / Carplay",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Multi-color Ambient Light",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Electric Seat Adjustment",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Memory Seat Adjustment",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Panoramic Sunroof",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Armrest with Cooling Storage",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Ventilated Seat",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Boss Key Button",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "12.3 Dual Screen",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "50W Smartphone Wireless Charger",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Skylight Ambient Light",
            "values": {
              "TIGGO 8 PRO MAX FWD": "-",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Privacy Glass",
            "values": {
              "TIGGO 8 PRO MAX FWD": "-",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Fragrance System",
            "values": {
              "TIGGO 8 PRO MAX FWD": "-",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          }
        ]
      },
      {
        "id": "safety",
        "title": "Safety",
        "items": [
          {
            "name": "Airbags",
            "values": {
              "TIGGO 8 PRO MAX FWD": "9 airbags",
              "TIGGO 8 PRO MAX AWD": "10 airbags"
            }
          },
          {
            "name": "ISOFIX",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Vehicle Body Anti-Theft",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          }
        ]
      },
      {
        "id": "driving-assistant",
        "title": "Driving Assistant",
        "items": [
          {
            "name": "Anti-lock Braking System (ABS)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Electronic Brake Force Distribution (EBD)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Brake Assist System (BAS)+(BOS)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Electronic Stability Program (ESP)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Traction Control (TCS)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Emergency Brake Assist (EBA)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Hill-start Assist Control (HAC) + Hill Descent Control (HDC)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Tyre Pressure Monitoring System (TPMS)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Cruise Control",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "GPS Navigation",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Direct Monitoring System (DMS)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "-",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          }
        ]
      },
      {
        "id": "advance-driving-assistant",
        "title": "Advance Driving Assistant",
        "items": [
          {
            "name": "Lane Departure Warning (LDW)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Blind Spot Detection (BSD)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Adaptive Cruise Control (ACC)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Front Collision Warning (FCW)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Autonomous Emergency Braking (AEB)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Alert (RCTA)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Door Open Warning (DOW)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Traffic Sign Recognition (TSR)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Intelligent High-Beam Control (IHBA)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Lane Keeping Assist (LKA)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Traffic Jam Assist (TJA)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          },
          {
            "name": "Integrated Cruise Assist (ICA)",
            "values": {
              "TIGGO 8 PRO MAX FWD": "Available",
              "TIGGO 8 PRO MAX AWD": "Available"
            }
          }
        ]
      }
    ],
    "dimensionDiagram": {
      "lengthWidthHeight": "4720 x 1860 x 1705 mm",
      "wheelbase": "2710 mm\t",
      "tread": "-",
      "overhang": "-",
      "groundClearance": "-",
      "cargoCapacity": "Available"
    }
  },
  "tiggo-8": {
    "carId": "tiggo-8",
    "carName": "TIGGO 8",
    "tagline": "Review mobil SUV Chery TIGGO 8 2024, dari interior, warna, spesifikasi dan harga dengan teknologi modern yang stylish, sporty & aesthetic",
    "variants": [
      "TIGGO 8 COMFORT",
      "TIGGO 8 PREMIUM"
    ],
    "categories": [
      {
        "id": "basic",
        "title": "Basic",
        "items": [
          {
            "name": "Dimension",
            "values": {
              "TIGGO 8 COMFORT": "4722 x 1860 x 1705 mm",
              "TIGGO 8 PREMIUM": "4722 x 1860 x 1705 mm"
            }
          },
          {
            "name": "Wheel Base",
            "values": {
              "TIGGO 8 COMFORT": "2710 mm",
              "TIGGO 8 PREMIUM": "2710 mm"
            }
          },
          {
            "name": "Suspension",
            "values": {
              "TIGGO 8 COMFORT": "Front: MacPherson Independent Suspension / Rear: Independent Suspension",
              "TIGGO 8 PREMIUM": "Front: MacPherson Independent Suspension / Rear: Independent Suspension"
            }
          },
          {
            "name": "Parking & Breaking",
            "values": {
              "TIGGO 8 COMFORT": "Disc Brake with EPS",
              "TIGGO 8 PREMIUM": "Disc Brake with EPS"
            }
          },
          {
            "name": "Engine Type",
            "values": {
              "TIGGO 8 COMFORT": "1.6 TGDI Engine",
              "TIGGO 8 PREMIUM": "1.6 TGDI Engine"
            }
          },
          {
            "name": "Maximum Power - Maximum Torque",
            "values": {
              "TIGGO 8 COMFORT": "186 PS -- 290 Nm",
              "TIGGO 8 PREMIUM": "186 PS -- 290 Nm"
            }
          },
          {
            "name": "Transmission",
            "values": {
              "TIGGO 8 COMFORT": "7 DCT with Electronic Shifter",
              "TIGGO 8 PREMIUM": "7 DCT with Electronic Shifter"
            }
          },
          {
            "name": "Seats",
            "values": {
              "TIGGO 8 COMFORT": "7",
              "TIGGO 8 PREMIUM": "7"
            }
          }
        ]
      },
      {
        "id": "exterior",
        "title": "Exterior",
        "items": [
          {
            "name": "Key",
            "values": {
              "TIGGO 8 COMFORT": "Keyless Entry and Push Button Start",
              "TIGGO 8 PREMIUM": "Keyless Entry and Push Button Start"
            }
          },
          {
            "name": "Headlight",
            "values": {
              "TIGGO 8 COMFORT": "Auto LED Headlight with Welcome Home Function",
              "TIGGO 8 PREMIUM": "Auto LED Headlight with Welcome Home Function"
            }
          },
          {
            "name": "Tyre",
            "values": {
              "TIGGO 8 COMFORT": "18 Inch (235/55 R18)",
              "TIGGO 8 PREMIUM": "18 Inch (235/55 R18)"
            }
          },
          {
            "name": "Parking & Breaking",
            "values": {
              "TIGGO 8 COMFORT": "Disc Brake with EPS",
              "TIGGO 8 PREMIUM": "Disc Brake with EPS"
            }
          },
          {
            "name": "Rear Parking Sensors",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Load Capacity Rail",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Door Mirror Power Adjust + Door Mirror Heating",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Shark-fin Antenna",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Exterior Door Mirror with Illuminated Light",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Exterior Mirror Position Memory",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Electric Sunroof",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          }
        ]
      },
      {
        "id": "interior",
        "title": "Interior",
        "items": [
          {
            "name": "Color Interior",
            "values": {
              "TIGGO 8 COMFORT": "Black",
              "TIGGO 8 PREMIUM": "Black"
            }
          },
          {
            "name": "HD Panoramic Camera",
            "values": {
              "TIGGO 8 COMFORT": "360 HD Panoramic Camera",
              "TIGGO 8 PREMIUM": "360 HD Panoramic Camera"
            }
          },
          {
            "name": "Head Unit",
            "values": {
              "TIGGO 8 COMFORT": "10.25 inch HD DIsplay",
              "TIGGO 8 PREMIUM": "10.25 inch HD DIsplay"
            }
          },
          {
            "name": "Speakers",
            "values": {
              "TIGGO 8 COMFORT": "8 Sony Speakers",
              "TIGGO 8 PREMIUM": "8 Sony Speakers"
            }
          },
          {
            "name": "A/C",
            "values": {
              "TIGGO 8 COMFORT": "N95 Filter Dual Zone + 2nd Row",
              "TIGGO 8 PREMIUM": "N95 Filter Dual Zone + 2nd Row"
            }
          },
          {
            "name": "Leather Steering Wheel",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Intelligent Voice Assistant",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Auto Window with Anti Pinched System",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Mobil Contact Android Auto / Carplay",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Multi-color Ambient Light",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Armrest with Cooling Storage",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Electric Seat Adjustment",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Main Visor Make-up Mirror with Light",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Electric Sunshade",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Driver Seat with Welcome Function",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Memory Seat Adjustment",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Panoramic Sunroof",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          }
        ]
      },
      {
        "id": "safety",
        "title": "Safety",
        "items": [
          {
            "name": "Airbags",
            "values": {
              "TIGGO 8 COMFORT": "6 Airbags (2 front airbag + 2 front side airbag + 2  sidecurtain airbag)",
              "TIGGO 8 PREMIUM": "6 Airbags (2 front airbag + 2 front side airbag + 2  sidecurtain airbag)"
            }
          },
          {
            "name": "ISOFIX",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Vehicle Body Anti-Theft",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          }
        ]
      },
      {
        "id": "driving-assistant",
        "title": "Driving Assistant",
        "items": [
          {
            "name": "Anti-lock Braking System (ABS)",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Electronic Brake Force Distribution (EBD)",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Brake Assist System (BAS)+(BOS)",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Electronic Stability Program (ESP)",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Traction Control (TCS)",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Emergency Brake Assist (EBA)",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Hill-start Assist Control (HAC)",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Hill Descent Control (HDC)",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Tyre Pressure Monitoring System (TPMS)",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Cruise Control",
            "values": {
              "TIGGO 8 COMFORT": "Available",
              "TIGGO 8 PREMIUM": "Available"
            }
          }
        ]
      },
      {
        "id": "advance-driving-assistant",
        "title": "Advance Driving Assistant",
        "items": [
          {
            "name": "Lane Departure Warning (LDW)",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Blind Spot Detection (BSD)",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Adaptive Cruise Control (ACC)",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Front Collision Warning (FCW)",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Autonomous Emergency Braking (AEB)",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Alert (RCTA)",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Door Open Warning (DOW)",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Traffic Sign Recognition (TSR)",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          },
          {
            "name": "Intelligent High-Beam Control (IHBA)",
            "values": {
              "TIGGO 8 COMFORT": "-",
              "TIGGO 8 PREMIUM": "Available"
            }
          }
        ]
      }
    ],
    "dimensionDiagram": {
      "lengthWidthHeight": "4722 x 1860 x 1705 mm",
      "wheelbase": "2710 mm",
      "tread": "-",
      "overhang": "-",
      "groundClearance": "-",
      "cargoCapacity": "Available"
    }
  },
  "tiggo-cross-csh-hybrid": {
    "carId": "tiggo-cross-csh-hybrid",
    "carName": "TIGGO CROSS CSH",
    "tagline": "Rasakan masa depan berkendara dengan Chery TIGGO CROSS CSH Hybrid. Lebih nyaman, sangat cepat, dan dilengkapi fitur cerdas untuk perjalanan lebih pintar.",
    "variants": [
      "TIGGO CROSS CSH Hybrid"
    ],
    "categories": [
      {
        "id": "basic",
        "title": "Basic",
        "items": [
          {
            "name": "Engine",
            "values": {
              "TIGGO CROSS CSH Hybrid": "1,5L - HYBRID (DHE)"
            }
          },
          {
            "name": "Maximum Power (PS) / Maximum Torque (Nm)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "96 PS / 120 N.m"
            }
          },
          {
            "name": "Drive Motor Maximum Power (PS) / Maximum Torque (Nm)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "204 PS / 310 N.m"
            }
          },
          {
            "name": "Battery Capacity",
            "values": {
              "TIGGO CROSS CSH Hybrid": "1,8 kWH"
            }
          },
          {
            "name": "Transmission",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Dedicated Hybrid Transmission (DHT)"
            }
          },
          {
            "name": "Dimension",
            "values": {
              "TIGGO CROSS CSH Hybrid": "4330 x 1831 x 1652 mm"
            }
          },
          {
            "name": "Wheelbase ",
            "values": {
              "TIGGO CROSS CSH Hybrid": "2610 mm"
            }
          },
          {
            "name": "Ground Clearance",
            "values": {
              "TIGGO CROSS CSH Hybrid": "190 mm"
            }
          },
          {
            "name": "Suspension",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Front: MacPherson / Rear: Torsion Beam"
            }
          },
          {
            "name": "Parking & Braking",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Disc Brake"
            }
          },
          {
            "name": "Seats",
            "values": {
              "TIGGO CROSS CSH Hybrid": "5"
            }
          },
          {
            "name": "Carlink-O",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          }
        ]
      },
      {
        "id": "exterior",
        "title": "Exterior",
        "items": [
          {
            "name": "Key",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Keyless Entry and Push Button Start"
            }
          },
          {
            "name": "Tyre",
            "values": {
              "TIGGO CROSS CSH Hybrid": "17\" Shield Alloy"
            }
          },
          {
            "name": "Headlight",
            "values": {
              "TIGGO CROSS CSH Hybrid": "LED"
            }
          },
          {
            "name": "Energy Crystal Outline Lamp",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Follow-me Home Lamp",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Rear Fog Lamp",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Rear Parking Sensors",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Door Mirror Power Adjust + Door Mirror Heating",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Auto Speed Adjust Front Wiper",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Load Capacity Roof Rail",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Electric Sunroof",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          }
        ]
      },
      {
        "id": "interior",
        "title": "Interior",
        "items": [
          {
            "name": "Color Interior",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Black Color"
            }
          },
          {
            "name": "Speakers",
            "values": {
              "TIGGO CROSS CSH Hybrid": "6"
            }
          },
          {
            "name": "Super Wide 20,5 inch HD Display",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Leather Steering Wheel with Steering Switch",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Steering Tilt and Telescopic",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Sun Visor with Vanity Mirrors",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "All Automatic Power Window",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Second Row Air Vent A/C",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Intelligent Voice Assistant",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Auto Window with Anti Pinched System",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Wireless Android Auto / Apple Carplay",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Box Glasses",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Multi-color Ambient Light",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "360 HD Camera",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Center Headrest Second Row",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "A/C with PM 0.3 Filter",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Coat Hook",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          }
        ]
      },
      {
        "id": "safety",
        "title": "Safety",
        "items": [
          {
            "name": "Airbags",
            "values": {
              "TIGGO CROSS CSH Hybrid": "7"
            }
          },
          {
            "name": "ISOFIX",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Vehicle Body Anti-theft",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          }
        ]
      },
      {
        "id": "driving-assistant",
        "title": "Driving Assistant",
        "items": [
          {
            "name": "Electronic Parking Brake (EPB)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Electronic Brake Force Distribution (EBD)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Brake Assistant System (BAS) ",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Electronic Stability Program (ESP)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Hill-start Assist Control (HAC)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Traction Control (TCS)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Tyre Pressure Monitoring System (TPMS)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Auto Central Locking Door",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Cruise Control",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          }
        ]
      },
      {
        "id": "advanced-driving-assistant",
        "title": "Advanced Driving Assistant",
        "items": [
          {
            "name": "Adaptive Cruise Control (ACC)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Lane Departure Warning (LDW)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Blind Spot Detection (BSD)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Alert (RCTA)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Brake (RCTB)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Front Collision Warning (FCW)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Rear Collision Warning (RCW)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Automatic Emergency Braking (AEB)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Intelligent High-beam Control (IHC)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Traffic Jam Assist (TJA)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Integrated cruise assist (ICA)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Lane Keeping Assist (LKA)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Lane Change Assist (LCA)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Emergency Line Keeping (ELK)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Intelligent Speed Adaptation (ISA)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          },
          {
            "name": "Speed Assistance System (SAS)",
            "values": {
              "TIGGO CROSS CSH Hybrid": "Available"
            }
          }
        ]
      }
    ],
    "dimensionDiagram": {
      "lengthWidthHeight": "4330 x 1831 x 1652 mm",
      "wheelbase": "-",
      "tread": "-",
      "overhang": "-",
      "groundClearance": "-",
      "cargoCapacity": "-"
    }
  },
  "tiggo-cross-sport": {
    "carId": "tiggo-cross-sport",
    "carName": "TIGGO CROSS SPORT",
    "tagline": "Bebaskan perjalanan Anda dengan SUV yang dirancang untuk sensasi. Dilengkapi teknologi pintar, kenyamanan mewah, dan keamanan mutakhir untuk ketenangan pikiran.",
    "variants": [
      "TIGGO CROSS SPORT"
    ],
    "categories": [
      {
        "id": "basic",
        "title": "Basic",
        "items": [
          {
            "name": "Dimension",
            "values": {
              "TIGGO CROSS SPORT": "4330 x 1831 x 1652 mm"
            }
          },
          {
            "name": "Wheel Base",
            "values": {
              "TIGGO CROSS SPORT": "2610 mm"
            }
          },
          {
            "name": "Ground Clearance",
            "values": {
              "TIGGO CROSS SPORT": "190 mm"
            }
          },
          {
            "name": "Suspension",
            "values": {
              "TIGGO CROSS SPORT": "Front: MacPherson / Rear: Torsion Beam"
            }
          },
          {
            "name": "Parking & Braking",
            "values": {
              "TIGGO CROSS SPORT": "Disc Brake"
            }
          },
          {
            "name": "Seats",
            "values": {
              "TIGGO CROSS SPORT": "5"
            }
          },
          {
            "name": "Carlink-O",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Engine Type",
            "values": {
              "TIGGO CROSS SPORT": "1.5L Turbo Engine"
            }
          },
          {
            "name": "Maximum Power (PS)",
            "values": {
              "TIGGO CROSS SPORT": "147Ps"
            }
          },
          {
            "name": "Maximum Torque (Nm)",
            "values": {
              "TIGGO CROSS SPORT": "210Nm"
            }
          },
          {
            "name": "Transmission",
            "values": {
              "TIGGO CROSS SPORT": "6 Speed DCT"
            }
          }
        ]
      },
      {
        "id": "interior",
        "title": "Interior",
        "items": [
          {
            "name": "Color Interior",
            "values": {
              "TIGGO CROSS SPORT": "Black Color"
            }
          },
          {
            "name": "Speakers",
            "values": {
              "TIGGO CROSS SPORT": "6"
            }
          },
          {
            "name": "Super Wide 20.5 inch HD Display",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Leather Steering Wheel with Steering Switch",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Available",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Sun Visor with Vanity Mirrors",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "All Automatic Power Window",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Second Row Air Vent A/C",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Intelligent Voice Assistant",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Auto Window with Anti Pinched System",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Armrest Storage with Cooling Box",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Wireless Android Auto / Apple Carplay",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Box Glasses",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Multi-color Ambient Light",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "360 HD Camera",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Center Headrest Second Row",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "A/C with PM 0.3 Filter",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          }
        ]
      },
      {
        "id": "exterior",
        "title": "Exterior",
        "items": [
          {
            "name": "Key",
            "values": {
              "TIGGO CROSS SPORT": "Keyless Entry and Push Button Start"
            }
          },
          {
            "name": "Tyre",
            "values": {
              "TIGGO CROSS SPORT": "18\" Dual Sport Velg"
            }
          },
          {
            "name": "Headlight",
            "values": {
              "TIGGO CROSS SPORT": "LED"
            }
          },
          {
            "name": "Energy Crystal Outline Lamp",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Follow-me Home Lamp",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Rear Fog Lamp",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Rear Parking Sensors",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Door Mirror Power Adjust + Door Mirror Heating",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Auto Speed Adjust Front Wiper",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Load Capacity Roof Rail",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Electric Sunroof",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          }
        ]
      },
      {
        "id": "safety",
        "title": "Safety",
        "items": [
          {
            "name": "Airbags",
            "values": {
              "TIGGO CROSS SPORT": "7"
            }
          },
          {
            "name": "ISOFIX",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Vehicle Body Anti-theft",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          }
        ]
      },
      {
        "id": "driving-assistant",
        "title": "Driving Assistant",
        "items": [
          {
            "name": "Electronic Parking Brake (EPB)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Electronic Brake Force Distribution (EBD)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Brake Assistant System (BAS)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Electronic Stability Program (ESP)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Hill-start Assist Control (HAC)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Traction Control (TCS)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Tyre Pressure Monitoring System (TPMS)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Auto Central Locking Door",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Cruise Control",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          }
        ]
      },
      {
        "id": "advanced-driving-assistant",
        "title": "Advanced Driving Assistant",
        "items": [
          {
            "name": "Adaptive Cruise Control (ACC)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Lane Departure Warning (LDW)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Blind Spot Detection (BSD)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Alert (RCTA)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Front Collision Warning (FCW)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Automatic Emergency Braking (AEB)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          },
          {
            "name": "Intelligent High-beam Control (IHC)",
            "values": {
              "TIGGO CROSS SPORT": "Available"
            }
          }
        ]
      }
    ],
    "dimensionDiagram": {
      "lengthWidthHeight": "4330 x 1831 x 1652 mm",
      "wheelbase": "2610 mm",
      "tread": "-",
      "overhang": "-",
      "groundClearance": "-",
      "cargoCapacity": "-"
    }
  },
  "tiggo-cross": {
    "carId": "tiggo-cross",
    "carName": "TIGGO CROSS",
    "tagline": "Hadapi tiap petualangan dengan performa, kenyamanan dan ketangguhan maksimal dari TIGGO Cross. Temukan spesifkasi fitur dan harganya di sini.",
    "variants": [
      "TIGGO CROSS COMFORT",
      "TIGGO CROSS PREMIUM"
    ],
    "categories": [
      {
        "id": "basic",
        "title": "Basic",
        "items": [
          {
            "name": "Dimension",
            "values": {
              "TIGGO CROSS COMFORT": "4320 x 1831 x 1652 mm",
              "TIGGO CROSS PREMIUM": "4320 x 1831 x 1652 mm"
            }
          },
          {
            "name": "Wheelbase",
            "values": {
              "TIGGO CROSS COMFORT": "2610 mm",
              "TIGGO CROSS PREMIUM": "2610 mm"
            }
          },
          {
            "name": "Suspension",
            "values": {
              "TIGGO CROSS COMFORT": "Front: MacPherson / Rear: Torsion Beam",
              "TIGGO CROSS PREMIUM": "Front: MacPherson / Rear: Torsion Beam"
            }
          },
          {
            "name": "Parking & Brake",
            "values": {
              "TIGGO CROSS COMFORT": "Disc Brake with EPB and Auto Hold",
              "TIGGO CROSS PREMIUM": "Disc Brake with EPB and Auto Hold"
            }
          },
          {
            "name": "Engine Type",
            "values": {
              "TIGGO CROSS COMFORT": "1.5L NA Engine",
              "TIGGO CROSS PREMIUM": "1.5L NA Engine"
            }
          },
          {
            "name": "Maximum Power (PS) -Maximum Torque (Nm)",
            "values": {
              "TIGGO CROSS COMFORT": "116 PS - 138 Nm",
              "TIGGO CROSS PREMIUM": "116 PS - 138 Nm"
            }
          },
          {
            "name": "Transmission",
            "values": {
              "TIGGO CROSS COMFORT": "CVT",
              "TIGGO CROSS PREMIUM": "CVT"
            }
          },
          {
            "name": "Seats",
            "values": {
              "TIGGO CROSS COMFORT": "5",
              "TIGGO CROSS PREMIUM": "5"
            }
          }
        ]
      },
      {
        "id": "exterior",
        "title": "Exterior",
        "items": [
          {
            "name": "Key",
            "values": {
              "TIGGO CROSS COMFORT": "Keyless Entry and Push Button Start",
              "TIGGO CROSS PREMIUM": "Keyless Entry and Push Button Start"
            }
          },
          {
            "name": "Tyre",
            "values": {
              "TIGGO CROSS COMFORT": "215 / 65 R16 Alloy Wheel",
              "TIGGO CROSS PREMIUM": "215 / 60 R17 Alloy Wheel"
            }
          },
          {
            "name": "Headlight",
            "values": {
              "TIGGO CROSS COMFORT": "LED",
              "TIGGO CROSS PREMIUM": "LED"
            }
          },
          {
            "name": "Energy Crystal Outline Lamp",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Follow-me Home Lamp",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Rear Fog Lamp",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Rear Parking Sensors",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Door Mirror Power Adjust + Door Mirror Heating",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Shark-fin Antena",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Auto Speed Adjust Front Wiper",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Fashion Lighting Welcome lamp with Tiggo Logo",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Load Capacity Roof Rail",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Electric Sunroof",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          }
        ]
      },
      {
        "id": "interior",
        "title": "Interior",
        "items": [
          {
            "name": "Color Interior",
            "values": {
              "TIGGO CROSS COMFORT": "Black Color",
              "TIGGO CROSS PREMIUM": "Black Color"
            }
          },
          {
            "name": "Speakers",
            "values": {
              "TIGGO CROSS COMFORT": "4",
              "TIGGO CROSS PREMIUM": "6"
            }
          },
          {
            "name": "Super Wide 20,5 inch HD Display",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Leather Steering Wheel with Steering Switch",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Steering Tilt and Telescopic",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Sun Visor with Vanity Mirrors",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "All Automatic Power Window",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "A/C with PM 2.5 Filter",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Second Row Air Vent A/C",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Intelligent Voice Assistant",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Auto Window with Anti Pinched System",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Armrest with Storage",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Mobile Connect Android Auto / Carplay",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Box Glasses",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Multi-color Ambient Light",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "360 HD Camera",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Center Headrest Second Row",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          }
        ]
      },
      {
        "id": "safety",
        "title": "Safety",
        "items": [
          {
            "name": "Airbags",
            "values": {
              "TIGGO CROSS COMFORT": "4",
              "TIGGO CROSS PREMIUM": "6"
            }
          },
          {
            "name": "ISOFIX",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Vehicle Body Anti-Theft",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          }
        ]
      },
      {
        "id": "driving-assistant",
        "title": "Driving Assistant",
        "items": [
          {
            "name": "Electronic Parking Brake (EPB)",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Electronic Brake Force Distribution (EBD)",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Brake Assistant System (BAS) ",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Electronic Stability Program (ESP) ",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Hill-start Assist Control (HAC)",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Traction Control (TCS)",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Tyre Pressure Monitoring System (TPMS)",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Auto Central Locking Door",
            "values": {
              "TIGGO CROSS COMFORT": "Available",
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Cruise Control",
            "values": {
              "TIGGO CROSS COMFORT": "Available"
            }
          }
        ]
      },
      {
        "id": "advanced-driving-assistant",
        "title": "Advanced Driving Assistant",
        "items": [
          {
            "name": "Adaptive Cruise Control (ACC)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Lane Departure Warning (LDW)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Blind Spot Detection (BSD) ",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Alert (RCTA)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Rear Cross Traffc Braking (RCTB)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Front Collision Warning (FCW)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Rear Collision Warning (RCW)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Anti-collision Automatic Braking (MCB)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Autonomous Emergency Braking (AEB)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Intelligent High-beam Control Headlamp (IHC)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Traffic Jam Assist (TJA)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Integrated Cruise Assist (ICA)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Lane Keeping Assist (LKA)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Lane Change Assist (LCA)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          },
          {
            "name": "Emergency Line Keeping (ELK)",
            "values": {
              "TIGGO CROSS PREMIUM": "Available"
            }
          }
        ]
      }
    ],
    "dimensionDiagram": {
      "lengthWidthHeight": "4320 x 1831 x 1652 mm",
      "wheelbase": "-",
      "tread": "-",
      "overhang": "-",
      "groundClearance": "-",
      "cargoCapacity": "-"
    }
  },
  "chery-e5": {
    "carId": "chery-e5",
    "carName": "CHERY E5",
    "tagline": "Teknologi Baterai Next-Gen",
    "variants": [
      "CHERY E5 PURE",
      "CHERY E5"
    ],
    "categories": [
      {
        "id": "electric-car-feature",
        "title": "Electric Car Feature",
        "items": [
          {
            "name": "Vehicle",
            "values": {
              "CHERY E5 PURE": "Electronic Vehicle FWD",
              "CHERY E5": "Electronic Vehicle FWD"
            }
          },
          {
            "name": "Battery Type",
            "values": {
              "CHERY E5 PURE": "Lithium Iron Phosphate Battery",
              "CHERY E5": "Lithium Iron Phosphate Battery"
            }
          },
          {
            "name": "Battery Capacity Distance (Km)",
            "values": {
              "CHERY E5 PURE": "430km (WLTP)/505 km(NEDC)",
              "CHERY E5": "430km (WLTP)/505 km(NEDC)"
            }
          },
          {
            "name": "Ultra Fast Charging Battery",
            "values": {
              "CHERY E5 PURE": "30% - 80% in 28 Minutes",
              "CHERY E5": "30% - 80% in 28 Minutes"
            }
          },
          {
            "name": "V2L",
            "values": {
              "CHERY E5 PURE": "3.3 kW",
              "CHERY E5": "3.3 kW"
            }
          },
          {
            "name": "Processor",
            "values": {
              "CHERY E5 PURE": "8155 Qualcomm Chip",
              "CHERY E5": "8155 Qualcomm Chip"
            }
          },
          {
            "name": "Driving Mode",
            "values": {
              "CHERY E5 PURE": "Eco, Sport, Normal",
              "CHERY E5": "Eco, Sport, Normal"
            }
          }
        ]
      },
      {
        "id": "exterior",
        "title": "Exterior",
        "items": [
          {
            "name": "Dimension",
            "values": {
              "CHERY E5 PURE": "4424x1830x1588 mm",
              "CHERY E5": "4424x1830x1588 mm"
            }
          },
          {
            "name": "Ground Clearance",
            "values": {
              "CHERY E5 PURE": "190 mm (Unladen) / 131 mm (Laden)",
              "CHERY E5": "190 mm (Unladen) / 131 mm (Laden)"
            }
          },
          {
            "name": "Wheel Base",
            "values": {
              "CHERY E5 PURE": "2630 mm",
              "CHERY E5": "2630 mm"
            }
          },
          {
            "name": "Suspension",
            "values": {
              "CHERY E5 PURE": "F:MacPherson Strut R:Multi-Link Suspension",
              "CHERY E5": "F:MacPherson Strut R:Multi-Link Suspension"
            }
          },
          {
            "name": "Parking & Brake",
            "values": {
              "CHERY E5 PURE": "Front & Rear Disc EPB with Autohold",
              "CHERY E5": "Front & Rear Disc EPB with Autohold"
            }
          },
          {
            "name": "Tyre",
            "values": {
              "CHERY E5 PURE": "215/55 R-18 Futuristic Aluminium Velg",
              "CHERY E5": "215/55 R-18 Futuristic Aluminium Velg"
            }
          },
          {
            "name": "Color Body",
            "values": {
              "CHERY E5 PURE": "Two Tone Color & One Tone Color",
              "CHERY E5": "Two Tone Color & One Tone Color"
            }
          },
          {
            "name": "Power Tailgate",
            "values": {
              "CHERY E5 PURE": "Not Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Power Sunroof",
            "values": {
              "CHERY E5 PURE": "Not Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Roof Rail",
            "values": {
              "CHERY E5 PURE": "Not Available",
              "CHERY E5": "Available"
            }
          }
        ]
      },
      {
        "id": "interior",
        "title": "Interior",
        "items": [
          {
            "name": "Interior Color",
            "values": {
              "CHERY E5 PURE": "Black Color / Saint Cyrillus Blue + Streamlined Beige Color",
              "CHERY E5": "Black Color / Saint Cyrillus Blue + Streamlined Beige Color"
            }
          },
          {
            "name": "Interior Panel",
            "values": {
              "CHERY E5 PURE": "Soft Touch Interior Panel Combine with Wood Style",
              "CHERY E5": "Soft Touch Interior Panel Combine with Wood Style"
            }
          },
          {
            "name": "Steering Tech",
            "values": {
              "CHERY E5 PURE": "Electronic Power Steering with 4 Way Manual Adjustable",
              "CHERY E5": "Electronic Power Steering with 4 Way Manual Adjustable"
            }
          },
          {
            "name": "Steering Wheel Material",
            "values": {
              "CHERY E5 PURE": "Leather Steering Wheel with Multi-Function Features",
              "CHERY E5": "Leather Steering Wheel with Multi-Function Features"
            }
          },
          {
            "name": "Seat",
            "values": {
              "CHERY E5 PURE": "5 Seats (2+3)",
              "CHERY E5": "5 Seats (2+3)"
            }
          },
          {
            "name": "Driver Seat 6 Way Power Adjustment",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Passenger Seat 4 Way Power Adjustment",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Multi Color 1st Row & 2nd Row Ambient Light",
            "values": {
              "CHERY E5 PURE": "Available"
            }
          },
          {
            "name": "Privacy Glass",
            "values": {
              "CHERY E5 PURE": "Not Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Multi Color 1st Row & 2 nd Row Ambient Light",
            "values": {
              "CHERY E5": "Available"
            }
          }
        ]
      },
      {
        "id": "light",
        "title": "Light",
        "items": [
          {
            "name": "Automatic LED Headlight with Leveling Switch Manual",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "HighBeam / LowBeam Auto Adjust",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "LED DRL Daytime Running Lamp",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Rear Lamp & Center High Mounting Stop Light",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Sequential Turn Signal",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Cornering Light Features",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Emergency Stop Signal",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Welcoming Light Features",
            "values": {
              "CHERY E5 PURE": "Not Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Follow-me Home Headlight Function",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          }
        ]
      },
      {
        "id": "safety",
        "title": "Safety",
        "items": [
          {
            "name": "Airbag",
            "values": {
              "CHERY E5 PURE": "6 Airbags (Front Dual, Front Side, Side Curtain Airbags)",
              "CHERY E5": "6 Airbags (Front Dual, Front Side, Side Curtain Airbags)"
            }
          },
          {
            "name": "Body Frame",
            "values": {
              "CHERY E5 PURE": "78% High-Strength Steel Body",
              "CHERY E5": "78% High-Strength Steel Body"
            }
          },
          {
            "name": "Child Safety",
            "values": {
              "CHERY E5 PURE": "ISOFIX & Mechanical Safety Lock Door",
              "CHERY E5": "ISOFIX & Mechanical Safety Lock Door"
            }
          },
          {
            "name": "Engine Immobilizer",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Vehicle Body Anti-Theft",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Miniature Circuit Breaker (MCB)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Battery Protection Under Car",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Collision Dampening Point",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Water Protection : IP68",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          }
        ]
      },
      {
        "id": "comfort-infotainment",
        "title": "Comfort & Infotainment",
        "items": [
          {
            "name": "Head-unit",
            "values": {
              "CHERY E5 PURE": "24.6-inch Curved Screen 3000R with a Resolution of Up to 1920x720",
              "CHERY E5": "24.6-inch Curved Screen 3000R with a Resolution of Up to 1920x720"
            }
          },
          {
            "name": "Mobile Connect",
            "values": {
              "CHERY E5 PURE": "Wireless Android Auto & Apple Carplay",
              "CHERY E5": "Wireless Android Auto & Apple Carplay"
            }
          },
          {
            "name": "Speaker",
            "values": {
              "CHERY E5 PURE": "6 Sony Speakers",
              "CHERY E5": "8 Sony Speakers"
            }
          },
          {
            "name": "Two Zone A/C with PM2.5 Filter",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Smartphone Fast Wireless Charger 50w with Cooling & Reminder System",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Auto Window with Anti Pinched System (All Window)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Driver & Passenger Ventilated Seat",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Keyless Entry with HVAC Start Features",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Intelligent Automatic Front Wiper",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Intelligent Voice Assistant",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          }
        ]
      },
      {
        "id": "driving-assistant",
        "title": "Driving Assistant",
        "items": [
          {
            "name": "540° HD Panoramic Camera",
            "values": {
              "CHERY E5 PURE": "Not Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Anti-lock Brake System (ABS)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Electric Brake Force Distribution (EBD)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Brake Assist System (BAS) +Brake Override System (BOS)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Electronic Stability Program (ESP) + Traction Control System (TCS)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Hill-start Assist Control (HAC) + Hill Descent Control (HDC)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Tyre Pressure Monitoring System (TPMS)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Car Lead Departure Sign (CLDS)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Auto Central Locking Door",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Rear Parking Sensor",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          }
        ]
      },
      {
        "id": "advanced-driving-assistant",
        "title": "Advanced Driving Assistant",
        "items": [
          {
            "name": "Drive Monitor System (DMS)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Lane Keeping Assist (LKA)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Adaptive Cruise Control (ACC)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Automatic Emergency Braking (AEB)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Blind Spot Detection (BSD)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Emergency Lane Keeping (ELK)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Forward Collision Warning (FCW)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Lane Departure Warning (LDW)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Traffic Jam Assist (TJA)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Integrated Cruise Assist (ICA)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Intelligent Energy System (IES)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Door Open Warning (DOW)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Rear Collision Warning (RCW)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Drive Away Information (DAI)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Intelligent Headlamp Control (IHC)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Alert (RCTA)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Braking (RCTB)",
            "values": {
              "CHERY E5 PURE": "Available",
              "CHERY E5": "Available"
            }
          }
        ]
      }
    ]
  },
  "chery-c5-csh": {
    "carId": "chery-c5-csh",
    "carName": "CHERY C5 CSH",
    "tagline": "AKSELERASI MAKSIMUM",
    "variants": [
      "CHERY C5 CSH"
    ],
    "categories": []
  },
  "chery-c5": {
    "carId": "chery-c5",
    "carName": "CHERY C5",
    "tagline": "Temukan desain mutakhir dan inovasi dari Chery C5. Rasakan performa dan gaya futuristik untuk perjalanan harian Anda. Futuristic Reborn dimulai di sini!",
    "variants": [
      "CHERY C5 Z",
      "CHERY C5 RZ"
    ],
    "categories": [
      {
        "id": "basic",
        "title": "Basic",
        "items": [
          {
            "name": "Dimension",
            "values": {
              "CHERY C5 Z": "4400 x 1830 x 1588 mm",
              "CHERY C5 RZ": "4400 x 1830 x 1588 mm"
            }
          },
          {
            "name": "Engine Type",
            "values": {
              "CHERY C5 Z": "1,5L TCI",
              "CHERY C5 RZ": "1.5L TCI"
            }
          },
          {
            "name": "Max Power (KW/HP) -- Max Torque (Nm)",
            "values": {
              "CHERY C5 Z": "108KW / 145HP -- 230Nm",
              "CHERY C5 RZ": "108KW / 145HP -- 230Nm"
            }
          },
          {
            "name": "Transmission",
            "values": {
              "CHERY C5 Z": "6 Wet Speed DCT with Electronic Shifter",
              "CHERY C5 RZ": "6 Wet Speed DCT with Electronic Shifter"
            }
          },
          {
            "name": "Driving Form",
            "values": {
              "CHERY C5 Z": "Eco / Sport",
              "CHERY C5 RZ": "Eco / Sport"
            }
          },
          {
            "name": "Suspension",
            "values": {
              "CHERY C5 Z": "Front : McPherson & Rear : Multi-link suspension",
              "CHERY C5 RZ": "Front : McPherson & Rear : Multi-link suspension"
            }
          },
          {
            "name": "Steering",
            "values": {
              "CHERY C5 Z": "Tilt & Telescopic with EPS & STRG Mode Adjustment",
              "CHERY C5 RZ": "Tilt & Telescopic with EPS & STRG Mode Adjustment"
            }
          }
        ]
      },
      {
        "id": "exterior",
        "title": "Exterior",
        "items": [
          {
            "name": "Tyre",
            "values": {
              "CHERY C5 Z": "R18 inch Black Shadow Blade Alloy",
              "CHERY C5 RZ": "R18 inch Black Shadow Blade Alloy"
            }
          },
          {
            "name": "Keyless Entry and Headlamp Remote",
            "values": {
              "CHERY C5 Z": "Auto",
              "CHERY C5 RZ": "Auto + Remote"
            }
          },
          {
            "name": "LED Daytime Running Lamp & LED Headlight",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Remote Window Operation, Engine Start with Cooling Activation",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Cornering Light",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Emergency Brake Light and Tail Lamps",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Front LED Foglamps and High-Mount Stop Lamp",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Door Mirror Heating",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "HMA Lamp Automatic Control (Associated with AEB)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Sequential LED Turning Light",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Lighting Effect of Ceremonial Exterior Decoration (Front & Rear Headlights)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Open Door Light",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Power Tailgate",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Power Sunroof",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Intelligent Automatic Wiper",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          }
        ]
      },
      {
        "id": "interior",
        "title": "Interior",
        "items": [
          {
            "name": "Speakers",
            "values": {
              "CHERY C5 Z": "6 Speakers",
              "CHERY C5 RZ": "8 Speakers with SONY Premium Audio"
            }
          },
          {
            "name": "Seat Cover",
            "values": {
              "CHERY C5 Z": "Faux Leather Combine with Fabric",
              "CHERY C5 RZ": "Faux Leather"
            }
          },
          {
            "name": "20.5 Inch Super Large Screen Apple Car Play & Android Auto",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Front Armrest with Cooling Storage",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Dynamic Multi Color Ambient Light",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Front Row (1 USB + 1 Type C Fast Charging)",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Second Row (1 USB), Power Outlet (Trunk)",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Dual Zone AC Control PM 0.3 High-Efficiency Air Filtration System ",
            "values": {
              "CHERY C5 Z": "Available"
            }
          },
          {
            "name": "Rear View Camera with Dynamic Guides",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "All Door with Auto Power Window",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Smartphone Wireless Charger with Reminder",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Intelligent Voice Assistant (English)",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Dual Zone AC Control PM 0.3 High-Efficiency Air Filtration System",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Middle Cabin Light",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Auto Dimming Rear View Mirror",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Acoustic Glass",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Door Mirror Heating",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Driver Seat 6 Way Power Adjustment",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Front Row Ventilated Seats",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Sunvisor with Make-up Lamp",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "360° HD Panoramic Camera",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Idling Start Stop (12V)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          }
        ]
      },
      {
        "id": "safety",
        "title": "Safety",
        "items": [
          {
            "name": "Parking & Brake",
            "values": {
              "CHERY C5 Z": "EPB with Autohold , Front Ventilated Disc Brakes and Rear Disc Brakes",
              "CHERY C5 RZ": "EPB with Autohold , Front Ventilated Disc Brakes and Rear Disc Brakes"
            }
          },
          {
            "name": "Airbag",
            "values": {
              "CHERY C5 Z": "6 Airbags (Front, Side, Curtain)",
              "CHERY C5 RZ": "6 Airbags (Front, Side, Curtain)"
            }
          },
          {
            "name": "ISOFIX",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Vehicle Body Anti-theft Alarm & Immobilizer",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          }
        ]
      },
      {
        "id": "driving-assistant",
        "title": "Driving Assistant",
        "items": [
          {
            "name": "Anti-lock Braking System (ABS)",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Electronic Brake Force Distribution (EBD)",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Brake Assist System (BAS) + Brake Override System (BOS)",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Electronic Stability Program (ESP) + Traction Control (TCS)",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Hill-start Assist Control (HAC) & Hill Descent Control (HDC)",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Tyre Pressure Monitoring System (TPMS)",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Auto Central Locking Door",
            "values": {
              "CHERY C5 Z": "Available",
              "CHERY C5 RZ": "Available"
            }
          }
        ]
      },
      {
        "id": "advanced-driving-assistant",
        "title": "Advanced Driving Assistant",
        "items": [
          {
            "name": "Lane Departure Warning（LDW)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Blind-Spot Detection（BSD)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Alert（RCTA)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Adaptive Cruise Control（ACC）with Low Speed Follow",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Autonomous Emergency Braking(AEB)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Traffic Jam Assist (TJA)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Integrated Cruise Assist (ICA)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Door Open Warning (DOW)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Traffic Sign Recognition (TSR)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Intelligent Dodge System (IES)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          },
          {
            "name": "Emergency Lane Keeping (ELK)",
            "values": {
              "CHERY C5 RZ": "Available"
            }
          }
        ]
      }
    ],
    "dimensionDiagram": {
      "lengthWidthHeight": "4400 x 1830 x 1588 mm",
      "wheelbase": "-",
      "tread": "-",
      "overhang": "-",
      "groundClearance": "-",
      "cargoCapacity": "-"
    }
  },
  "omoda-5-gt": {
    "carId": "omoda-5-gt",
    "carName": "OMODA 5 GT",
    "tagline": "Review mobil Chery SUV OMODA 5 GT, dari interior, warna dan spesifikasi dengan mesin performa tinggi dan teknologi mutakhir!",
    "variants": [
      "OMODA 5 GT FWD",
      "OMODA 5 GT AWD"
    ],
    "categories": [
      {
        "id": "basic",
        "title": "Basic",
        "items": [
          {
            "name": "Dimension",
            "values": {
              "OMODA 5 GT FWD": "4400 x 1830 x 1588 mm",
              "OMODA 5 GT AWD": "4400 x 1830 x 1588 mm"
            }
          },
          {
            "name": "Engine Type",
            "values": {
              "OMODA 5 GT FWD": "1.6L TGDI",
              "OMODA 5 GT AWD": "1.6L TGDI"
            }
          },
          {
            "name": "Max Power (KW/HP) - Max Torque (Nm)",
            "values": {
              "OMODA 5 GT FWD": "145KW/197HP - - 290Nm",
              "OMODA 5 GT AWD": "145KW/197HP - - 290Nm"
            }
          },
          {
            "name": "Transmission",
            "values": {
              "OMODA 5 GT FWD": "7 DCT with Electronic Shifter",
              "OMODA 5 GT AWD": "7 DCT with Electronic Shifter"
            }
          },
          {
            "name": "Driving Form",
            "values": {
              "OMODA 5 GT FWD": "Eco / Normal / Sport",
              "OMODA 5 GT AWD": "Eco / Normal / Sport / Snow / Mud / Offroad"
            }
          },
          {
            "name": "Steering",
            "values": {
              "OMODA 5 GT FWD": "Tilt & Telescopic with EPS & STRG Mode Adjustment",
              "OMODA 5 GT AWD": "Tilt & Telescopic with EPS & STRG Mode Adjustment"
            }
          },
          {
            "name": "Suspension",
            "values": {
              "OMODA 5 GT FWD": "R: Independent Multi-link Suspension",
              "OMODA 5 GT AWD": "R: Independent Multi-link Suspension"
            }
          },
          {
            "name": "Parking & Brake",
            "values": {
              "OMODA 5 GT FWD": "E-PKB with Autohold, Front Ventilated Disc Brakes and Rear Disc Brakes",
              "OMODA 5 GT AWD": "E-PKB with Autohold, Front Ventilated Disc Brakes and Rear Disc Brakes"
            }
          },
          {
            "name": "Airbag",
            "values": {
              "OMODA 5 GT FWD": "6 Airbags (Front, Side, Curtain)",
              "OMODA 5 GT AWD": "6 Airbags (Front, Side, Curtain)"
            }
          },
          {
            "name": "Tyre",
            "values": {
              "OMODA 5 GT FWD": "215/55 R18 - Orange Stripe",
              "OMODA 5 GT AWD": "215/55 R18 - Black Stripe"
            }
          },
          {
            "name": "Speaker",
            "values": {
              "OMODA 5 GT FWD": "8 Speakers with SONY Premium Audio",
              "OMODA 5 GT AWD": "8 Speakers with SONY Premium Audio"
            }
          },
          {
            "name": "Seat Cover",
            "values": {
              "OMODA 5 GT FWD": "Faux Leather",
              "OMODA 5 GT AWD": "Faux Leather"
            }
          },
          {
            "name": "Dual Color Stripes",
            "values": {
              "OMODA 5 GT FWD": "Orange",
              "OMODA 5 GT AWD": "Orange"
            }
          },
          {
            "name": "10.25 Inch Head-unit (Apple Car Play & Android Auto)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "10.25 Inch Dynamic Meter Cluster",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Front Armrest with Cooling Storage",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Dynamic Multi Color Ambient Light",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "LED Daytime Running Lamp & LED Headlight",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Remote Window Operation, Engine Start with Cooling Activation",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Front Row (1 USB + 1 Type C Fast Charging)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Second Row 1 USB, Power Outlet (Trunk)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Dual Zone AC Control",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Rear View Camera with Dynamic Guides",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "All Door with Auto Power Window",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Keyless Entry + Vehicle Body Anti-theft",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Air Filter (PM 2,5)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Smartphone Wireless Charger",
            "values": {
              "OMODA 5 GT FWD": "Available"
            }
          },
          {
            "name": "Intelligent Voice Assistant (English)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Auto Dimming Rear View Mirror",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Acoustic Glass",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Door Mirror Heating",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Driver Seat 6 Way Power Adjustment",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Sequential LED Turning Light",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Front Row Ventilated Seats",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Lighting Effect of Ceremonial Exterior Decoration (Front & Rear Headlights)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Open Door Light",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Power Tailgate",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Power Sunroof",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Sunvisor with Illuminant (Driver + Passenger)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "540° HD Panoramic Camera",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Intelligent Automatic Wiper",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Piano Black Center Interior",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Bottom Splash Shield",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Soft-Touch Interior Door Panel",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "HMA Lamp Automatic Control",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Smartphone Wireless Charger 50W with Reminder",
            "values": {
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Driving Monitoring Status Camera (DMS)",
            "values": {
              "OMODA 5 GT AWD": "Available"
            }
          }
        ]
      },
      {
        "id": "driving-assistant",
        "title": "Driving Assistant",
        "items": [
          {
            "name": "Anti-lock Braking System (ABS)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Electronic Brake Force Distribution (EBD)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Brake Assist System (BAS) + Brake Priority System (BOS)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Electronic Stability Program (ESP) + Traction Control (TCS)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Hill-start Assist Control (HAC) & Hill Descent Control (HDC)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Tyre Pressure Monitoring System (TPMS)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Auto Central Locking Door",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          }
        ]
      },
      {
        "id": "advanced-driving-assistant",
        "title": "Advanced Driving Assistant",
        "items": [
          {
            "name": "Lane Departure Warning (LDW)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Blind Spot Detection (BSD)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Emergency Lane Keeping (ELK)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Rear Cross Traffic Alert (RCTA)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Adaptive Cruise Control (ACC) with Low Speed Follow",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Front Collision Warning (FCW) with Vehicle Identification",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Autonomous Emergency Braking (AEB)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Intelligent High-Beam Control Headlamp (IHC)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Car Lead Departure Sign (CLDS)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Integrated Cruise Assist (ICA)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          },
          {
            "name": "Lane Keeping Assist (LKA)",
            "values": {
              "OMODA 5 GT FWD": "Available",
              "OMODA 5 GT AWD": "Available"
            }
          }
        ]
      }
    ],
    "dimensionDiagram": {
      "lengthWidthHeight": "4400 x 1830 x 1588 mm",
      "wheelbase": "-",
      "tread": "-",
      "overhang": "-",
      "groundClearance": "-",
      "cargoCapacity": "-"
    }
  }
};
