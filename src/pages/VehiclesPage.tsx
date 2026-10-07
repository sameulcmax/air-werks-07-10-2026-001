import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { VEHICLE_DATA, VehicleModel, VehicleEngine } from '../data/vehicles';
import { VehicleCard } from '../components/common/VehicleCard';
import { VehicleDetailModal } from '../components/common/VehicleDetailModal';
import { Filter, Fuel, Sparkles, Shield, Wrench } from 'lucide-react';

interface VehiclesPageProps {
  initialMake?: string;
  onOpenQuote: (vehicle?: VehicleModel, engine?: VehicleEngine) => void;
}

export const VehiclesPage: React.FC<VehiclesPageProps> = ({
  initialMake = 'all',
  onOpenQuote
}) => {
  const [selectedMake, setSelectedMake] = useState<string>(initialMake.toLowerCase());
  const [selectedFuel, setSelectedFuel] = useState<'All' | 'Gas' | 'Diesel'>('All');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Heavy Duty' | 'Full-Size' | 'Mid-Size'>('All');
  const [activeModalVehicle, setActiveModalVehicle] = useState<VehicleModel | null>(null);

  useEffect(() => {
    if (initialMake) {
      setSelectedMake(initialMake.toLowerCase());
    }
  }, [initialMake]);

  // Filter logic
  const filteredVehicles = VEHICLE_DATA.filter(v => {
    // Make filter
    if (selectedMake !== 'all' && v.make.toLowerCase() !== selectedMake.toLowerCase()) {
      return false;
    }
    // Category filter
    if (selectedCategory !== 'All' && v.category !== selectedCategory) {
      return false;
    }
    // Fuel filter
    if (selectedFuel !== 'All') {
      const hasFuel = v.engines.some(e => e.fuelType === selectedFuel);
      if (!hasFuel) return false;
    }
    return true;
  });

  return (
    <div className="pt-24 pb-20 space-y-16">
      {/* Detail Modal */}
      <VehicleDetailModal
        vehicle={activeModalVehicle}
        isOpen={!!activeModalVehicle}
        onClose={() => setActiveModalVehicle(null)}
        onRequestQuote={(v, eng) => {
          onOpenQuote(v, eng);
          setActiveModalVehicle(null);
        }}
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <SectionHeading
          badge="SUPPORTED PLATFORMS"
          title="FIND YOUR TRUCK"
          subtitle="Explore cold air intake applications for today's most popular pickup platforms."
          alignment="center"
        />

        {/* Quick Highlights Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8 text-xs font-mono text-[#8A939E]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#078FE8]" />
            <span>2020+ Trucks Supported</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-[#078FE8]" />
            <span>Gas & Diesel Induction</span>
          </div>
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-[#078FE8]" />
            <span>Clean Bay Installation</span>
          </div>
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-4 sm:p-6 shadow-xl space-y-4">
          
          {/* Make Filter Tabs */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[#8A939E] uppercase font-bold flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#078FE8]" />
              Select Manufacturer:
            </span>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[
                { id: 'all', label: 'All Makes' },
                { id: 'ford', label: 'Ford' },
                { id: 'chevrolet', label: 'Chevrolet' },
                { id: 'gmc', label: 'GMC' },
                { id: 'ram', label: 'RAM' },
                { id: 'toyota', label: 'Toyota' }
              ].map(make => (
                <button
                  key={make.id}
                  type="button"
                  onClick={() => setSelectedMake(make.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-mono font-bold transition-all text-center cursor-pointer ${
                    selectedMake === make.id
                      ? 'bg-[#078FE8] text-white shadow-lg shadow-[#078FE8]/20'
                      : 'bg-[#181D24] text-[#B9C0C8] hover:text-white hover:bg-[#222832] border border-[#2E3743]'
                  }`}
                >
                  {make.label}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Sub-filters: Category & Fuel */}
          <div className="pt-3 border-t border-[#2E3743]/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            {/* Category */}
            <div className="flex items-center gap-2">
              <span className="text-[#8A939E]">Class:</span>
              <div className="flex gap-1.5">
                {(['All', 'Heavy Duty', 'Full-Size', 'Mid-Size'] as const).map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#2E3743] text-white font-bold'
                        : 'text-[#8A939E] hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Fuel */}
            <div className="flex items-center gap-2">
              <span className="text-[#8A939E]">Fuel:</span>
              <div className="flex gap-1.5">
                {(['All', 'Gas', 'Diesel'] as const).map(fuel => (
                  <button
                    key={fuel}
                    type="button"
                    onClick={() => setSelectedFuel(fuel)}
                    className={`px-2.5 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                      selectedFuel === fuel
                        ? fuel === 'Diesel'
                          ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                          : 'bg-[#078FE8]/20 text-[#078FE8] font-bold border border-[#078FE8]/40'
                        : 'text-[#8A939E] hover:text-white'
                    }`}
                  >
                    {fuel}
                  </button>
                ))}
              </div>
            </div>

            {/* Counter */}
            <div className="text-[#8A939E]">
              Showing <strong className="text-white">{filteredVehicles.length}</strong> platforms
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredVehicles.length === 0 ? (
          <div className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-12 text-center space-y-4">
            <p className="text-base text-[#B9C0C8]">
              No exact matches found for your selected filters.
            </p>
            <button
              onClick={() => {
                setSelectedMake('all');
                setSelectedCategory('All');
                setSelectedFuel('All');
              }}
              className="px-5 py-2 rounded-xl bg-[#078FE8] text-white text-xs font-mono font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map(v => (
              <VehicleCard
                key={v.id}
                vehicle={v}
                onSelect={(veh) => setActiveModalVehicle(veh)}
                onQuickQuote={(veh) => onOpenQuote(veh)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Bottom Advice & Guarantee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#078FE8]" />
              Don't See Your Exact Engine or Model Year?
            </h3>
            <p className="text-xs sm:text-sm text-[#B9C0C8] max-w-xl">
              We source and install systems for custom engine swaps, older classic truck generations, and specialty platforms. Tell us what you drive and we'll check compatibility.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenQuote()}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white text-xs font-mono font-bold tracking-wider shrink-0 transition-colors shadow-lg shadow-[#078FE8]/25 cursor-pointer"
          >
            CUSTOM FITMENT INQUIRY
          </button>
        </div>
      </section>
    </div>
  );
};
