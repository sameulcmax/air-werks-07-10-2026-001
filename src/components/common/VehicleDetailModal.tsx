import React, { useState } from 'react';
import { VehicleModel, VehicleEngine } from '../../data/vehicles';
import { X, CheckCircle2, Gauge, Wrench, ShieldCheck, Flame, ChevronRight, Sparkles } from 'lucide-react';

interface VehicleDetailModalProps {
  vehicle: VehicleModel | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (vehicle: VehicleModel, engine?: VehicleEngine) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  isOpen,
  onClose,
  onRequestQuote
}) => {
  if (!isOpen || !vehicle) return null;

  const [selectedEngineIdx, setSelectedEngineIdx] = useState<number>(0);
  const activeEngine = vehicle.engines[selectedEngineIdx] || vehicle.engines[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#11151A] border border-[#2E3743] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-truck-title"
      >
        {/* Header Bar */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden shrink-0">
          <img 
            src={vehicle.heroImage} 
            alt={`${vehicle.make} ${vehicle.model}`}
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11151A] via-[#11151A]/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 border border-white/10 text-white hover:text-[#078FE8] hover:bg-black/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-[#078FE8]/20 border border-[#078FE8]/40 text-[#078FE8] text-xs font-mono font-bold uppercase">
                {vehicle.make}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-[#B9C0C8] text-xs font-mono">
                {vehicle.yearRange}
              </span>
              {vehicle.is2020Plus && (
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                  2020+ Platform Focus
                </span>
              )}
            </div>
            <h3 id="modal-truck-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {vehicle.make} {vehicle.model}
            </h3>
            <p className="text-sm text-[#B9C0C8] line-clamp-1 mt-0.5">
              {vehicle.tagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Overview text */}
          <div className="bg-[#1B2026]/70 rounded-xl p-4 border border-[#2E3743]/60">
            <p className="text-sm sm:text-base text-[#F7F9FC]/90 leading-relaxed">
              {vehicle.overview}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-[#2E3743]/60 text-xs">
              <div>
                <span className="text-[#8A939E] block uppercase font-mono">Bay Install Time</span>
                <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
                  <Wrench className="w-3.5 h-3.5 text-[#078FE8]" />
                  {vehicle.estimatedInstallTime}
                </span>
              </div>
              <div>
                <span className="text-[#8A939E] block uppercase font-mono">Supported Brands</span>
                <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#078FE8]" />
                  {vehicle.availableBrands.slice(0, 3).join(', ')}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[#8A939E] block uppercase font-mono">Platform Class</span>
                <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5">
                  <Gauge className="w-3.5 h-3.5 text-[#078FE8]" />
                  {vehicle.category} Application
                </span>
              </div>
            </div>
          </div>

          {/* Engine Selector */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#B9C0C8] font-mono flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#078FE8]" />
                Select Engine Platform:
              </h4>
              <span className="text-xs text-[#8A939E]">
                {vehicle.engines.length} engine configurations
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {vehicle.engines.map((eng, idx) => {
                const isSelected = idx === selectedEngineIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedEngineIdx(idx)}
                    className={`text-left p-3 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-[#078FE8]/15 border-[#078FE8] shadow-lg shadow-[#078FE8]/10'
                        : 'bg-[#1B2026] border-[#2E3743] hover:border-[#078FE8]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded ${
                        eng.fuelType === 'Diesel' 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                          : 'bg-[#078FE8]/20 text-[#078FE8] border border-[#078FE8]/30'
                      }`}>
                        {eng.fuelType}
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#078FE8]" />}
                    </div>
                    <p className="font-bold text-sm text-white mt-1.5 leading-snug">
                      {eng.name}
                    </p>
                    <p className="text-xs text-[#8A939E] mt-0.5">
                      {eng.aspiration}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Engine Intake Details */}
          {activeEngine && (
            <div className="bg-[#181D24] border border-[#2E3743] rounded-xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#2E3743]">
                <div>
                  <span className="text-xs text-[#8A939E] uppercase font-mono">Engine Spec Focus</span>
                  <h5 className="text-lg font-bold text-white">
                    {activeEngine.name} Intake Dynamics
                  </h5>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#222832] text-[#B9C0C8] border border-[#2E3743]">
                    Displacement: {activeEngine.displacement}
                  </span>
                </div>
              </div>

              {/* Sourced Intakes for this engine */}
              <div>
                <p className="text-xs font-mono uppercase text-[#8A939E] mb-2 font-bold">
                  Recommended Available Intake Configurations:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeEngine.popularIntakes.map((intake, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs bg-[#11151A] p-2.5 rounded-lg border border-[#2E3743]/60 text-[#F7F9FC]">
                      <Sparkles className="w-3.5 h-3.5 text-[#078FE8] shrink-0 mt-0.5" />
                      <span>{intake}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filter Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-xs font-mono uppercase text-[#8A939E] mb-1 font-bold">
                    Filter Media Choices:
                  </p>
                  <ul className="text-xs text-[#B9C0C8] space-y-1">
                    {activeEngine.filterStyles.map((style, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#078FE8]" />
                        {style}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-[#8A939E] mb-1 font-bold">
                    Intake Benefits for this Build:
                  </p>
                  <ul className="text-xs text-[#B9C0C8] space-y-1">
                    {activeEngine.intakeBenefits.map((ben, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        {ben}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Factory Airbox Note */}
              <div className="text-xs bg-[#080A0D] p-3 rounded-lg border border-[#2E3743] text-[#B9C0C8]">
                <strong className="text-white font-mono">Fitment & Airflow Note: </strong>
                {activeEngine.factoryAirboxNote}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-[#080A0D] border-t border-[#2E3743] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-center sm:text-left">
            <span className="text-xs text-[#8A939E] font-mono uppercase block">Selected Configuration</span>
            <span className="text-sm font-bold text-white">
              {vehicle.make} {vehicle.model} ({activeEngine.name})
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-[#2E3743] text-sm font-medium text-[#B9C0C8] hover:text-white hover:bg-[#1B2026] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestQuote(vehicle, activeEngine);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white text-sm font-bold shadow-lg shadow-[#078FE8]/25 transition-all flex items-center justify-center gap-2"
            >
              Request Quote & Fitment
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
