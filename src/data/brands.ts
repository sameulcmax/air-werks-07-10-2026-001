export interface BrandInfo {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  description: string;
  sourcingRole: string;
  supportedVehicles: string[];
  intakeStyles: string[];
  filterOptions: string[];
  engineeringHighlights: string[];
}

export const BRAND_DATA: BrandInfo[] = [
  {
    id: 'sb-filters',
    name: 'S&B Filters',
    tagline: 'Precision-Engineered Enclosed Cold Air Intakes & Premium Silicone Components',
    badge: 'Premier Sourced Line',
    description: 'S&B Filters is recognized for their precision-fit enclosed airbox systems featuring clear inspection lids, silicone seals and couplers that resist cracking, and rigorous ISO 5011 filtration efficiency testing.',
    sourcingRole: 'Sourced & Professionally Installed by Air Werks for Ford, Chevy, GMC, RAM & Toyota trucks.',
    supportedVehicles: ['Ford F-150 / Super Duty', 'Chevy Silverado 1500 / HD', 'GMC Sierra 1500 / HD', 'RAM 1500 / 2500 / 3500 HD', 'Toyota Tacoma / Tundra'],
    intakeStyles: ['Fully Enclosed Rotomolded Airboxes', 'Dual-Inlet EcoBoost / Tundra Systems', 'Extreme-Duty Heavy Diesel Boxes'],
    filterOptions: ['8-Ply Cleanable Cotton (Oiled - Red)', 'Dry Extend Multi-Layer Synthetic (White/Gray)'],
    engineeringHighlights: [
      'Clear optical acrylic lid allows visual filter inspection in seconds without tools',
      'Premium grade silicone construction for seals and couplers that resist heat degradation',
      'Maintains factory MAF sensor cross-sectional geometry to prevent lean codes',
      'ISO 5011 laboratory tested for CFM airflow and dust-capacity efficiency'
    ]
  },
  {
    id: 'afe-power',
    name: 'aFe POWER',
    tagline: 'Advanced Flow Engineering — High-Performance Gas & Diesel Induction',
    badge: 'Performance & Diesel Focus',
    description: 'aFe POWER manufactures high-flow cold air intake systems with specialized options for heavy-duty turbo diesels, twin-turbo gasoline engines, and naturally aspirated truck platforms with multiple filter media options.',
    sourcingRole: 'Sourced & Installed for heavy-duty towing, performance street, and off-road applications.',
    supportedVehicles: ['Ford Super Duty 6.7L & F-150', 'RAM Cummins 6.7L & 5.7L HEMI', 'GM Duramax 6.6L & 5.3/6.2L', 'Toyota Tacoma 2.4L / 3.5L'],
    intakeStyles: ['Momentum GT Sealed Cold Air Systems', 'Momentum HD Extreme Diesel Airboxes', 'Magnum FORCE Stage-2 Shielded Systems'],
    filterOptions: ['Pro 5R (5-layer oiled for maximum airflow)', 'Pro DRY S (3-layer oil-free for easy cleaning)', 'Pro 10R (10-layer heavy-duty diesel media)'],
    engineeringHighlights: [
      'Patented filter-to-housing interface minimizes total component count and leakage paths',
      'Dyno-tuned intake velocity tubes engineered for laminar flow acceleration',
      'Auxiliary intake scoop options for high-demand towing setups'
    ]
  },
  {
    id: 'kn-engineering',
    name: 'K&N Engineering',
    tagline: 'The Pioneer of High-Flow Air Filtration & Performance Induction',
    badge: 'Industry Standard High-Flow',
    description: 'K&N delivers high-volume cold air intake packages utilizing their iconic oiled cotton gauze filtration technology and durable heat shields or composite enclosed boxes.',
    sourcingRole: 'Sourced and installed across all major truck makes and legacy applications.',
    supportedVehicles: ['Ford F-Series', 'Chevrolet Silverado', 'GMC Sierra', 'RAM Trucks', 'Toyota Tacoma & Tundra'],
    intakeStyles: ['Series 63 AirCharger High-Flow Systems', 'Series 77 Polished Aluminum Induction', 'Sealed HD Diesel Intakes'],
    filterOptions: ['High-Flow Oiled Cotton Gauze (Washable & Reusable)'],
    engineeringHighlights: [
      'Signature layered cotton gauze engineered for high cubic-feet-per-minute throughput',
      'Direct factory mounting grommet compatibility for straightforward installation',
      'Distinct aggressive induction tone under open throttle'
    ]
  },
  {
    id: 'volant-performance',
    name: 'Volant Performance',
    tagline: 'Closed-Box Performance Intakes & Donaldson PowerCore Filtration',
    badge: 'Extreme Filtration Specialist',
    description: 'Volant specializes in completely sealed composite airboxes engineered to withstand extreme underhood thermal radiation, with optional Donaldson PowerCore synthetic filtration media.',
    sourcingRole: 'Sourced for truck owners in dusty, agricultural, fleet, or severe-duty environments.',
    supportedVehicles: ['Ford Super Duty & F-150', 'Chevy / GMC 1500 & 2500/3500 HD', 'RAM 1500 & 2500/3500'],
    intakeStyles: ['Cross-Link Polyethylene Sealed Airboxes', 'Ram Air Hood Scoop Interconnected Systems'],
    filterOptions: ['Donaldson PowerCore Fluted Synthetic Media (No Oil, Ultra Long Life)', 'Pro 5 Oiled Cotton Filter'],
    engineeringHighlights: [
      'Cross-link polyethylene airbox creates a true thermal barrier against radiant heat',
      'PowerCore filtration media captures microscopic particulates without oiling',
      'Smooth internal radius velocity stacks for low turbulence induction'
    ]
  },
  {
    id: 'aem-induction',
    name: 'AEM Induction Systems',
    tagline: 'Engineered Airflow Dynamics with Oil-Free Dryflow Synthetic Filters',
    badge: 'Dryflow Synthetic Tech',
    description: 'AEM designs cold air intakes that prioritize oil-free synthetic filtration media, making maintenance effortless with water-rinse cleaning and zero risk of sensor oil contamination.',
    sourcingRole: 'Sourced & installed for truck owners seeking zero-maintenance oiled filters.',
    supportedVehicles: ['Ford F-150', 'Chevy Silverado 1500', 'Toyota Tacoma', 'Toyota Tundra'],
    intakeStyles: ['AEM Brute Force HD Intakes', 'Sealed Cold Air Intake Systems'],
    filterOptions: ['AEM Dryflow Synthetic Non-Oiled Media'],
    engineeringHighlights: [
      '100% oil-free Dryflow filter media rinses clean with water and dries quickly',
      'Mandrel-bent powder-coated aluminum or rotomolded induction tubes',
      'Precision mounting brackets and silicone couplers'
    ]
  }
];
