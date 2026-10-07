import React, { useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { AirflowGraphic } from '../components/common/AirflowGraphic';
import { VEHICLE_DATA, VehicleModel } from '../data/vehicles';
import { BRAND_DATA } from '../data/brands';
import { INSTALLATION_CASES } from '../data/installations';
import { 
  ArrowRight, 
  CheckCircle2, 
  Wrench, 
  ShieldCheck, 
  Gauge, 
  Flame, 
  Sliders, 
  Compass, 
  Layers, 
  Activity, 
  Wind, 
  Volume2, 
  Award,
  ChevronRight,
  PhoneCall
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenQuote: (vehicle?: VehicleModel) => void;
  onSelectVehicle: (vehicle: VehicleModel) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuote,
  onSelectVehicle
}) => {
  const [selectedMakeTab, setSelectedMakeTab] = useState<'All' | 'Ford' | 'Chevrolet' | 'GMC' | 'RAM' | 'Toyota'>('All');

  const filteredVehicles = selectedMakeTab === 'All' 
    ? VEHICLE_DATA 
    : VEHICLE_DATA.filter(v => v.make === selectedMakeTab);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[62vh] md:min-h-[92vh] flex items-center justify-center pt-16 sm:pt-20 md:pt-24 pb-2 md:pb-16 overflow-hidden bg-[#080A0D]">
        {/* Background Realistic Truck Photo with Dramatic Vignette */}
        <div className="absolute inset-0 z-0">
          <a href="">
            <img
            src="/images/hero-truck.jpg"
            alt="2024 Ford Super Duty Performance Cold Air Intake"
            className="w-full h-full object-cover object-center"
          />
          </a>
          {/* Gradients to guarantee text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/40" />
        </div>

        {/* Subtle Animated Airflow Streams Overlay */}
        <div className="absolute inset-x-0 bottom-8 md:bottom-24 z-10 pointer-events-none">
          <AirflowGraphic variant="dynamic" className="h-20 md:h-28" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-2 sm:py-4 md:py-12">
          <div className="max-w-3xl space-y-3 sm:space-y-4 md:space-y-6">
            
            {/* Small engineered label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#078FE8]/15 border backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#078FE8] animate-ping" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-white uppercase">
                COLD AIR INTAKE SPECIALISTS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F7F9FC] tracking-tight leading-[1.05] font-heading">
              BREATHE BETTER.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#078FE8] via-[#38BDF8] to-white block sm:inline">
                PERFORM BETTER.
              </span>
            </h1>

            {/* Supporting Subline */}
            <p className="text-sm sm:text-xl font-medium text-white/90">
              Cold Air Intake Sales & Professional Installation for Today's Trucks.
            </p>

            {/* Supporting Paragraph */}
            <p className="hidden sm:block sm:text-base text-[#B9C0C8] font-normal leading-relaxed max-w-2xl">
              Air Werks helps truck owners find the right cold air intake for their vehicle and provides professional installation using products from trusted performance brands.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('vehicles')}
                className="px-6 py-2.5 md:px-8 md:py-4 rounded-xl bg-gradient-to-r from-[#078FE8] to-[#0757B8] hover:from-[#38BDF8] hover:to-[#078FE8] text-white font-mono font-bold text-sm tracking-wider shadow-2xl shadow-[#078FE8]/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                FIND YOUR INTAKE
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="px-6 py-2.5 md:px-8 md:py-4 rounded-xl bg-[#11151A]/80 hover:bg-[#1B2026] text-white border border-[#2E3743] hover:border-[#078FE8]/60 font-mono font-bold text-sm tracking-wider backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                REQUEST A QUOTE
              </button>
            </div>

            {/* Trust Line */}
            <div className="pt-3 sm:pt-4 md:pt-8 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-6 text-xs font-mono tracking-wider text-[#B9C0C8]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#078FE8]" />
                <span className="text-white font-bold">GAS + DIESEL</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#078FE8]" />
                <span className="text-white font-bold">2020+ TRUCKS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#078FE8]" />
                <span className="text-white font-bold">PROFESSIONAL INSTALLATION</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. SECTION: WHY AIR WERKS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE AIR WERKS ADVANTAGE"
          title="YOUR TRUCK. YOUR BUILD."
          highlight="THE RIGHT INTAKE."
          subtitle="We focus on matching customers with cold-air intake systems engineered specifically for their truck, engine displacement, and driving application."
          alignment="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Feature 01 */}
          <div className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 hover:border-[#078FE8]/50 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-black text-[#078FE8]/40 group-hover:text-[#078FE8] transition-colors">
                  01
                </span>
                <div className="p-2.5 rounded-xl bg-[#1B2026] text-[#078FE8]">
                  <Sliders className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                FITMENT FIRST
              </h3>
              <p className="text-xs sm:text-sm text-[#B9C0C8] leading-relaxed">
                We help identify the intake system designed for your specific vehicle and engine, ensuring perfect sensor calibration and zero dash warning lights.
              </p>
            </div>
          </div>

          {/* Feature 02 */}
          <div className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 hover:border-[#078FE8]/50 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-black text-[#078FE8]/40 group-hover:text-[#078FE8] transition-colors">
                  02
                </span>
                <div className="p-2.5 rounded-xl bg-[#1B2026] text-[#078FE8]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                TRUSTED BRANDS
              </h3>
              <p className="text-xs sm:text-sm text-[#B9C0C8] leading-relaxed">
                We promote and install products from performance brands we can source and support, including S&B Filters, aFe POWER, K&N, Volant, and AEM.
              </p>
            </div>
          </div>

          {/* Feature 03 */}
          <div className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 hover:border-[#078FE8]/50 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-black text-[#078FE8]/40 group-hover:text-[#078FE8] transition-colors">
                  03
                </span>
                <div className="p-2.5 rounded-xl bg-[#1B2026] text-[#078FE8]">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                PROFESSIONAL INSTALLATION
              </h3>
              <p className="text-xs sm:text-sm text-[#B9C0C8] leading-relaxed">
                Your intake is installed correctly and cleanly by someone who understands the application, with torque checks and clean engine bay routing.
              </p>
            </div>
          </div>

          {/* Feature 04 */}
          <div className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 hover:border-[#078FE8]/50 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-black text-[#078FE8]/40 group-hover:text-[#078FE8] transition-colors">
                  04
                </span>
                <div className="p-2.5 rounded-xl bg-[#1B2026] text-[#078FE8]">
                  <Activity className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                PERFORMANCE FOCUSED
              </h3>
              <p className="text-xs sm:text-sm text-[#B9C0C8] leading-relaxed">
                Improve airflow and complement the way your truck is built and driven — whether it is a daily commuter, heavy towing rig, or overland explorer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SECTION: SHOP BY VEHICLE
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#078FE8]/10 border border-[#078FE8]/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#078FE8]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#078FE8] uppercase">
                TRUCK PLATFORM SELECTOR
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              FIND YOUR TRUCK
            </h2>
            <p className="text-sm text-[#B9C0C8] mt-2 max-w-xl">
              Tell us what you drive and we'll help you find the right intake.
            </p>
          </div>

          {/* Brand Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-[#11151A] p-1.5 rounded-xl border border-[#2E3743]">
            {(['All', 'Ford', 'Chevrolet', 'GMC', 'RAM', 'Toyota'] as const).map(tab => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelectedMakeTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedMakeTab === tab
                    ? 'bg-[#078FE8] text-white shadow'
                    : 'text-[#B9C0C8] hover:text-white hover:bg-[#1B2026]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Truck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map(v => (
            <div
              key={v.id}
              className="bg-[#11151A] rounded-2xl border border-[#2E3743] overflow-hidden flex flex-col justify-between group hover:border-[#078FE8]/60 transition-all shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#080A0D]">
                <img
                  src={v.heroImage}
                  alt={`${v.make} ${v.model}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151A] via-transparent to-black/30" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-white">
                    {v.make}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-0.5 rounded bg-[#078FE8]/90 text-[10px] font-mono font-bold text-white">
                    {v.yearRange}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#078FE8] transition-colors">
                    {v.make} {v.model}
                  </h3>
                  <p className="text-xs text-[#B9C0C8] mt-1 line-clamp-2">
                    {v.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2E3743]/60 flex items-center justify-between text-xs">
                  <span className="text-[#8A939E] font-mono">
                    {v.engines.length} Engine Specs Available
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectVehicle(v)}
                    className="px-3.5 py-2 rounded-xl bg-[#1B2026] hover:bg-[#078FE8] hover:text-white text-[#078FE8] border border-[#2E3743] text-xs font-mono font-bold transition-all flex items-center gap-1 cursor-pointer"
                  >
                    EXPLORE
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => onNavigate('vehicles')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1B2026] hover:bg-[#222832] border border-[#2E3743] text-xs font-mono font-bold text-[#F7F9FC] transition-colors cursor-pointer"
          >
            VIEW ALL SUPPORTED TRUCK APPLICATIONS
            <ArrowRight className="w-4 h-4 text-[#078FE8]" />
          </button>
        </div>
      </section>

      {/* ========================================================
          4. SECTION: GAS + DIESEL
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11151A] rounded-3xl border border-[#2E3743] overflow-hidden p-6 sm:p-10 lg:p-12 relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#078FE8]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#078FE8]/10 border border-[#078FE8]/30 mb-3">
              <span className="text-[11px] font-mono font-bold text-[#078FE8] uppercase">
                ENGINEERING SPLIT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              BUILT FOR GAS.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#078FE8] to-amber-400">
                READY FOR DIESEL.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#B9C0C8] mt-3 leading-relaxed">
              From daily-driven gasoline pickups to heavy-duty diesel trucks, Air Werks focuses on intake solutions for today's most popular truck platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Left: Gas */}
            <div className="bg-[#181D24] rounded-2xl border border-[#2E3743] p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-[#078FE8]/20 border border-[#078FE8]/40 text-[#078FE8] text-xs font-mono font-bold uppercase">
                    GAS APPLICATIONS
                  </span>
                  <Wind className="w-5 h-5 text-[#078FE8]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Naturally Aspirated V8s & Twin-Turbo Gas
                </h3>
                <p className="text-xs text-[#B9C0C8] leading-relaxed">
                  Ford 5.0L Coyote & EcoBoost, GM 5.3L/6.2L V8s, RAM 5.7L HEMI, and Toyota 3.4L Twin-Turbo platforms.
                </p>

                <ul className="space-y-2 text-xs text-[#F7F9FC] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#078FE8] shrink-0" />
                    <span>Crisp throttle response and reduced off-idle hesitation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#078FE8] shrink-0" />
                    <span>Deep, authoritative intake acoustic growl</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#078FE8] shrink-0" />
                    <span>Factory sensor safe — no tune or ECU flash required</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('vehicles')}
                className="w-full py-2.5 rounded-xl bg-[#11151A] hover:bg-[#222832] border border-[#2E3743] text-xs font-mono font-bold text-white transition-colors cursor-pointer"
              >
                EXPLORE GAS APPLICATIONS →
              </button>
            </div>

            {/* Right: Diesel */}
            <div className="bg-[#181D24] rounded-2xl border border-[#2E3743] p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold uppercase">
                    DIESEL APPLICATIONS
                  </span>
                  <Flame className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Heavy-Duty Turbo Diesel Platforms
                </h3>
                <p className="text-xs text-[#B9C0C8] leading-relaxed">
                  Ford 6.7L Power Stroke, GM 6.6L Duramax (L5P), and RAM 6.7L Cummins High-Output systems.
                </p>

                <ul className="space-y-2 text-xs text-[#F7F9FC] pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Massive volumetric CFM to feed heavy turbocharger demands</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Extreme-duty silicone couplers resist boost fatigue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Dry Extend filter options for heavy dust & job site fleets</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('vehicles')}
                className="w-full py-2.5 rounded-xl bg-[#11151A] hover:bg-[#222832] border border-[#2E3743] text-xs font-mono font-bold text-white transition-colors cursor-pointer"
              >
                EXPLORE DIESEL APPLICATIONS →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SECTION: 2020+ TRUCK FOCUS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#11151A] rounded-3xl border border-[#2E3743] p-6 sm:p-10 lg:p-12">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#078FE8] via-[#38BDF8] to-white/20 font-mono tracking-tighter">
              2020+
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              BUILT FOR TODAY'S TRUCKS
            </h2>
            <p className="text-sm text-[#B9C0C8] leading-relaxed">
              Newer trucks represent a major focus of Air Werks. Today's modern truck platforms require precision-molded components that integrate seamlessly with active grille shutters, sensitive digital air meters, and factory computer calibrations.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Modern Engine Platforms', desc: 'Precision engineered for 10-speed transmissions, multi-port injection, and twin-turbo induction.' },
              { title: 'Performance-Focused Owners', desc: 'Designed for truck enthusiasts looking for genuine engine bay refinement and response.' },
              { title: 'Towing & Hauling Applications', desc: 'Helps maintain cooler intake temperatures under sustained grade climbing and trailer pulling.' },
              { title: 'Off-Road & Overland Builds', desc: 'Sealed airboxes keep fine trail dust and moisture out of your intake tract.' },
              { title: 'Work Trucks & Job Sites', desc: 'Heavy-duty dry filtration media options designed for low-maintenance in harsh environments.' },
              { title: 'Daily Drivers', desc: 'OEM-level clean appearance with zero check engine lights or excessive cabin resonance.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#181D24] p-4 rounded-xl border border-[#2E3743]/60 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#078FE8]" />
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-xs text-[#B9C0C8] leading-relaxed pl-3.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. SECTION: COLD AIR INTAKE EXPLAINER
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Engine Bay Image */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#2E3743] bg-[#11151A] aspect-[4/3] group">
            <img
              src="/images/intake-engine-bay.jpg"
              alt="Cold Air Intake Engine Bay Installation"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A0D]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 bg-[#080A0D]/80 backdrop-blur-md p-3.5 rounded-xl border border-[#2E3743]">
              <span className="text-[10px] font-mono uppercase text-[#078FE8] font-bold block">
                ENGINEERING HIGHLIGHT
              </span>
              <p className="text-xs text-white">
                Sealed composite airbox isolates incoming cold air from 200°F+ radiant engine bay heat.
              </p>
            </div>
          </div>

          {/* Right: Explainer Details */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="INTAKE SCIENCE"
              title="WHAT DOES A COLD AIR INTAKE DO?"
              subtitle="A cold air intake replaces or modifies the factory intake system to improve the way air is delivered to the engine."
              alignment="left"
            />

            <div className="space-y-3">
              {[
                { title: 'Improved Airflow Volume', desc: 'Smooth, large-diameter intake tubes eliminate the turbulence caused by factory accordion resonators.' },
                { title: 'Stronger Throttle Response', desc: 'Reduced vacuum resistance allows the engine or turbocharger to draw air more freely off idle.' },
                { title: 'Intake Induction Sound', desc: 'Adds a deeper, purposeful induction tone under acceleration without highway drone.' },
                { title: 'Complementary Performance Modification', desc: 'Works hand-in-hand with exhaust systems, tuning packages, and towing setups.' },
                { title: 'Engine-Bay Appearance', desc: 'Replaces flimsy factory plastic with high-grade rotomolded composite and silicone couplers.' },
              ].map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 bg-[#11151A] p-3.5 rounded-xl border border-[#2E3743]/60">
                  <CheckCircle2 className="w-4 h-4 text-[#078FE8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{point.title}</h4>
                    <p className="text-xs text-[#B9C0C8] mt-0.5 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button
                type="button"
                onClick={() => onNavigate('intakes')}
                className="px-6 py-3 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white text-xs font-mono font-bold tracking-wider shadow-lg shadow-[#078FE8]/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                LEARN ABOUT INTAKES
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. SECTION: PERFORMANCE BRANDS WE CARRY
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TRUSTED PERFORMANCE LINES"
          title="PERFORMANCE BRANDS WE CARRY"
          subtitle="Air Werks promotes and installs cold air intake systems from proven manufacturers we can reliably source and support."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {BRAND_DATA.map((brand) => (
            <div
              key={brand.id}
              className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 hover:border-[#078FE8]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#078FE8] px-2.5 py-0.5 rounded-full bg-[#078FE8]/10 border border-[#078FE8]/30">
                    {brand.badge}
                  </span>
                  <Award className="w-5 h-5 text-[#8A939E] group-hover:text-[#078FE8] transition-colors" />
                </div>

                <h3 className="text-2xl font-black text-white group-hover:text-[#078FE8] transition-colors">
                  {brand.name}
                </h3>

                <p className="text-xs text-[#B9C0C8] leading-relaxed">
                  {brand.description}
                </p>

                <div className="pt-2 border-t border-[#2E3743]/60 space-y-1.5 text-xs">
                  <span className="text-[10px] font-mono text-[#8A939E] uppercase block font-bold">
                    Vehicle Applications:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {brand.supportedVehicles.slice(0, 3).map((v, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-[#181D24] border border-[#2E3743] text-[11px] text-[#B9C0C8]">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#2E3743] flex items-center justify-between">
                <span className="text-[11px] text-[#8A939E]">
                  Sourced & Bay-Installed
                </span>
                <button
                  type="button"
                  onClick={() => onNavigate('brands')}
                  className="text-xs font-mono font-bold text-[#078FE8] hover:text-[#38BDF8] flex items-center gap-1 cursor-pointer"
                >
                  VIEW SPECS →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          8. SECTION: HOW IT WORKS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="SEAMLESS PROCESS"
          title="FROM TRUCK TO INTAKE."
          subtitle="Four straightforward steps to upgrade your truck's airflow and engine bay."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 relative">
          {[
            {
              step: '01',
              title: 'TELL US YOUR TRUCK',
              desc: 'Year, make, model and engine platform.',
              icon: Compass
            },
            {
              step: '02',
              title: 'CHOOSE YOUR INTAKE',
              desc: 'We help identify an appropriate available system and filter media.',
              icon: Sliders
            },
            {
              step: '03',
              title: 'SCHEDULE INSTALLATION',
              desc: 'Choose a convenient installation time at our dedicated bay.',
              icon: Wrench
            },
            {
              step: '04',
              title: 'DRIVE AWAY',
              desc: 'Your new intake is professionally installed, verified, and road-ready.',
              icon: Gauge
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 hover:border-[#078FE8]/50 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-black text-[#078FE8]/40 group-hover:text-[#078FE8] transition-colors">
                    {item.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#1B2026] text-[#078FE8]">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-[#B9C0C8] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="w-full h-1 bg-[#181D24] rounded-full mt-6 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#078FE8] to-[#0757B8] w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          9. SECTION: FEATURED INSTALLATIONS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <SectionHeading
              badge="REAL-WORLD BUILDS"
              title="FEATURED INSTALLATIONS"
              subtitle="Examples of cold-air intake configurations across supported gas and diesel truck applications."
              alignment="left"
            />
          </div>
          <button
            type="button"
            onClick={() => onNavigate('installation')}
            className="text-xs font-mono font-bold text-[#078FE8] hover:text-[#38BDF8] flex items-center gap-1 cursor-pointer"
          >
            SEE INSTALLATION STANDARDS →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTALLATION_CASES.slice(0, 3).map(c => (
            <div
              key={c.id}
              className="bg-[#11151A] rounded-2xl border border-[#2E3743] overflow-hidden flex flex-col justify-between group hover:border-[#078FE8]/60 transition-all shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#080A0D]">
                <img
                  src={c.image}
                  alt={c.vehicle}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11151A] via-transparent to-black/40" />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-black/70 border border-white/10 text-[10px] font-mono font-bold text-white uppercase">
                    {c.brand}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white font-bold">{c.year} {c.vehicle}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    c.fuelType === 'Diesel' ? 'bg-amber-500/20 text-amber-300' : 'bg-[#078FE8]/20 text-[#078FE8]'
                  }`}>
                    {c.fuelType}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-white">
                    Engine: <span className="text-[#078FE8]">{c.engine}</span>
                  </p>
                  <p className="text-xs text-[#B9C0C8] line-clamp-2">
                    {c.ownerGoal}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2E3743]/60 text-[11px] text-[#8A939E] flex items-center justify-between">
                  <span>{c.useCase}</span>
                  <span className="text-[#078FE8] font-mono font-bold">Bay Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          10. SECTION: WHY OWNERS UPGRADE
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PERFORMANCE CHARACTER"
          title="MORE AIR."
          highlight="MORE CHARACTER."
          subtitle="A cold air intake upgrade enhances the everyday driving experience and capability of your truck."
          alignment="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {[
            {
              title: 'AIRFLOW',
              tagline: 'Volume & Velocity',
              desc: 'High CFM throughput provides lower vacuum restriction under load.',
              icon: Wind
            },
            {
              title: 'RESPONSE',
              tagline: 'Immediate Tip-In',
              desc: 'Direct throttle feedback and quicker turbo compressor spooling.',
              icon: Gauge
            },
            {
              title: 'SOUND',
              tagline: 'Acoustic Tone',
              desc: 'Authoritative induction rumble without high-speed drone.',
              icon: Volume2
            },
            {
              title: 'STYLE',
              tagline: 'Clean Engine Bay',
              desc: 'Rotomolded composite airboxes and clear lids that look engineered.',
              icon: Layers
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 text-center space-y-3 hover:border-[#078FE8]/50 transition-all flex flex-col items-center justify-between group"
            >
              <div className="p-3.5 rounded-2xl bg-[#1B2026] text-[#078FE8] group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white font-mono tracking-wider">
                  {item.title}
                </h3>
                <p className="text-xs text-[#078FE8] font-semibold mt-0.5">
                  {item.tagline}
                </p>
                <p className="text-xs text-[#B9C0C8] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          11. SECTION: CTA BANNER
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#11151A] via-[#080A0D] to-[#181D24] border border-[#2E3743] p-8 sm:p-12 lg:p-16 overflow-hidden text-center space-y-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#078FE8]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#078FE8] uppercase">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              READY TO UPGRADE YOUR TRUCK?
            </h2>
            <p className="text-sm sm:text-base text-[#B9C0C8] leading-relaxed">
              Tell us what you drive and we'll help you find the right cold air intake for your application.
            </p>
          </div>

          <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white font-mono font-bold text-sm tracking-wider shadow-2xl shadow-[#078FE8]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              REQUEST A QUOTE
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1B2026] hover:bg-[#222832] text-white border border-[#2E3743] font-mono font-bold text-sm tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#078FE8]" />
              CONTACT AIR WERKS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
