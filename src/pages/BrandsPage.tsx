import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { BRAND_DATA, BrandInfo } from '../data/brands';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface BrandsPageProps {
  onOpenQuote: () => void;
  onNavigate?: (page: string) => void;
}

export const BrandsPage: React.FC<BrandsPageProps> = ({
  onOpenQuote
}) => {
  return (
    <div className="pt-24 pb-20 space-y-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <SectionHeading
          badge="SOURCED & INSTALLED"
          title="TRUSTED PERFORMANCE BRANDS"
          subtitle="Air Werks focuses on intake systems and filtration brands that can be reliably sourced, fitment-verified, and professionally installed for supported truck applications."
          alignment="center"
        />

        {/* Transparency Banner */}
        <div className="mt-8 max-w-3xl mx-auto bg-[#11151A] border border-[#2E3743] rounded-2xl p-4 flex items-center justify-center gap-3 text-xs text-[#B9C0C8]">
          <ShieldCheck className="w-5 h-5 text-[#078FE8] shrink-0" />
          <span>
            Every brand featured below has been evaluated for ISO test standards, factory sensor safety, and long-term durability in high-demand truck applications.
          </span>
        </div>
      </section>

      {/* Brand Detailed Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {BRAND_DATA.map((brand: BrandInfo) => (
          <div
            key={brand.id}
            id={brand.id}
            className="bg-[#11151A] rounded-3xl border border-[#2E3743] overflow-hidden p-6 sm:p-10 lg:p-12 space-y-8 hover:border-[#078FE8]/50 transition-all shadow-xl relative"
          >
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#2E3743]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#078FE8] px-3 py-1 rounded-full bg-[#078FE8]/10 border border-[#078FE8]/30">
                    {brand.badge}
                  </span>
                  <span className="text-xs font-mono text-[#8A939E]">
                    Catalog Code: AW-{brand.id.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                  {brand.name}
                </h3>
                <p className="text-sm font-semibold text-[#078FE8] italic">
                  "{brand.tagline}"
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-6 py-2.5 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white text-xs font-mono font-bold tracking-wider transition-all shadow-md shadow-[#078FE8]/20 cursor-pointer"
                >
                  REQUEST {brand.name.toUpperCase()} FITMENT
                </button>
              </div>
            </div>

            {/* Description & Engineering Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-4">
                <h4 className="text-sm font-mono uppercase text-[#8A939E] font-bold">
                  Brand Focus & Sourcing Role
                </h4>
                <p className="text-sm text-[#F7F9FC] leading-relaxed">
                  {brand.description}
                </p>
                <div className="p-3.5 rounded-xl bg-[#181D24] border border-[#2E3743] text-xs text-[#B9C0C8]">
                  <strong className="text-white block font-mono mb-1">Air Werks Bay Note:</strong>
                  {brand.sourcingRole}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-sm font-mono uppercase text-[#8A939E] font-bold">
                  Technical Engineering Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {brand.engineeringHighlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="bg-[#181D24] p-3.5 rounded-xl border border-[#2E3743]/60 flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#078FE8] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#F7F9FC] leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Supported Vehicles & Filter Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[#2E3743]">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#8A939E] block font-bold">
                  Supported Truck Applications:
                </span>
                <div className="flex flex-wrap gap-2">
                  {brand.supportedVehicles.map((veh, vIdx) => (
                    <span key={vIdx} className="px-2.5 py-1 rounded-lg bg-[#080A0D] border border-[#2E3743] text-xs text-white font-mono">
                      {veh}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#8A939E] block font-bold">
                  Available Intake Styles:
                </span>
                <div className="flex flex-wrap gap-2">
                  {brand.intakeStyles.map((style, sIdx) => (
                    <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-[#080A0D] border border-[#2E3743] text-xs text-[#B9C0C8]">
                      {style}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Sourcing Model Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Have a Specific Cold Air Intake in Mind?
          </h3>
          <p className="text-xs sm:text-sm text-[#B9C0C8] max-w-xl mx-auto leading-relaxed">
            If you already have a preferred intake part number or system you want sourced and installed, let us know in your quote request.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenQuote}
              className="px-8 py-3.5 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white font-mono font-bold text-xs tracking-wider shadow-lg shadow-[#078FE8]/25 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              SUBMIT CUSTOM PART REQUEST
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
