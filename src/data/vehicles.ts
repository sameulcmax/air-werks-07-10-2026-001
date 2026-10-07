export interface VehicleEngine {
  name: string;
  fuelType: 'Gas' | 'Diesel' | 'Hybrid Gas';
  displacement: string;
  aspiration: 'Naturally Aspirated' | 'Turbocharged' | 'Twin-Turbocharged' | 'Supercharged';
  popularIntakes: string[];
  filterStyles: string[];
  intakeBenefits: string[];
  factoryAirboxNote: string;
}

export interface VehicleModel {
  id: string;
  make: 'Ford' | 'Chevrolet' | 'GMC' | 'RAM' | 'Toyota';
  model: string;
  yearRange: string;
  is2020Plus: boolean;
  category: 'Full-Size' | 'Heavy Duty' | 'Mid-Size';
  heroImage: string;
  tagline: string;
  engines: VehicleEngine[];
  availableBrands: string[];
  estimatedInstallTime: string;
  overview: string;
}

export const VEHICLE_DATA: VehicleModel[] = [
  // FORD
  {
    id: 'ford-f150',
    make: 'Ford',
    model: 'F-150',
    yearRange: '2021 - 2025+',
    is2020Plus: true,
    category: 'Full-Size',
    heroImage: 'https://images.pexels.com/photos/10306505/pexels-photo-10306505.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tagline: 'Precision intake airflow for EcoBoost twin-turbos and 5.0L Coyote V8s.',
    overview: 'The 14th-generation Ford F-150 platform features tightly integrated twin turbocharger plumbing on 2.7L/3.5L EcoBoost engines and high-velocity induction pathways on the 5.0L Coyote V8. We source enclosed cold-air induction systems designed to preserve factory sensor calibrations while optimizing charge airflow.',
    availableBrands: ['S&B Filters', 'aFe POWER', 'K&N', 'Volant', 'AEM'],
    estimatedInstallTime: '45 - 60 mins',
    engines: [
      {
        name: '3.5L EcoBoost Twin-Turbo V6',
        fuelType: 'Gas',
        displacement: '3.5L',
        aspiration: 'Twin-Turbocharged',
        popularIntakes: ['S&B Sealed Enclosed Box (Dual Inlet)', 'aFe Momentum GT Dual Tube', 'K&N High-Flow Air Induction'],
        filterStyles: ['8-Ply Cleanable Cotton Oiled', 'Dry Extend Synthetic Media'],
        intakeBenefits: ['Reduced intake restriction into turbochargers', 'Distinct turbo spool & diverter valve acoustics', 'Direct cold-air scoop retention'],
        factoryAirboxNote: 'Replaces restrictive baffled inlet ducting with smooth rotomolded dual runner tubes.'
      },
      {
        name: '5.0L Coyote 32V V8',
        fuelType: 'Gas',
        displacement: '5.0L',
        aspiration: 'Naturally Aspirated',
        popularIntakes: ['S&B Cold Air Intake with Clear Lid', 'aFe Magnum FORCE Stage-2 Pro 5R', 'Volant Closed Box System'],
        filterStyles: ['Oiled Cotton Filter', 'Dry Pro Dry S'],
        intakeBenefits: ['Deeper engine acoustic growl under throttle', 'Smooth intake tube geometry eliminating accordion ridges', 'Maximized mass airflow velocity'],
        factoryAirboxNote: 'Utilizes high-volume single intake tube feeding the large-bore throttle body.'
      },
      {
        name: '2.7L EcoBoost Twin-Turbo V6',
        fuelType: 'Gas',
        displacement: '2.7L',
        aspiration: 'Twin-Turbocharged',
        popularIntakes: ['S&B Enclosed System', 'aFe Momentum GT'],
        filterStyles: ['Dry Extend', 'Oiled Cleanable'],
        intakeBenefits: ['Quicker throttle response off-idle', 'Clean engine bay aesthetics with clear inspection window'],
        factoryAirboxNote: 'Direct bolt-on to factory lower air ducting.'
      }
    ]
  },
  {
    id: 'ford-f250-f350-superduty',
    make: 'Ford',
    model: 'F-250 / F-350 Super Duty',
    yearRange: '2020 - 2025+',
    is2020Plus: true,
    category: 'Heavy Duty',
    heroImage: '/images/hero-truck.jpg',
    tagline: 'High-volume airflow systems for 6.7L Power Stroke Diesels and 7.3L Godzilla V8s.',
    overview: 'Ford Super Duty trucks demand immense volumetric airflow under continuous heavy hauling and towing loads. We source and install heavy-duty enclosed filtration units featuring silicone seals, high-capacity filter elements, and clear sight lids for easy pre-trip inspection.',
    availableBrands: ['S&B Filters', 'aFe POWER', 'K&N Heavy Duty', 'Volant'],
    estimatedInstallTime: '60 - 75 mins',
    engines: [
      {
        name: '6.7L Power Stroke Turbo Diesel V8',
        fuelType: 'Diesel',
        displacement: '6.7L',
        aspiration: 'Turbocharged',
        popularIntakes: ['S&B Cold Air Intake (Oversized Filter)', 'aFe Momentum HD Pro 10R / Pro DRY S', 'K&N Heavy Duty Diesel Air Intake'],
        filterStyles: ['Multi-Layer Oiled Cotton (Extreme CFM)', 'Heavy-Duty Dry Extend Synthetic (Dust/Fleet)'],
        intakeBenefits: ['Superior particulate filtration under heavy towing', 'Substantial reduction in airbox restriction over factory paper', 'Quick-inspect clear acrylic lid'],
        factoryAirboxNote: 'Engineered specifically to handle the immense air volume demands of the 6.7L variable-geometry turbocharger.'
      },
      {
        name: '7.3L "Godzilla" OHV V8',
        fuelType: 'Gas',
        displacement: '7.3L',
        aspiration: 'Naturally Aspirated',
        popularIntakes: ['S&B High-Volume Cold Air Intake', 'aFe Momentum GT'],
        filterStyles: ['Cotton Oiled Cleanable', 'Dry Synthetic'],
        intakeBenefits: ['Unrestricted airflow for large-displacement 445 ci engine', 'Enhanced intake induction tone under load', 'Clean silicone coupling'],
        factoryAirboxNote: 'Replaces factory airbox with high-capacity rotomolded box drawing ambient air from behind the grille.'
      }
    ]
  },

  // CHEVROLET
  {
    id: 'chevy-silverado-1500',
    make: 'Chevrolet',
    model: 'Silverado 1500',
    yearRange: '2020 - 2025+',
    is2020Plus: true,
    category: 'Full-Size',
    heroImage: '/images/chevy-silverado.jpg',
    tagline: 'High-flow cold air intake solutions for EcoTec3 5.3L/6.2L V8s and 3.0L Duramax Turbo Diesels.',
    overview: 'The Chevrolet Silverado 1500 offers diverse powertrain choices ranging from the legendary 6.2L EcoTec3 V8 to the efficient inline-six 3.0L Duramax Diesel. Air Werks installs intake packages tailored to the unique airflow and filtration demands of each GM engine.',
    availableBrands: ['S&B Filters', 'aFe POWER', 'Volant', 'K&N', 'AEM'],
    estimatedInstallTime: '45 - 60 mins',
    engines: [
      {
        name: '6.2L / 5.3L EcoTec3 V8',
        fuelType: 'Gas',
        displacement: '6.2L / 5.3L',
        aspiration: 'Naturally Aspirated',
        popularIntakes: ['S&B Enclosed Cold Air Intake', 'aFe Momentum GT Pro 5R', 'Volant Closed Box with PowerCore'],
        filterStyles: ['Oiled 8-Ply Cotton', 'Dry Extend Cleanable'],
        intakeBenefits: ['Crisp throttle response during acceleration', 'Authoritative induction tone without in-cab drone', 'Rotomolded composite heat shielding'],
        factoryAirboxNote: 'Mates directly to factory fresh-air intake inlet behind the front grille.'
      },
      {
        name: '3.0L Duramax Turbo Diesel (LM2 / LZ0)',
        fuelType: 'Diesel',
        displacement: '3.0L',
        aspiration: 'Turbocharged',
        popularIntakes: ['S&B Cold Air Intake for 3.0L Duramax', 'aFe Momentum HD'],
        filterStyles: ['Dry Extend Synthetic', 'Cleanable Oiled'],
        intakeBenefits: ['Optimized intake pathway for inline-6 turbo spool', 'Enhanced turbo efficiency under highway cruise and towing', 'Sealed airbox keeps out hot engine bay air'],
        factoryAirboxNote: 'Maintains factory MAF sensor location with zero check engine light triggers.'
      }
    ]
  },
  {
    id: 'chevy-silverado-2500-3500-hd',
    make: 'Chevrolet',
    model: 'Silverado 2500 / 3500 HD',
    yearRange: '2020 - 2025+',
    is2020Plus: true,
    category: 'Heavy Duty',
    heroImage: 'https://images.pexels.com/photos/852819/pexels-photo-852819.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tagline: 'Maximum airflow for 6.6L Duramax Turbo Diesels and 6.6L Gas HD V8s.',
    overview: 'Chevy Heavy Duty trucks are built for continuous commercial towing and heavy payload hauling. Air Werks installs cold air intake systems designed to deliver massive CFM airflow through heavy-duty sealed airboxes that keep inlet air cool.',
    availableBrands: ['S&B Filters', 'aFe POWER', 'K&N Heavy Duty', 'Volant'],
    estimatedInstallTime: '60 - 75 mins',
    engines: [
      {
        name: '6.6L Duramax Turbo Diesel V8 (L5P)',
        fuelType: 'Diesel',
        displacement: '6.6L',
        aspiration: 'Turbocharged',
        popularIntakes: ['S&B Cold Air Intake (L5P Specific)', 'aFe Momentum HD Pro 10R', 'Volant Heavy Duty Box'],
        filterStyles: ['Extreme Duty Oiled Cotton (Max CFM)', 'Dry Extend Multi-Layer (Dust & Job Site)'],
        intakeBenefits: ['Maximizes mass air flow into the L5P variable geometry turbo', 'Direct functional hood scoop integration on supported models', 'Premium silicone couplers withstand extreme heat and pressure'],
        factoryAirboxNote: 'Engineered to mate cleanly with GM factory ram air hood scoop ducting.'
      },
      {
        name: '6.6L Gas HD V8',
        fuelType: 'Gas',
        displacement: '6.6L',
        aspiration: 'Naturally Aspirated',
        popularIntakes: ['S&B Cold Air Intake', 'aFe Momentum GT'],
        filterStyles: ['Oiled Cotton', 'Dry Extend'],
        intakeBenefits: ['Smooth, large-diameter intake tube', 'Consistent cold ambient air delivery under heavy grade climbing'],
        factoryAirboxNote: 'Direct bolt-on replacing factory baffled airbox assembly.'
      }
    ]
  },

  // GMC
  {
    id: 'gmc-sierra-1500',
    make: 'GMC',
    model: 'Sierra 1500 (inc. AT4 & Denali)',
    yearRange: '2020 - 2025+',
    is2020Plus: true,
    category: 'Full-Size',
    heroImage: '/images/gas-diesel-trucks.jpg',
    tagline: 'Refined performance intake packages for Sierra 5.3L, 6.2L, and 3.0L Duramax trucks.',
    overview: 'The GMC Sierra combines premium craftsmanship with heavy capability. We source intake systems that look clean and purposeful under the hood while providing unrestricted airflow for work, highway towing, and off-road builds.',
    availableBrands: ['S&B Filters', 'aFe POWER', 'Volant', 'K&N', 'AEM'],
    estimatedInstallTime: '45 - 60 mins',
    engines: [
      {
        name: '6.2L / 5.3L EcoTec3 V8',
        fuelType: 'Gas',
        displacement: '6.2L / 5.3L',
        aspiration: 'Naturally Aspirated',
        popularIntakes: ['S&B Cold Air Intake with Clear Lid', 'aFe Momentum GT', 'Volant PowerCore Closed Box'],
        filterStyles: ['Oiled Cleanable', 'Dry Extend'],
        intakeBenefits: ['Improved induction acoustics when opening up throttle', 'Thermally insulated rotomolded airbox', 'OEM grade fit and finish'],
        factoryAirboxNote: 'Utilizes factory lower airbox mount locations and fender inlet.'
      },
      {
        name: '3.0L Duramax Turbo Diesel I-6',
        fuelType: 'Diesel',
        displacement: '3.0L',
        aspiration: 'Turbocharged',
        popularIntakes: ['S&B Duramax 3.0L Intake', 'aFe Momentum HD'],
        filterStyles: ['Dry Extend Synthetic', 'Oiled Cleanable'],
        intakeBenefits: ['Responsive low-end turbo spool', 'High particulate holding capacity for extended intervals'],
        factoryAirboxNote: 'Retains all factory crankcase ventilation and sensor connections.'
      }
    ]
  },
  {
    id: 'gmc-sierra-2500-3500-hd',
    make: 'GMC',
    model: 'Sierra 2500 / 3500 HD (AT4 / Denali)',
    yearRange: '2020 - 2025+',
    is2020Plus: true,
    category: 'Heavy Duty',
    heroImage: '/images/installation-bay.jpg',
    tagline: 'Heavy-duty cold air induction engineered for the Allison 10-speed and Duramax powertrain.',
    overview: 'GMC Sierra 2500/3500 HD trucks are built for the toughest towing assignments. Air Werks installs sealed intake systems that isolate incoming air from high underhood temperatures, feeding cooler, denser air to the turbocharger.',
    availableBrands: ['S&B Filters', 'aFe POWER', 'K&N Heavy Duty', 'Volant'],
    estimatedInstallTime: '60 - 75 mins',
    engines: [
      {
        name: '6.6L Duramax L5P Turbo Diesel V8',
        fuelType: 'Diesel',
        displacement: '6.6L',
        aspiration: 'Turbocharged',
        popularIntakes: ['S&B 75-5139 Cold Air Intake', 'aFe Momentum HD Pro 10R', 'Volant HD Closed Box'],
        filterStyles: ['Oiled Cleanable Filter (Max CFM)', 'Dry Extend Heavy-Duty Filter'],
        intakeBenefits: ['Optimized flow to feed the variable vane turbo', 'Retains factory hood scoop intake path', 'Massive filtration surface area'],
        factoryAirboxNote: 'Integrates with GMC active hood scoop ducting for true ram-air induction.'
      }
    ]
  },

  // RAM
  {
    id: 'ram-1500',
    make: 'RAM',
    model: 'Ram 1500 (Classic & New Body)',
    yearRange: '2019 - 2025+',
    is2020Plus: true,
    category: 'Full-Size',
    heroImage: '/images/ram-hd.jpg',
    tagline: 'Aggressive induction systems for 5.7L HEMI V8s and 3.0L EcoDiesels.',
    overview: 'The Ram 1500 platform responds exceptionally well to cold air intake upgrades. We source systems that replace restrictive accordion ducting and undersized factory paper filters with high-volume rotomolded tubes and high-efficiency filters.',
    availableBrands: ['S&B Filters', 'aFe POWER', 'K&N', 'Volant', 'AEM'],
    estimatedInstallTime: '45 - 60 mins',
    engines: [
      {
        name: '5.7L HEMI V8 (eTorque & Standard)',
        fuelType: 'Gas',
        displacement: '5.7L',
        aspiration: 'Naturally Aspirated',
        popularIntakes: ['S&B Ram 1500 Cold Air Intake', 'aFe Momentum GT Pro 5R', 'K&N Series 63 AirCharger'],
        filterStyles: ['8-Ply Oiled Cotton Filter', 'Dry Extend Cleanable Synthetic'],
        intakeBenefits: ['Iconic deep HEMI induction roar under acceleration', 'Smooth mandrel/molded intake transition to throttle body', 'Sealed airbox with clear acrylic inspection window'],
        factoryAirboxNote: 'Draws fresh air from the front fenderwell and active grille shutters.'
      },
      {
        name: '3.0L EcoDiesel V6',
        fuelType: 'Diesel',
        displacement: '3.0L',
        aspiration: 'Turbocharged',
        popularIntakes: ['S&B EcoDiesel Cold Air Intake', 'aFe Momentum HD'],
        filterStyles: ['Dry Extend Synthetic', 'Oiled Cleanable'],
        intakeBenefits: ['Smoother turbo transition and spool characteristics', 'High dirt holding capacity for long haul towing'],
        factoryAirboxNote: 'Maintains factory sensor placement and PCV connections.'
      }
    ]
  },
  {
    id: 'ram-2500-3500-hd',
    make: 'RAM',
    model: 'Ram 2500 / 3500 Heavy Duty',
    yearRange: '2019 - 2025+',
    is2020Plus: true,
    category: 'Heavy Duty',
    heroImage: 'https://images.pexels.com/photos/34188801/pexels-photo-34188801.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tagline: 'Engineered for the high-torque demands of the 6.7L Cummins Turbo Diesel and 6.4L HEMI.',
    overview: 'The Cummins 6.7L inline-six diesel requires enormous volumes of clean air, especially under sustained heavy towing up mountain passes. We install heavy-duty sealed airboxes with oversized filters that withstand extreme vacuum and pressure cycles.',
    availableBrands: ['S&B Filters', 'aFe POWER', 'K&N Heavy Duty', 'Volant'],
    estimatedInstallTime: '60 - 75 mins',
    engines: [
      {
        name: '6.7L Cummins Turbo Diesel I-6 (Standard & High Output)',
        fuelType: 'Diesel',
        displacement: '6.7L',
        aspiration: 'Turbocharged',
        popularIntakes: ['S&B Cold Air Intake for Cummins 6.7L', 'aFe Momentum HD Pro 10R', 'Volant Closed Box System'],
        filterStyles: ['Dry Extend Synthetic (Job Site / Fleet)', 'Oiled Cotton Cleanable (High Flow)'],
        intakeBenefits: ['Significantly reduced intake air restriction into turbo inlet', 'Distinct turbo whistle and wastegate sound', 'Built with premium silicone couplers that won’t crack or collapse'],
        factoryAirboxNote: 'Replaces factory airbox while retaining factory active air ram valve on equipped models.'
      },
      {
        name: '6.4L Heavy-Duty HEMI V8',
        fuelType: 'Gas',
        displacement: '6.4L',
        aspiration: 'Naturally Aspirated',
        popularIntakes: ['S&B Cold Air Intake for 6.4L HEMI', 'aFe Momentum GT'],
        filterStyles: ['Oiled Cotton', 'Dry Extend'],
        intakeBenefits: ['Uncorks the large 392 ci engine induction note', 'Shielded composite box resists underhood exhaust heat'],
        factoryAirboxNote: 'Simple bolt-on installation using factory mounting grommets.'
      }
    ]
  },

  // TOYOTA
  {
    id: 'toyota-tacoma',
    make: 'Toyota',
    model: 'Tacoma',
    yearRange: '2016 - 2025+',
    is2020Plus: true,
    category: 'Mid-Size',
    heroImage: '/images/toyota-tacoma.jpg',
    tagline: 'Overland and trail-proven cold air intake systems for 4th-Gen and 3rd-Gen Tacomas.',
    overview: 'Toyota Tacomas are legendary overland and trail platforms. Air Werks installs rugged, dust-tight sealed cold air intake systems that isolate the engine from water splash, trail dust, and heat while delivering improved throttle response.',
    availableBrands: ['S&B Filters', 'aFe POWER', 'K&N', 'Volant', 'AEM'],
    estimatedInstallTime: '45 - 60 mins',
    engines: [
      {
        name: '2.4L i-FORCE / i-FORCE MAX Turbo (2024+ 4th Gen)',
        fuelType: 'Gas',
        displacement: '2.4L',
        aspiration: 'Turbocharged',
        popularIntakes: ['S&B Sealed Intake for 2024+ Tacoma', 'aFe Momentum GT Turbo'],
        filterStyles: ['Dry Extend Synthetic (Dust/Offroad)', 'Oiled Cleanable'],
        intakeBenefits: ['Quick-reacting turbo spool on technical trails', 'Fully sealed airbox with side fender inlet', 'Retains all factory emissions and turbo pressure sensors'],
        factoryAirboxNote: 'Custom-molded for the new TNGA-F truck platform engine bay.'
      },
      {
        name: '3.5L DOHC V6 (2016 - 2023 3rd Gen)',
        fuelType: 'Gas',
        displacement: '3.5L',
        aspiration: 'Naturally Aspirated',
        popularIntakes: ['S&B Cold Air Intake for Tacoma 3.5L', 'aFe Magnum FORCE Stage-2 Pro DRY S', 'Volant Closed Box'],
        filterStyles: ['Dry Extend (Recommended for desert/overland)', 'Oiled Cotton'],
        intakeBenefits: ['Smoother power delivery across mid-range RPM', 'Rugged airtight silicone box seal keeps out sand and fine dust', 'Great engine bay appearance'],
        factoryAirboxNote: 'Connects cleanly to factory passenger fender inner well duct.'
      }
    ]
  },
  {
    id: 'toyota-tundra',
    make: 'Toyota',
    model: 'Tundra (3rd Gen & 2nd Gen)',
    yearRange: '2020 - 2025+',
    is2020Plus: true,
    category: 'Full-Size',
    heroImage: 'https://images.pexels.com/photos/12021863/pexels-photo-12021863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    tagline: 'Twin-turbo intake systems for 3.4L i-FORCE MAX and high-output 5.7L V8 systems.',
    overview: 'The latest Toyota Tundra features a twin-turbocharged 3.4L V6 requiring dual intake boxes and dual runner plumbing. Air Werks installs specialized dual-airbox intake packages engineered for balanced twin-turbo induction.',
    availableBrands: ['S&B Filters', 'aFe POWER', 'K&N', 'Volant'],
    estimatedInstallTime: '60 - 90 mins',
    engines: [
      {
        name: '3.4L i-FORCE / i-FORCE MAX Twin-Turbo V6 (2022+)',
        fuelType: 'Gas',
        displacement: '3.4L',
        aspiration: 'Twin-Turbocharged',
        popularIntakes: ['S&B Dual Cold Air Intake System (Twin Box)', 'aFe Momentum GT Dual Intake'],
        filterStyles: ['Dual Dry Extend Synthetic', 'Dual Oiled Cleanable Cotton'],
        intakeBenefits: ['Independent sealed boxes for each turbocharger bank', 'Reduced pressure drop across twin turbo inlets', 'Impressive twin-filter aesthetic with dual clear inspection lids'],
        factoryAirboxNote: 'Replaces both left and right factory airboxes with matched high-flow sealed units.'
      },
      {
        name: '5.7L i-FORCE V8 (2014 - 2021)',
        fuelType: 'Gas',
        displacement: '5.7L',
        aspiration: 'Naturally Aspirated',
        popularIntakes: ['S&B High-Flow Intake', 'aFe Momentum GT', 'K&N Series 63'],
        filterStyles: ['Oiled Cotton', 'Dry Extend'],
        intakeBenefits: ['Smooth intake sound with healthy V8 roar under load', 'Large filter surface area for long service life'],
        factoryAirboxNote: 'Replaces factory airbox with rotomolded sealed box pulling fresh air from front fender.'
      }
    ]
  }
];

export const VEHICLE_BRANDS = [
  { id: 'ford', name: 'Ford', count: 'F-150, F-250, F-350, Super Duty, Ranger' },
  { id: 'chevrolet', name: 'Chevrolet', count: 'Silverado 1500, 2500 HD, 3500 HD, Colorado' },
  { id: 'gmc', name: 'GMC', count: 'Sierra 1500, 2500 HD, 3500 HD, Canyon, AT4, Denali' },
  { id: 'ram', name: 'RAM', count: 'Ram 1500, 2500, 3500, Heavy Duty, TRX' },
  { id: 'toyota', name: 'Toyota', count: 'Tacoma, Tundra, 4Runner' }
];
