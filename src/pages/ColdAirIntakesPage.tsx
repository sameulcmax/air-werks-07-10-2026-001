import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { INTAKE_EDUCATION } from '../data/intakes';
import { 
  Wind, 
  Flame, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Sliders, 
  ArrowRight,
  ThermometerSnowflake,
  Layers
} from 'lucide-react';

interface ColdAirIntakesPageProps {
  onOpenQuote: () => void;
  onNavigate: (page: string) => void;
}

export const ColdAirIntakesPage: React.FC<ColdAirIntakesPageProps> = ({
  onOpenQuote,
  onNavigate
}) => {
  return (
    <div className="pt-24 pb-20 space-y-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <SectionHeading
          badge="INDUCTION SCIENCE & TECHNOLOGY"
          title="COLD AIR INTAKES."
          highlight="BUILT FOR YOUR TRUCK."
          subtitle="Understanding airflow dynamics, filter media choices, and thermal management for modern pickup platforms."
          alignment="center"
        />

        <div className="relative mt-12 rounded-3xl overflow-hidden border border-[#2E3743] bg-[#11151A] max-w-5xl mx-auto aspect-[21/9]">
          <img
            src="/images/intake-components.jpg"
            alt="Cold Air Intake Components and Filtration Media"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-[#080A0D]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-white font-bold">
              High-Flow Synthetic Media & Rotomolded Velocity Tubes
            </span>
            <span className="text-[#078FE8] font-bold">
              ISO 5011 Filtration Efficiency
            </span>
          </div>
        </div>
      </section>

      {/* 1. What Cold Air Intakes Do */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11151A] rounded-3xl border border-[#2E3743] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-[#078FE8] uppercase font-bold tracking-widest block mb-2">
              FOUNDATIONAL PRINCIPLE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              WHAT DOES A COLD AIR INTAKE ACTUALLY DO?
            </h2>
            <p className="text-sm sm:text-base text-[#B9C0C8] mt-3 leading-relaxed">
              {INTAKE_EDUCATION.whatItDoes.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#2E3743]">
            {INTAKE_EDUCATION.whatItDoes.principles.map((p, idx) => (
              <div key={idx} className="bg-[#181D24] p-6 rounded-2xl border border-[#2E3743]/60 space-y-3">
                <div className="p-3 w-fit rounded-xl bg-[#080A0D] text-[#078FE8]">
                  {idx === 0 ? <ThermometerSnowflake className="w-5 h-5" /> : idx === 1 ? <Wind className="w-5 h-5" /> : <Layers className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-bold text-white font-heading">
                  {p.title}
                </h3>
                <p className="text-xs text-[#B9C0C8] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Closed Box vs Open Systems */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="HOUSING ARCHITECTURE"
          title="CLOSED VS OPEN SYSTEMS"
          subtitle="Choosing the right airbox design depends on your vehicle application, environmental conditions, and acoustic goals."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {INTAKE_EDUCATION.intakeTypes.map((type, idx) => (
            <div
              key={idx}
              className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-[#078FE8]/15 border border-[#078FE8]/30 text-[#078FE8] text-xs font-mono font-bold uppercase">
                    Architecture Type
                  </span>
                  <Sliders className="w-5 h-5 text-[#8A939E]" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {type.type}
                </h3>

                <p className="text-xs text-[#078FE8] font-mono font-bold">
                  Ideal For: <span className="text-white font-normal">{type.idealFor}</span>
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-mono text-[#8A939E] uppercase block font-bold">
                    Key Characteristics:
                  </span>
                  <ul className="space-y-2 text-xs text-[#F7F9FC]">
                    {type.pros.map((pro, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#181D24] border border-[#2E3743] text-xs">
                <strong className="text-white font-mono block mb-0.5">Air Werks Recommendation:</strong>
                <span className="text-[#B9C0C8]">{type.verdict}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Filter Media Types: Oiled vs Dry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FILTRATION MEDIA"
          title="OILED COTTON VS DRY SYNTHETIC"
          subtitle="Both filter styles offer substantial improvements over factory paper. Here is how they compare in maintenance and airflow."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {INTAKE_EDUCATION.filterMediaComparison.map((filter, fIdx) => (
            <div
              key={fIdx}
              className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase ${
                  fIdx === 0 ? 'bg-[#078FE8]/20 text-[#078FE8]' : 'bg-white/10 text-white'
                }`}>
                  {fIdx === 0 ? 'Maximum Flow' : 'Low Maintenance'}
                </span>
                <Layers className="w-5 h-5 text-[#078FE8]" />
              </div>

              <h3 className="text-xl font-bold text-white">
                {filter.name}
              </h3>

              <p className="text-xs text-[#B9C0C8] leading-relaxed">
                {filter.benefit}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-[#2E3743] text-xs">
                <div>
                  <span className="text-[#8A939E] font-mono uppercase block text-[10px]">Filter Construction</span>
                  <span className="text-white font-medium">{filter.layers}</span>
                </div>
                <div>
                  <span className="text-[#8A939E] font-mono uppercase block text-[10px]">Maintenance Protocol</span>
                  <span className="text-white font-medium">{filter.maintenance}</span>
                </div>
                <div>
                  <span className="text-[#8A939E] font-mono uppercase block text-[10px]">Recommended Use Cases</span>
                  <span className="text-[#078FE8] font-medium">{filter.bestFor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Gas vs Diesel Induction Mechanics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11151A] rounded-3xl border border-[#2E3743] p-6 sm:p-10 lg:p-12 space-y-8">
          <div>
            <span className="text-xs font-mono text-[#078FE8] uppercase font-bold tracking-widest block mb-2">
              POWERTRAIN COMPARISON
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              GASOLINE VS DIESEL INTAKE DYNAMICS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gas mechanics */}
            <div className="bg-[#181D24] p-6 rounded-2xl border border-[#2E3743] space-y-4">
              <div className="flex items-center gap-2">
                <Wind className="w-5 h-5 text-[#078FE8]" />
                <h3 className="text-lg font-bold text-white">
                  {INTAKE_EDUCATION.gasVsDiesel.gas.headline}
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs text-[#B9C0C8]">
                {INTAKE_EDUCATION.gasVsDiesel.gas.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#078FE8] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diesel mechanics */}
            <div className="bg-[#181D24] p-6 rounded-2xl border border-[#2E3743] space-y-4">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-white">
                  {INTAKE_EDUCATION.gasVsDiesel.diesel.headline}
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs text-[#B9C0C8]">
                {INTAKE_EDUCATION.gasVsDiesel.diesel.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Realistic Expectations & Myth Busting */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TRANSPARENT ENGINEERING"
          title="REALISTIC EXPECTATIONS"
          subtitle="Air Werks operates on authentic performance engineering. Here is what to realistically expect from a cold air intake system."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {INTAKE_EDUCATION.realisticExpectations.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 space-y-4"
            >
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Common Myth
              </div>
              <p className="text-sm font-bold text-white italic">
                "{item.myth}"
              </p>

              <div className="pt-3 border-t border-[#2E3743] space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  Air Werks Fact
                </div>
                <p className="text-xs text-[#B9C0C8] leading-relaxed">
                  {item.reality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Not Sure What Fits CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#11151A] via-[#181D24] to-[#11151A] rounded-3xl border border-[#2E3743] p-8 sm:p-12 text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#078FE8] uppercase">
            EXPERT FITMENT ADVICE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            NOT SURE WHAT FITS YOUR TRUCK?
          </h2>
          <p className="text-sm sm:text-base text-[#B9C0C8] max-w-xl mx-auto">
            Our specialists review your truck model, engine code, and driving requirements to match the perfect intake system.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white font-mono font-bold text-sm tracking-wider shadow-lg shadow-[#078FE8]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              TALK TO AIR WERKS
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('vehicles')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1B2026] hover:bg-[#222832] text-white border border-[#2E3743] font-mono font-bold text-sm tracking-wider transition-colors cursor-pointer"
            >
              BROWSE TRUCK APPLICATIONS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
