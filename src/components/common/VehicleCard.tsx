import React from 'react';
import { VehicleModel } from '../../data/vehicles';
import { ArrowUpRight, Wrench, Fuel, Sparkles } from 'lucide-react';

interface VehicleCardProps {
  vehicle: VehicleModel;
  onSelect: (vehicle: VehicleModel) => void;
  onQuickQuote: (vehicle: VehicleModel) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onSelect,
  onQuickQuote
}) => {
  const fuelTypes = Array.from(new Set(vehicle.engines.map(e => e.fuelType)));

  return (
    <div className="group relative bg-[#11151A] rounded-2xl border border-[#2E3743] hover:border-[#078FE8]/60 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#078FE8]/10">
      {/* Truck Image Container */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#080A0D]">
        <img
          src={vehicle.heroImage}
          alt={`${vehicle.make} ${vehicle.model} Cold Air Intake Fitment`}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11151A] via-transparent to-black/40" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-white uppercase tracking-wider">
            {vehicle.make}
          </span>
          <div className="flex gap-1.5">
            {vehicle.is2020Plus && (
              <span className="px-2 py-0.5 rounded bg-[#078FE8]/90 text-[10px] font-mono font-bold text-white shadow">
                2020+ Focus
              </span>
            )}
            <span className="px-2 py-0.5 rounded bg-black/60 text-[#B9C0C8] text-[10px] font-mono">
              {vehicle.yearRange}
            </span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#1B2026]/80 backdrop-blur-md border border-[#2E3743] text-[11px] text-[#B9C0C8]">
            <Sparkles className="w-3 h-3 text-[#078FE8]" />
            {vehicle.category} Truck
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#078FE8] transition-colors">
            {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-xs text-[#B9C0C8] line-clamp-2 mt-1.5 leading-relaxed">
            {vehicle.tagline}
          </p>
        </div>

        {/* Specs Pill List */}
        <div className="space-y-2 py-2 border-y border-[#2E3743]/60 text-xs">
          <div className="flex items-center justify-between text-[#8A939E]">
            <span className="flex items-center gap-1.5">
              <Fuel className="w-3.5 h-3.5 text-[#078FE8]" />
              Fuel Applications
            </span>
            <div className="flex gap-1 font-semibold">
              {fuelTypes.map((fuel, idx) => (
                <span
                  key={idx}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono uppercase ${
                    fuel === 'Diesel'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-[#078FE8]/20 text-[#078FE8] border border-[#078FE8]/30'
                  }`}
                >
                  {fuel}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[#8A939E]">
            <span className="flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#078FE8]" />
              Install Estimate
            </span>
            <span className="font-mono text-white text-[11px] font-medium">
              {vehicle.estimatedInstallTime}
            </span>
          </div>

          <div className="flex items-center justify-between text-[#8A939E]">
            <span>Supported Brands</span>
            <span className="text-[11px] text-[#B9C0C8] font-mono">
              {vehicle.availableBrands.slice(0, 3).join(' • ')}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={() => onSelect(vehicle)}
            className="w-full px-3 py-2.5 rounded-xl bg-[#1B2026] hover:bg-[#222832] border border-[#2E3743] text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5"
          >
            <span>View Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#078FE8]" />
          </button>
          
          <button
            type="button"
            onClick={() => onQuickQuote(vehicle)}
            className="w-full px-3 py-2.5 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-xs font-bold text-white transition-colors shadow-md shadow-[#078FE8]/20 flex items-center justify-center"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};
