import React from 'react';
import { BrandInfo } from '../../data/brands';
import { Check, Shield, Layers } from 'lucide-react';

interface BrandCardProps {
  brand: BrandInfo;
  onViewApplications?: (brand: BrandInfo) => void;
}

export const BrandCard: React.FC<BrandCardProps> = ({
  brand,
  onViewApplications
}) => {
  return (
    <div className="bg-[#11151A] rounded-2xl border border-[#2E3743] hover:border-[#078FE8]/50 transition-all p-6 flex flex-col justify-between shadow-lg relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#078FE8]/5 rounded-full blur-2xl group-hover:bg-[#078FE8]/10 transition-colors pointer-events-none" />

      <div className="space-y-4">
        {/* Brand Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#078FE8] px-2.5 py-0.5 rounded-full bg-[#078FE8]/10 border border-[#078FE8]/30">
              {brand.badge}
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-2 group-hover:text-[#078FE8] transition-colors">
              {brand.name}
            </h3>
          </div>
          <div className="p-2.5 rounded-xl bg-[#1B2026] border border-[#2E3743] text-[#078FE8]">
            <Shield className="w-5 h-5" />
          </div>
        </div>

        <p className="text-xs font-semibold text-[#078FE8] italic">
          "{brand.tagline}"
        </p>

        <p className="text-xs text-[#B9C0C8] leading-relaxed">
          {brand.description}
        </p>

        {/* Engineering Highlights */}
        <div className="pt-3 border-t border-[#2E3743]/60 space-y-2">
          <span className="text-[10px] font-mono uppercase text-[#8A939E] block font-bold">
            Key Technical Highlights:
          </span>
          <ul className="space-y-1.5">
            {brand.engineeringHighlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#F7F9FC]">
                <Check className="w-3.5 h-3.5 text-[#078FE8] shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Filter Media Styles */}
        <div className="bg-[#181D24] p-3 rounded-xl border border-[#2E3743]/50 text-xs">
          <span className="text-[10px] font-mono uppercase text-[#8A939E] block mb-1">
            Available Media Formats:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {brand.filterOptions.map((opt, oIdx) => (
              <span key={oIdx} className="px-2 py-0.5 rounded bg-[#080A0D] border border-[#2E3743] text-[11px] text-[#B9C0C8]">
                {opt}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sourcing Transparency Note */}
      <div className="mt-5 pt-4 border-t border-[#2E3743] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[11px] text-[#8A939E]">
          <Layers className="w-3.5 h-3.5 text-[#078FE8]" />
          <span>Sourced & Bay-Installed</span>
        </div>

        {onViewApplications && (
          <button
            type="button"
            onClick={() => onViewApplications(brand)}
            className="text-xs font-bold text-[#078FE8] hover:text-[#38BDF8] flex items-center gap-1 transition-colors"
          >
            View Applications →
          </button>
        )}
      </div>
    </div>
  );
};
