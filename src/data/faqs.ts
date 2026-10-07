export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Fitment & Tech' | 'Installation' | 'Warranty';
}

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'General',
    question: 'How does Air Werks operate? Can I buy just the intake, or is installation included?',
    answer: 'Air Werks specializes in sourcing the right cold-air intake system for your specific truck, engine, and build requirements, and providing professional, clean installation. We guide you through fitment, source verified components from trusted brands (S&B, aFe, K&N, Volant, AEM), and schedule a dedicated installation slot.'
  },
  {
    category: 'Fitment & Tech',
    question: 'Why do you focus heavily on 2020+ trucks?',
    answer: 'Modern 2020+ trucks feature complex electronic engine management systems, dual-turbo plumbing, active grille shutters, and sensitive mass airflow sensors. Sourcing intakes with exact sensor housing cross-sections and factory duct integration is essential to ensure maximum airflow without check engine light warnings or lean fuel trims.'
  },
  {
    category: 'Fitment & Tech',
    question: 'What is the difference between an Oiled filter and a Dry filter?',
    answer: 'Oiled filters (like 8-ply cotton gauze) use tackifying oil to trap fine dust while maximizing high-volume CFM airflow for performance street and highway driving; they are washed and re-oiled during service. Dry synthetic filters use dense multi-layer synthetic fibers to trap particulates without oil, making them ideal for heavy dust, job sites, desert overlanding, and easy blowout maintenance.'
  },
  {
    category: 'Fitment & Tech',
    question: 'Do I need an aftermarket tune or ECU reflash to run a cold air intake?',
    answer: 'No. The intake systems Air Werks sources are engineered to bolt directly onto factory sensor calibrations and factory ECU maps. No aftermarket tuning or ECU flashing is required to enjoy the benefits of improved airflow, throttle response, and intake acoustics.'
  },
  {
    category: 'Warranty',
    question: 'Will installing a cold air intake void my new truck manufacturer warranty?',
    answer: 'Under the US Magnuson-Moss Warranty Act, automotive manufacturers and dealerships cannot void your factory warranty simply because an aftermarket part is installed. The intake systems we source utilize factory mounting points and OEM sensor interfaces without cutting or modifying original vehicle wiring.'
  },
  {
    category: 'Installation',
    question: 'How long does a professional cold air intake installation take?',
    answer: 'Most gas truck installations take approximately 45 to 60 minutes. Heavy-duty diesel systems or twin-turbo dual-airbox configurations (such as Ford Power Stroke or 2022+ Tundra) typically take 60 to 75 minutes. Every installation includes a pre-install inspection, precision sensor transfer, clamp torque verification, and post-install inspection.'
  },
  {
    category: 'Installation',
    question: 'How do I request a quote or book an installation appointment?',
    answer: 'Simply use our Request a Quote or Vehicle Finder tool to tell us your truck year, make, model, engine, and fuel type. We will review your build, confirm the available intake options and pricing for your specific platform, and provide next steps for your installation.'
  }
];
