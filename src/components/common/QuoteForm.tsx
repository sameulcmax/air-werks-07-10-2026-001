import React, { useState, useEffect } from 'react';
import { VehicleModel, VehicleEngine, VEHICLE_DATA } from '../../data/vehicles';
import { CheckCircle2, AlertCircle, Send, Sparkles, RefreshCw, Mail, Wrench, Shield } from 'lucide-react';

interface QuoteFormProps {
  initialVehicle?: VehicleModel | null;
  initialEngine?: VehicleEngine | null;
  onSuccess?: () => void;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialVehicle = null,
  initialEngine = null,
  className = ''
}) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    contactPreference: 'Phone' as 'Phone' | 'Email' | 'Text Message',
    year: '2024',
    make: 'Ford',
    model: 'F-250 / F-350 Super Duty',
    engine: '6.7L Power Stroke Turbo Diesel V8',
    fuelType: 'Diesel' as 'Gas' | 'Diesel' | 'Hybrid Gas',
    currentMods: 'Stock' as 'Stock' | 'Aftermarket Exhaust' | 'Tuned / Programmed' | 'Lifted / Off-Road Build' | 'Heavy Towing Rig',
    preferredBrand: 'Recommended by Air Werks',
    filterType: 'Dry Extend (Low Maintenance)' as 'Dry Extend (Low Maintenance)' | 'Oiled Cleanable (Max CFM)' | 'Recommend For Me',
    installNeeded: 'Yes - Professional Bay Installation',
    timeline: 'Within 1-2 Weeks' as 'ASAP' | 'Within 1-2 Weeks' | 'Within a Month' | 'Just Researching',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill if vehicle/engine passed via props
  useEffect(() => {
    if (initialVehicle) {
      const defaultEng = initialEngine || initialVehicle.engines[0];
      setFormData(prev => ({
        ...prev,
        make: initialVehicle.make,
        model: initialVehicle.model,
        year: initialVehicle.is2020Plus ? '2024' : '2021',
        engine: defaultEng ? defaultEng.name : '',
        fuelType: defaultEng ? defaultEng.fuelType : 'Gas'
      }));
    }
  }, [initialVehicle, initialEngine]);

  // Handle dynamic engine list based on make
  const availableVehiclesForMake = VEHICLE_DATA.filter(v => v.make === formData.make);
  const selectedVehicleObj = availableVehiclesForMake.find(v => v.model === formData.model) || availableVehiclesForMake[0];

  const handleMakeChange = (newMake: string) => {
    const vList = VEHICLE_DATA.filter(v => v.make === newMake);
    const firstV = vList[0];
    const firstEng = firstV?.engines[0];

    setFormData(prev => ({
      ...prev,
      make: newMake,
      model: firstV ? firstV.model : '',
      engine: firstEng ? firstEng.name : '',
      fuelType: firstEng ? firstEng.fuelType : 'Gas'
    }));
  };

  const handleModelChange = (newModel: string) => {
    const vObj = availableVehiclesForMake.find(v => v.model === newModel);
    const firstEng = vObj?.engines[0];
    setFormData(prev => ({
      ...prev,
      model: newModel,
      engine: firstEng ? firstEng.name : prev.engine,
      fuelType: firstEng ? firstEng.fuelType : prev.fuelType
    }));
  };

  const handleEngineChange = (engineName: string) => {
    const engObj = selectedVehicleObj?.engines.find(e => e.name === engineName);
    setFormData(prev => ({
      ...prev,
      engine: engineName,
      fuelType: engObj ? engObj.fuelType : prev.fuelType
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate front-end validation & submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  // Construct mailto link fallback
  const mailtoSubject = encodeURIComponent(`Intake Quote Request: ${formData.year} ${formData.make} ${formData.model} (${formData.engine})`);
  const mailtoBody = encodeURIComponent(
    `Air Werks Intake Quote Request:\n\n` +
    `Customer: ${formData.name}\n` +
    `Phone: ${formData.phone}\n` +
    `Email: ${formData.email}\n` +
    `Vehicle: ${formData.year} ${formData.make} ${formData.model}\n` +
    `Engine: ${formData.engine} (${formData.fuelType})\n` +
    `Current Modifications: ${formData.currentMods}\n` +
    `Preferred Brand: ${formData.preferredBrand}\n` +
    `Filter Type: ${formData.filterType}\n` +
    `Installation Required: ${formData.installNeeded}\n` +
    `Timeline: ${formData.timeline}\n` +
    `Notes: ${formData.notes || 'None'}\n`
  );

  return (
    <div className={`bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 sm:p-8 shadow-2xl ${className}`}>
      {submitted ? (
        <div className="py-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#078FE8] font-bold">
              Fitment Request Prepared
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Thank You, {formData.name || 'Valued Driver'}!
            </h3>
            <p className="text-sm text-[#B9C0C8] leading-relaxed">
              We’ve compiled your intake configuration for your <strong className="text-white">{formData.year} {formData.make} {formData.model} ({formData.engine})</strong>.
            </p>
          </div>

          {/* Fitment Summary Card */}
          <div className="bg-[#181D24] border border-[#2E3743] rounded-xl p-5 max-w-lg mx-auto text-left text-xs space-y-2.5">
            <div className="flex items-center justify-between border-b border-[#2E3743] pb-2 font-mono text-[#8A939E]">
              <span>APPLICATION SUMMARY</span>
              <span className="text-[#078FE8] font-bold">AIR WERKS FITMENT</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-white">
              <div>
                <span className="text-[#8A939E] block">Truck</span>
                <span className="font-semibold">{formData.year} {formData.make} {formData.model}</span>
              </div>
              <div>
                <span className="text-[#8A939E] block">Engine & Fuel</span>
                <span className="font-semibold">{formData.engine} ({formData.fuelType})</span>
              </div>
              <div>
                <span className="text-[#8A939E] block">Intake Brand</span>
                <span className="font-semibold">{formData.preferredBrand}</span>
              </div>
              <div>
                <span className="text-[#8A939E] block">Service Type</span>
                <span className="font-semibold">{formData.installNeeded}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={`mailto:info@airwerksperformance.placeholder?subject=${mailtoSubject}&body=${mailtoBody}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#078FE8]/25 transition-all"
            >
              <Mail className="w-4 h-4" />
              Open In Your Email Client
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#1B2026] hover:bg-[#222832] border border-[#2E3743] text-sm text-[#B9C0C8] hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              Edit Request
            </button>
          </div>

          <p className="text-[11px] text-[#8A939E] max-w-md mx-auto italic">
            * Frontend Lead Mode: Form inputs are verified in-browser. Connect with our Air Werks specialists for direct scheduling.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header */}
          <div className="border-b border-[#2E3743] pb-4">
            <div className="flex items-center gap-2 text-[#078FE8] text-xs font-mono font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              Vehicle Sourcing & Installation Quote
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Identify Your Truck & Request Fitment
            </h3>
            <p className="text-xs sm:text-sm text-[#B9C0C8] mt-1">
              Tell us your vehicle details and our intake specialists will match the best available cold air intake system for your build.
            </p>
          </div>

          {/* STEP 1: VEHICLE INFORMATION */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#078FE8] text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
                Truck Specifications
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {/* Year */}
              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Year *
                </label>
                <select
                  value={formData.year}
                  onChange={e => setFormData({ ...formData, year: e.target.value })}
                  className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm transition-colors cursor-pointer"
                  required
                >
                  {['2025+', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015 & Earlier'].map(yr => (
                    <option key={yr} value={yr} className="bg-[#11151A] text-white">{yr}</option>
                  ))}
                </select>
              </div>

              {/* Make */}
              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Make *
                </label>
                <select
                  value={formData.make}
                  onChange={e => handleMakeChange(e.target.value)}
                  className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm transition-colors cursor-pointer"
                  required
                >
                  <option value="Ford" className="bg-[#11151A]">Ford</option>
                  <option value="Chevrolet" className="bg-[#11151A]">Chevrolet</option>
                  <option value="GMC" className="bg-[#11151A]">GMC</option>
                  <option value="RAM" className="bg-[#11151A]">RAM</option>
                  <option value="Toyota" className="bg-[#11151A]">Toyota</option>
                  <option value="Other" className="bg-[#11151A]">Other Make</option>
                </select>
              </div>

              {/* Model */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Model / Trim *
                </label>
                {formData.make === 'Other' ? (
                  <input
                    type="text"
                    placeholder="e.g. Nissan Titan, Jeep Gladiator"
                    value={formData.model}
                    onChange={e => setFormData({ ...formData, model: e.target.value })}
                    className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm"
                    required
                  />
                ) : (
                  <select
                    value={formData.model}
                    onChange={e => handleModelChange(e.target.value)}
                    className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm transition-colors cursor-pointer"
                    required
                  >
                    {availableVehiclesForMake.map(v => (
                      <option key={v.id} value={v.model} className="bg-[#11151A]">{v.model}</option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            {/* Engine & Fuel Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Engine Platform *
                </label>
                {selectedVehicleObj?.engines && selectedVehicleObj.engines.length > 0 ? (
                  <select
                    value={formData.engine}
                    onChange={e => handleEngineChange(e.target.value)}
                    className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm transition-colors cursor-pointer"
                    required
                  >
                    {selectedVehicleObj.engines.map((eng, idx) => (
                      <option key={idx} value={eng.name} className="bg-[#11151A]">
                        {eng.name} ({eng.fuelType})
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    placeholder="e.g. 5.7L V8, 6.7L Turbo Diesel"
                    value={formData.engine}
                    onChange={e => setFormData({ ...formData, engine: e.target.value })}
                    className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm"
                    required
                  />
                )}
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Fuel Application *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Gas', 'Diesel'] as const).map(fuel => (
                    <button
                      key={fuel}
                      type="button"
                      onClick={() => setFormData({ ...formData, fuelType: fuel })}
                      className={`py-2 px-3 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                        formData.fuelType === fuel
                          ? fuel === 'Diesel'
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                            : 'bg-[#078FE8]/20 border-[#078FE8] text-[#078FE8]'
                          : 'bg-[#181D24] border-[#2E3743] text-[#8A939E] hover:text-white'
                      }`}
                    >
                      {fuel} Application
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2: BUILD & INTAKE PREFERENCES */}
          <div className="space-y-4 pt-4 border-t border-[#2E3743]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#078FE8] text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
                Intake & Installation Preferences
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Brand Preference */}
              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Preferred Intake Brand
                </label>
                <select
                  value={formData.preferredBrand}
                  onChange={e => setFormData({ ...formData, preferredBrand: e.target.value })}
                  className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm cursor-pointer"
                >
                  <option value="Recommended by Air Werks" className="bg-[#11151A]">Air Werks Recommendation</option>
                  <option value="S&B Filters" className="bg-[#11151A]">S&B Filters</option>
                  <option value="aFe POWER" className="bg-[#11151A]">aFe POWER</option>
                  <option value="K&N Engineering" className="bg-[#11151A]">K&N Engineering</option>
                  <option value="Volant Performance" className="bg-[#11151A]">Volant Performance</option>
                  <option value="AEM Induction" className="bg-[#11151A]">AEM Induction</option>
                </select>
              </div>

              {/* Filter Type */}
              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Filter Media Type
                </label>
                <select
                  value={formData.filterType}
                  onChange={e => setFormData({ ...formData, filterType: e.target.value as any })}
                  className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm cursor-pointer"
                >
                  <option value="Dry Extend (Low Maintenance)" className="bg-[#11151A]">Dry Synthetic (No Oil)</option>
                  <option value="Oiled Cleanable (Max CFM)" className="bg-[#11151A]">Oiled Cotton (Cleanable)</option>
                  <option value="Recommend For Me" className="bg-[#11151A]">Recommend Based on Use</option>
                </select>
              </div>

              {/* Current Mods */}
              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Current Truck Setup
                </label>
                <select
                  value={formData.currentMods}
                  onChange={e => setFormData({ ...formData, currentMods: e.target.value as any })}
                  className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm cursor-pointer"
                >
                  <option value="Stock" className="bg-[#11151A]">All Stock Engine</option>
                  <option value="Aftermarket Exhaust" className="bg-[#11151A]">Exhaust Installed</option>
                  <option value="Tuned / Programmed" className="bg-[#11151A]">Tuned / Programmer</option>
                  <option value="Heavy Towing Rig" className="bg-[#11151A]">Heavy Towing / Hauling</option>
                  <option value="Lifted / Off-Road Build" className="bg-[#11151A]">Lifted / Overland Build</option>
                </select>
              </div>
            </div>

            {/* Installation Option */}
            <div>
              <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                Installation Requirement *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { val: 'Yes - Professional Bay Installation', label: 'Yes — Sourcing & Professional Bay Installation', icon: Wrench },
                  { val: 'No - Intake Sourcing Only', label: 'Sourcing Only (Self / Local Install)', icon: Shield }
                ].map(opt => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => setFormData({ ...formData, installNeeded: opt.val })}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                      formData.installNeeded === opt.val
                        ? 'bg-[#078FE8]/15 border-[#078FE8] text-white'
                        : 'bg-[#181D24] border-[#2E3743] text-[#8A939E] hover:text-white'
                    }`}
                  >
                    <opt.icon className="w-4 h-4 text-[#078FE8] shrink-0" />
                    <span className="font-semibold">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* STEP 3: CONTACT INFORMATION */}
          <div className="space-y-4 pt-4 border-t border-[#2E3743]">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#078FE8] text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono">
                Your Contact Information
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mike Henderson"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. (555) 019-2834"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="e.g. mike@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Desired Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={e => setFormData({ ...formData, timeline: e.target.value as any })}
                  className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm cursor-pointer"
                >
                  <option value="ASAP" className="bg-[#11151A]">ASAP / Ready to Install</option>
                  <option value="Within 1-2 Weeks" className="bg-[#11151A]">Within 1 - 2 Weeks</option>
                  <option value="Within a Month" className="bg-[#11151A]">Within 1 Month</option>
                  <option value="Just Researching" className="bg-[#11151A]">Planning / Researching</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                  Preferred Contact Method
                </label>
                <div className="flex gap-2">
                  {(['Phone', 'Email', 'Text Message'] as const).map(meth => (
                    <button
                      key={meth}
                      type="button"
                      onClick={() => setFormData({ ...formData, contactPreference: meth })}
                      className={`flex-1 py-2 px-2 rounded-xl border text-xs font-mono transition-all text-center cursor-pointer ${
                        formData.contactPreference === meth
                          ? 'bg-[#078FE8]/20 border-[#078FE8] text-[#078FE8] font-bold'
                          : 'bg-[#181D24] border-[#2E3743] text-[#8A939E]'
                      }`}
                    >
                      {meth}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#8A939E] uppercase mb-1">
                Additional Notes or Questions (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Mention specific brand desires, towing weights, or engine bay questions..."
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#181D24] border border-[#2E3743] focus:border-[#078FE8] text-white rounded-xl px-3 py-2.5 text-sm"
              />
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#8A939E]">
              <AlertCircle className="w-4 h-4 text-[#078FE8] shrink-0" />
              <span>Air Werks guarantees fitment verification before ordering or scheduling.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#078FE8]/25 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Generating Fitment Profile...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  SUBMIT INTAKE REQUEST
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
