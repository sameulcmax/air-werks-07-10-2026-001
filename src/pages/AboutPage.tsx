import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { 
  Wrench, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Sliders,
  Scale,
  Gauge
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: () => void;
  onNavigate?: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenQuote
}) => {
  const values = [
    {
      title: 'FITMENT',
      subtitle: 'Zero Guesswork Sourcing',
      desc: 'We match intakes based strictly on exact vehicle year, engine code, and induction clearance. If a system does not fit cleanly or risks throwing sensor trouble codes, we will not source or install it.',
      icon: Sliders
    },
    {
      title: 'QUALITY',
      subtitle: 'Proven Materials',
      desc: 'We prioritize cross-link rotomolded polyethylene housings, premium silicone couplers, optical clear acrylic sight windows, and laboratory-tested filter media.',
      icon: Award
    },
    {
      title: 'TRANSPARENCY',
      subtitle: 'Honest Expectations',
      desc: 'No exaggerated 50-horsepower marketing claims. We give you realistic guidance on throttle response, induction acoustics, towing thermal control, and filter maintenance.',
      icon: Scale
    },
    {
      title: 'PERFORMANCE',
      subtitle: 'Engineered Airflow',
      desc: 'Lowering intake air restriction and isolating hot engine bay temperatures allows your truck powertrain to breathe cleaner, cooler ambient air under all driving demands.',
      icon: Gauge
    },
    {
      title: 'CRAFTSMANSHIP',
      subtitle: 'Clean Bay Standards',
      desc: 'Every installation is carried out with calibrated torque tools, factory harness retention clips, and careful component alignment to ensure your engine bay looks immaculate.',
      icon: Wrench
    }
  ];

  return (
    <div className="pt-24 pb-20 space-y-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <SectionHeading
          badge="THE AIR WERKS MISSION"
          title="BUILT AROUND THE WAY"
          highlight="TRUCK OWNERS BUILD."
          subtitle="AIR WERKS IS BUILT FOR TRUCK OWNERS WHO CARE ABOUT WHAT GOES UNDER THE HOOD."
          alignment="center"
        />

        <div className="relative mt-12 rounded-3xl overflow-hidden border border-[#2E3743] bg-[#11151A] max-w-5xl mx-auto aspect-[16/8]">
          <img
            src="/images/gas-diesel-trucks.jpg"
            alt="Modern Performance Pickup Trucks in Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-[#080A0D]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-white font-bold">
              Specialist Cold Air Intake Sales, Sourcing & Installation
            </span>
            <span className="text-[#078FE8] font-bold">
              Gasoline & Heavy-Duty Diesel Platforms
            </span>
          </div>
        </div>
      </section>

      {/* Business Model Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11151A] rounded-3xl border border-[#2E3743] p-6 sm:p-10 lg:p-12 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#078FE8] font-bold">
            HOW WE OPERATE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Specialized Focus Over One-Size-Fits-All Retailing
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#B9C0C8] leading-relaxed">
            <p>
              Rather than running an overwhelming parts warehouse or an impersonal online shopping catalog with thousands of mismatched parts, <strong className="text-white">Air Werks</strong> operates on a focused, service-first model:
            </p>
            <p>
              We specialize in cold-air intake induction systems for modern pickup trucks. We work directly with vehicle owners to identify the exact intake brand and filter configuration suited for their vehicle, source verified authentic kits, and provide clean, professional bay installation.
            </p>
            <p>
              From 2020+ Super Duty Power Strokes and RAM Cummins diesels to EcoBoost twin-turbos and naturally aspirated V8s, our goal is to deliver clean airflow and complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR PRINCIPLES"
          title="FIVE CORE VALUES"
          subtitle="The operational standards that guide every recommendation and installation."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 hover:border-[#078FE8]/50 transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase font-bold text-[#078FE8] px-2.5 py-0.5 rounded bg-[#078FE8]/10">
                    {val.subtitle}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#1B2026] text-[#078FE8]">
                    <val.icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#B9C0C8] leading-relaxed">
                  {val.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#2E3743]/60 flex items-center gap-1.5 text-xs text-[#8A939E] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Air Werks Standard</span>
              </div>
            </div>
          ))}

          {/* Value Action Box */}
          <div className="bg-gradient-to-br from-[#078FE8]/20 to-[#11151A] rounded-2xl border border-[#078FE8]/40 p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#078FE8] px-2.5 py-0.5 rounded bg-[#078FE8]/10">
                READY TO BUILD
              </span>
              <h3 className="text-xl font-bold text-white">
                Experience the Difference
              </h3>
              <p className="text-xs text-[#B9C0C8] leading-relaxed">
                Connect with our intake specialists today to discuss your truck build.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenQuote}
              className="w-full py-3.5 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#078FE8]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              REQUEST A FITMENT QUOTE
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
