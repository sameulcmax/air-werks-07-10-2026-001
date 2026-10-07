export interface IntakeTopic {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  recommendation: string;
}

export const INTAKE_EDUCATION = {
  whatItDoes: {
    title: 'How a Cold Air Intake Works',
    summary: 'A cold air intake system replaces restrictive factory airboxes, convoluted corrugated rubber tubes, and dense paper filters with a streamlined induction path and high-efficiency filtration media.',
    principles: [
      {
        title: 'Thermal Isolation (Lower IATs)',
        desc: 'Engine bays frequently reach 180°F–220°F. Factory airboxes often draw heated air trapped behind the radiator. A sealed cold air intake draws cooler ambient air from outside the engine bay (fenderwells or front grille ducts). Cooler air is denser, containing more oxygen molecules per cubic foot.'
      },
      {
        title: 'Reduced Flow Restriction (CFM Velocity)',
        desc: 'Factory intake pipes use baffled accordion resonators to muffle engine sound. A smooth rotomolded or mandrel-bent intake tube eliminates internal turbulence, allowing the engine or turbocharger to draw air with significantly lower vacuum resistance.'
      },
      {
        title: 'High-Surface-Area Filtration',
        desc: 'Precision pleated multi-layer filters provide up to 2x to 3x the surface area of a standard flat paper panel filter, sustaining airflow velocity without sacrificing micron-level dirt trapping efficiency.'
      }
    ]
  },
  intakeTypes: [
    {
      type: 'Fully Enclosed Cold Air Boxes',
      idealFor: 'Daily Drivers, Towing, Heavy Duty Diesel, Modern 2020+ Trucks',
      pros: ['Complete thermal shield against underhood radiant heat', 'Protects filter from road spray, engine wash, and debris', 'Maintains calibrated mass-airflow velocity', 'Often features clear inspection lid for quick health checks'],
      cons: ['Slightly quieter induction volume than open shield systems'],
      verdict: 'The Air Werks recommended choice for 90% of modern truck builds.'
    },
    {
      type: 'Open Shielded Intake Systems',
      idealFor: 'Performance Street Builds, Enthusiast Acoustic Priority',
      pros: ['Maximizes unbaffled induction acoustic growl and turbo whistle', 'Large open filter visual aesthetic under the hood', 'High raw intake volume at high RPM'],
      cons: ['More susceptible to ambient underhood heat soak at low speeds or idle'],
      verdict: 'Great for street performance trucks where aggressive intake sound is top priority.'
    }
  ],
  filterMediaComparison: [
    {
      name: 'Oiled Cotton Gauze (Cleanable)',
      layers: '5 to 8 Cotton Gauze Pleats with Tackifying Oil',
      maintenance: 'Wash and re-oil every 20,000 to 30,000 miles (or severe duty intervals)',
      bestFor: 'Maximum airflow CFM performance, street driving, highway towing',
      benefit: 'Tackifying oil captures microscopic particles while maintaining high flow rates through the cotton weave.'
    },
    {
      name: 'Dry Synthetic Media (Extend / Oil-Free)',
      layers: 'Multi-Density Non-Woven Synthetic Fibers',
      maintenance: 'Vacuum or blow with low-pressure air, or replace when saturated (no oil required)',
      bestFor: 'Job sites, desert off-roading, dusty agricultural use, fleet maintenance simplicity',
      benefit: 'Zero risk of over-oiling MAF sensors and effortless cleaning with no drying time.'
    }
  ],
  gasVsDiesel: {
    gas: {
      headline: 'Gasoline Truck Applications (V6, V8, EcoBoost)',
      points: [
        'Naturally aspirated V8s (5.0L Coyote, 5.7L/6.4L HEMI, 5.3L/6.2L EcoTec3, 7.3L Godzilla) benefit from immediate throttle response and a deep, authoritative induction sound.',
        'Twin-turbo gas engines (3.5L/2.7L EcoBoost, 3.4L i-FORCE MAX) see reduced spool lag into the turbo compressor inlets.',
        'Precision MAF sensor housings ensure factory air/fuel trims remain within OEM calibration parameters with no tune required.'
      ]
    },
    diesel: {
      headline: 'Heavy-Duty Diesel Applications (Power Stroke, Duramax, Cummins)',
      points: [
        'Turbo diesel engines do not operate with a throttle butterfly valve; they consume massive continuous volumetric CFM under load.',
        'Heavy-duty sealed intakes lower the vacuum depression in front of the turbo inlet, allowing the turbocharger to work with greater aerodynamic efficiency when pulling heavy payloads.',
        'Extreme duty silicone couplers withstand high underhood vibration and boost pressure without collapsing or deteriorating.'
      ]
    }
  },
  realisticExpectations: [
    {
      myth: 'Guaranteed 50+ Horsepower with just an intake',
      reality: 'Modern cold air intakes improve airflow efficiency, throttle responsiveness, and intake acoustics, while helping complementary modifications (exhaust, tuning, towing setups) perform at their peak. We give you honest, realistic expectations tailored to your specific truck and engine.'
    },
    {
      myth: 'Cold air intakes void your manufacturer warranty',
      reality: 'Under the federal Magnuson-Moss Warranty Act, an aftermarket cold air intake cannot void your vehicle warranty unless the dealer proves the aftermarket part directly caused a specific failure. We install quality systems that retain factory sensor positions and mounting points.'
    },
    {
      myth: 'All filters need messy oiling every few months',
      reality: 'We source both Oiled and Dry Synthetic options. If you prefer low maintenance, Dry Extend filters require no oil at all.'
    }
  ]
};
