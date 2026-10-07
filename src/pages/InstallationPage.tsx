import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { INSTALLATION_CASES } from '../data/installations';
import { 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  Sliders, 
  Gauge, 
  Award,
  ArrowRight,
  Check
} from 'lucide-react';

interface InstallationPageProps {
  onOpenQuote: () => void;
  onNavigate?: (page: string) => void;
}

export const InstallationPage: React.FC<InstallationPageProps> = ({
  onOpenQuote
}) => {
  const steps = [
    {
      num: '01',
      title: 'VEHICLE CHECK',
      badge: 'Pre-Install Scan',
      desc: 'We perform a baseline visual inspection of your engine bay, check factory harness integrity, disconnect battery terminals when required, and ensure the engine bay is clean before removing any factory components.',
      icon: Search
    },
    {
      num: '02',
      title: 'PRODUCT CONFIRMATION',
      badge: 'Component Audit',
      desc: 'Every intake kit is unboxed and cross-referenced against your specific vehicle VIN, engine code, and build sheet. We inspect silicone couplers, filter pleats, clear lids, and hardware before installation.',
      icon: Sliders
    },
    {
      num: '03',
      title: 'INSTALLATION',
      badge: 'Precision Fitment',
      desc: 'Factory baffled airboxes are carefully unbolted. The new rotomolded cold-air box is seated into factory rubber chassis grommets, and your mass airflow sensor is transferred with calibrated torque specs to prevent sensor damage.',
      icon: Wrench
    },
    {
      num: '04',
      title: 'FINAL INSPECTION',
      badge: 'Torque & Clearances',
      desc: 'All stainless T-bolt and worm clamps are double-checked. We verify minimum 0.5-inch clearance from all moving parts, fan shrouds, brake lines, and hood liners under engine torque flex.',
      icon: Gauge
    },
    {
      num: '05',
      title: 'CUSTOMER HANDOFF',
      badge: 'Road Ready',
      desc: 'We start the engine to verify clean idle and zero check-engine light triggers, then walk you through your filter maintenance intervals (oiled wash cycle vs dry filter vacuum guidelines).',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pt-24 pb-20 space-y-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <SectionHeading
          badge="BAY STANDARDS & CRAFTSMANSHIP"
          title="PROFESSIONAL INSTALLATION."
          highlight="DONE RIGHT."
          subtitle="Buying the right intake is only part of the process. Proper installation ensures sensors are calibrated, clamps are torqued, and cold air is truly isolated."
          alignment="center"
        />

        <div className="relative mt-12 rounded-3xl overflow-hidden border border-[#2E3743] bg-[#11151A] max-w-5xl mx-auto aspect-[16/8]">
          <img
            src="/images/installation-bay.jpg"
            alt="Air Werks Professional Cold Air Intake Installation Bay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D] via-[#080A0D]/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-white font-bold flex items-center gap-2">
              <Award className="w-4 h-4 text-[#078FE8]" />
              Dedicated Truck Bay Protocol
            </span>
            <span className="text-[#078FE8] font-bold">
              Average Bay Time: 45 - 75 Mins
            </span>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PROTOCOL OVERVIEW"
          title="THE 5-STEP AIR WERKS INSTALLATION METHOD"
          subtitle="We treat your truck engine bay with the precision and care it deserves."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {steps.map((st) => (
            <div
              key={st.num}
              className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 hover:border-[#078FE8]/50 transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-black text-[#078FE8]/40 group-hover:text-[#078FE8] transition-colors">
                    {st.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#1B2026] text-[#078FE8]">
                    <st.icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#078FE8] uppercase tracking-wider font-bold">
                    {st.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {st.title}
                  </h3>
                </div>

                <p className="text-xs text-[#B9C0C8] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#2E3743]/60 flex items-center gap-1.5 text-[11px] text-[#8A939E] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Quality Gate</span>
              </div>
            </div>
          ))}

          {/* Book Slot Card */}
          <div className="bg-gradient-to-br from-[#078FE8]/20 to-[#11151A] rounded-2xl border border-[#078FE8]/40 p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-[#078FE8] px-2.5 py-0.5 rounded bg-[#078FE8]/10">
                SCHEDULE YOUR BUILD
              </span>
              <h3 className="text-xl font-bold text-white">
                Book An Installation Appointment
              </h3>
              <p className="text-xs text-[#B9C0C8] leading-relaxed">
                Need your intake professionally fitted? Tell us your truck specs and our bay technicians will schedule your dedicated bay time.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenQuote}
              className="w-full py-3 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#078FE8]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              REQUEST BAY BOOKING
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* What We Install Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11151A] rounded-3xl border border-[#2E3743] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase text-[#078FE8] font-bold tracking-widest block mb-2">
              SERVICE SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              WHAT WE INSTALL
            </h2>
            <p className="text-xs sm:text-sm text-[#B9C0C8] mt-2">
              Air Werks focuses strictly on specialized intake induction and filtration upgrades for supported truck applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Cold Air Intake Systems',
                desc: 'Sealed rotomolded composite boxes with high-flow filter media and molded intake runner tubes.'
              },
              {
                title: 'Heavy-Duty Diesel Intakes',
                desc: 'High-CFM induction systems engineered for Power Stroke, Duramax, and Cummins turbo diesels.'
              },
              {
                title: 'Replacement Filter Elements',
                desc: 'Dry synthetic extend elements and cleanable oiled cotton filter replacements for existing systems.'
              },
              {
                title: 'Factory Duct & Scoop Integration',
                desc: 'Precision hood scoop and active grille shutter duct attachments to ensure true cold air supply.'
              }
            ].map((srv, idx) => (
              <div key={idx} className="bg-[#181D24] p-5 rounded-2xl border border-[#2E3743]/60 space-y-2">
                <Check className="w-4 h-4 text-[#078FE8]" />
                <h4 className="text-sm font-bold text-white">{srv.title}</h4>
                <p className="text-xs text-[#B9C0C8] leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Installation Cases Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PORTFOLIO"
          title="INSTALLATION EXAMPLES"
          subtitle="Real-world intake configurations installed across modern Ford, GM, RAM, and Toyota truck builds."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {INSTALLATION_CASES.map(c => (
            <div
              key={c.id}
              className="bg-[#11151A] rounded-2xl border border-[#2E3743] overflow-hidden flex flex-col justify-between group hover:border-[#078FE8]/60 transition-all shadow-lg"
            >
              <div className="relative h-52 w-full overflow-hidden bg-[#080A0D]">
                <img
                  src={c.image}
                  alt={c.vehicle}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151A] via-transparent to-black/40" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-black/80 border border-white/10 text-xs font-mono font-bold text-white">
                    {c.brand}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-bold">{c.year} {c.vehicle}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    c.fuelType === 'Diesel' ? 'bg-amber-500/20 text-amber-300' : 'bg-[#078FE8]/20 text-[#078FE8]'
                  }`}>
                    {c.fuelType}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-[#078FE8] font-mono">
                    Engine: {c.engine}
                  </p>
                  <p className="text-xs text-white font-medium">
                    Intake: {c.intakeType}
                  </p>
                  <p className="text-xs text-[#B9C0C8]">
                    {c.ownerGoal}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2E3743]/60 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-[#8A939E] block font-bold">
                    Bay Steps Completed:
                  </span>
                  <ul className="space-y-1 text-xs text-[#B9C0C8]">
                    {c.installHighlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#078FE8] shrink-0" />
                        <span className="truncate">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
