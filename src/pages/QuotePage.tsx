import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { QuoteForm } from '../components/common/QuoteForm';
import { VehicleModel, VehicleEngine } from '../data/vehicles';
import { ShieldCheck, Fuel, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

interface QuotePageProps {
  initialVehicle?: VehicleModel | null;
  initialEngine?: VehicleEngine | null;
  onNavigate?: (page: string) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({
  initialVehicle = null,
  initialEngine = null
}) => {
  return (
    <div className="pt-24 pb-20 space-y-16">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <SectionHeading
          badge="LEAD & FITMENT INQUIRY"
          title="FIND THE RIGHT INTAKE"
          highlight="FOR YOUR TRUCK"
          subtitle="Tell us about your truck and we'll help identify the right cold air intake application, available brands, and installation schedule."
          alignment="center"
        />

        {/* Confidence Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 text-xs font-mono text-[#8A939E]">
          <div className="p-3 rounded-xl bg-[#11151A] border border-[#2E3743] flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#078FE8]" />
            <span>Guaranteed Fitment</span>
          </div>
          <div className="p-3 rounded-xl bg-[#11151A] border border-[#2E3743] flex items-center justify-center gap-2">
            <Fuel className="w-4 h-4 text-[#078FE8]" />
            <span>Gas & Diesel Engines</span>
          </div>
          <div className="p-3 rounded-xl bg-[#11151A] border border-[#2E3743] flex items-center justify-center gap-2">
            <Wrench className="w-4 h-4 text-[#078FE8]" />
            <span>Professional Bay Install</span>
          </div>
          <div className="p-3 rounded-xl bg-[#11151A] border border-[#2E3743] flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#078FE8]" />
            <span>2020+ Focus</span>
          </div>
        </div>
      </section>

      {/* Main Quote Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm
          initialVehicle={initialVehicle}
          initialEngine={initialEngine}
        />
      </section>

      {/* Sourcing & Installation Guarantees */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#11151A] rounded-2xl border border-[#2E3743] p-6 sm:p-8 space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#078FE8]" />
            What Happens After You Submit:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#B9C0C8]">
            <div className="bg-[#181D24] p-4 rounded-xl border border-[#2E3743]/60 space-y-1">
              <span className="text-[10px] font-mono text-[#078FE8] font-bold block">STEP 1</span>
              <strong className="text-white block">Fitment Audit</strong>
              <p className="leading-relaxed">We verify the exact part numbers from S&B, aFe, K&N, Volant, or AEM for your truck's engine code.</p>
            </div>
            <div className="bg-[#181D24] p-4 rounded-xl border border-[#2E3743]/60 space-y-1">
              <span className="text-[10px] font-mono text-[#078FE8] font-bold block">STEP 2</span>
              <strong className="text-white block">Option Breakdown</strong>
              <p className="leading-relaxed">We outline available systems, dry vs oiled filter media, and parts + installation pricing.</p>
            </div>
            <div className="bg-[#181D24] p-4 rounded-xl border border-[#2E3743]/60 space-y-1">
              <span className="text-[10px] font-mono text-[#078FE8] font-bold block">STEP 3</span>
              <strong className="text-white block">Dedicated Bay Slot</strong>
              <p className="leading-relaxed">If installation is requested, we schedule a convenient appointment time in our dedicated bay.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
