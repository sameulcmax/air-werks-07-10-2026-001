export interface InstallationCase {
  id: string;
  vehicle: string;
  year: string;
  engine: string;
  fuelType: 'Gas' | 'Diesel';
  brand: string;
  intakeType: string;
  filterMedia: string;
  image: string;
  useCase: string;
  installHighlights: string[];
  ownerGoal: string;
}

export const INSTALLATION_CASES: InstallationCase[] = [
  {
    id: 'install-f250-powerstroke',
    vehicle: 'Ford F-250 Super Duty Tremor',
    year: '2023',
    engine: '6.7L High-Output Power Stroke Turbo Diesel V8',
    fuelType: 'Diesel',
    brand: 'S&B Filters',
    intakeType: 'Enclosed Cold Air System with Clear Lid',
    filterMedia: 'Dry Extend Synthetic Media (Dust & Towing)',
    image: '/images/hero-truck.jpg',
    useCase: 'Heavy Fifth-Wheel Towing & Overland Trips',
    ownerGoal: 'Maximize turbo airflow under heavy mountain towing while ensuring easy filter inspection before long trips.',
    installHighlights: [
      'Clean removal of factory multi-piece baffled airbox assembly',
      'Direct fitment onto lower factory chassis mounting grommets',
      'Factory MAF sensor transferred and torqued to precision spec',
      'Clear acrylic sight window sealed with custom silicone gasket'
    ]
  },
  {
    id: 'install-ram-2500-cummins',
    vehicle: 'RAM 2500 Heavy Duty Laramie',
    year: '2022',
    engine: '6.7L Cummins Turbo Diesel I-6',
    fuelType: 'Diesel',
    brand: 'aFe POWER',
    intakeType: 'Momentum HD Sealed Induction System',
    filterMedia: 'Pro 10R 10-Layer Heavy-Duty Media',
    image: '/images/ram-hd.jpg',
    useCase: 'Commercial Hot-Shot Hauling',
    ownerGoal: 'Durable heavy-duty intake housing capable of high continuous airflow with zero filter collapse under heavy boost.',
    installHighlights: [
      'Retained factory Active Air intake valve functionality',
      'Heavy-duty silicone bellows coupler installed on turbo inlet',
      'Clamp torques verified to prevent boost leakage or unmetered air draw',
      'Intake temperature telemetry checked during post-install road validation'
    ]
  },
  {
    id: 'install-silverado-62',
    vehicle: 'Chevrolet Silverado 1500 RST',
    year: '2024',
    engine: '6.2L EcoTec3 V8 with 10-Speed Transmission',
    fuelType: 'Gas',
    brand: 'S&B Filters',
    intakeType: 'Enclosed Composite Box with Custom Air Scoop Interface',
    filterMedia: '8-Ply Cleanable Oiled Cotton Filter',
    image: '/images/chevy-silverado.jpg',
    useCase: 'Daily Driver & Performance Street Truck',
    ownerGoal: 'Sharpen throttle response off-the-line and unlock the V8 induction sound without in-cab drone.',
    installHighlights: [
      'Integrated smoothly with GM front grille fresh-air scoop duct',
      'Zero check engine light (CEL) calibration alignment',
      'Engineered rotomolded tube provides unrestricted smooth air path to throttle body'
    ]
  },
  {
    id: 'install-toyota-tacoma',
    vehicle: 'Toyota Tacoma TRD Off-Road',
    year: '2023',
    engine: '3.5L DOHC V6',
    fuelType: 'Gas',
    brand: 'Volant Performance',
    intakeType: 'Closed Box with Silicone Fender Seal',
    filterMedia: 'Donaldson PowerCore Fluted Synthetic (Oil-Free)',
    image: '/images/toyota-tacoma.jpg',
    useCase: 'Desert Overlanding & Trail Camping',
    ownerGoal: 'Airtight sealed airbox that prevents fine silt and desert sand from bypassing the filter media.',
    installHighlights: [
      'Fitted tightly to passenger inner fender fresh air inlet',
      'Airtight silicone seal between composite airbox and fender liner',
      'Zero oil required, perfect for dry dusty desert environments'
    ]
  },
  {
    id: 'install-gmc-sierra-at4',
    vehicle: 'GMC Sierra 2500 HD AT4',
    year: '2024',
    engine: '6.6L Duramax L5P Turbo Diesel V8',
    fuelType: 'Diesel',
    brand: 'S&B Filters',
    intakeType: 'Hood Scoop Integrated Cold Air Intake',
    filterMedia: 'Dry Extend Synthetic Media',
    image: '/images/installation-bay.jpg',
    useCase: 'Towing Equipment Trailer & Hunting Rig',
    ownerGoal: 'Direct integration with GMC active functional hood scoop for genuine ram-air charge cooling.',
    installHighlights: [
      'Clean interface with underside hood ram-air gasket seal',
      'High-capacity pleated filter elements handles heavy dusty gravel roads',
      'Visual clear lid allows inspection without unclipping airbox'
    ]
  },
  {
    id: 'install-ford-f150-ecoboost',
    vehicle: 'Ford F-150 SuperCrew FX4',
    year: '2024',
    engine: '3.5L EcoBoost Twin-Turbo V6',
    fuelType: 'Gas',
    brand: 'aFe POWER',
    intakeType: 'Momentum GT Dual Runner Sealed Induction',
    filterMedia: 'Pro 5R Oiled Cleanable Filter',
    image: 'https://images.pexels.com/photos/10306505/pexels-photo-10306505.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    useCase: 'Work Truck & Weekend Boat Towing',
    ownerGoal: 'Reduce twin-turbo spool lag when merging and towing boat ramps.',
    installHighlights: [
      'Dual intake runner tubes matched to twin turbo compressor housings',
      'Factory crankcase and PCV quick-connect fittings re-engaged cleanly',
      'Instant improvement in throttle tip-in feel'
    ]
  }
];
