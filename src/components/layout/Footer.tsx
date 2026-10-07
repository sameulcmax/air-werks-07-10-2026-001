import React from 'react';
import { AirWerksLogo } from '../common/AirWerksLogo';
import { ArrowUpRight, ShieldCheck, Wrench, Fuel, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-[#080A0D] border-t border-[#2E3743] text-[#B9C0C8] pt-16 pb-12 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#078FE8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2E3743]/60">
          
          {/* Brand Col (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <AirWerksLogo size="lg" showTagline={true} />
            </button>
            <p className="text-xs sm:text-sm text-[#B9C0C8] leading-relaxed max-w-sm">
              Air Werks is a dedicated automotive cold air intake sales, sourcing, and professional installation company. We specialize in matching modern gas and diesel trucks with engineered induction systems from trusted performance brands.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#8A939E]">
              <span className="px-2.5 py-1 rounded bg-[#11151A] border border-[#2E3743] flex items-center gap-1.5">
                <Fuel className="w-3.5 h-3.5 text-[#078FE8]" />
                Gas + Diesel
              </span>
              <span className="px-2.5 py-1 rounded bg-[#11151A] border border-[#2E3743] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#078FE8]" />
                2020+ Focus
              </span>
              <span className="px-2.5 py-1 rounded bg-[#11151A] border border-[#2E3743] flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[#078FE8]" />
                Bay Installation
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'vehicles', label: 'Supported Vehicles' },
                { id: 'intakes', label: 'Cold Air Intakes' },
                { id: 'brands', label: 'Sourced Brands' },
                { id: 'installation', label: 'Installation Process' },
                { id: 'about', label: 'About Air Werks' },
                { id: 'contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-[#078FE8] transition-colors text-left flex items-center gap-1 cursor-pointer"
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicle Platforms */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Truck Platforms
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'Ford F-150 / Raptor',
                'Ford Super Duty F-250/350',
                'Chevy Silverado 1500 / HD',
                'GMC Sierra AT4 / Denali',
                'RAM 1500 / 2500 / 3500 HD',
                'Toyota Tacoma & Tundra'
              ].map((truck, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate('vehicles')}
                    className="hover:text-white transition-colors text-left flex items-center gap-1 text-[#8A939E] cursor-pointer"
                  >
                    <ArrowUpRight className="w-3 h-3 text-[#078FE8]" />
                    {truck}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Lead Action */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Fitment & Booking
            </h4>
            <p className="text-xs text-[#8A939E] leading-relaxed">
              Ready to verify fitment and get pricing for your truck?
            </p>
            <button
              onClick={onOpenQuote}
              className="w-full py-3 rounded-xl bg-[#078FE8] hover:bg-[#0757B8] text-white text-xs font-bold font-mono tracking-wider shadow-lg shadow-[#078FE8]/25 transition-all text-center cursor-pointer"
            >
              REQUEST A QUOTE
            </button>

            <div className="space-y-1.5 pt-2 text-xs text-[#8A939E]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#078FE8] shrink-0" />
                <span>Zero guesswork fitment guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Transparency Note */}
        <div className="py-6 border-b border-[#2E3743]/40 text-[11px] text-[#8A939E] leading-relaxed">
          <p>
            <strong>Transparency Notice:</strong> Air Werks is an independent automotive cold-air-intake sourcing and installation service company. All third-party trademarks, vehicle brand names (Ford, Chevrolet, GMC, RAM, Toyota), and intake brand names (S&B Filters, aFe POWER, K&N, Volant, AEM) belong to their respective registered owners and are referenced solely for application identification and fitment compatibility. Air Werks does not manufacture cold air intake systems.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A939E]">
          <div>
            © {new Date().getFullYear()} AIR WERKS. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Cold Air Intake Sourcing & Installation</span>
            <span>•</span>
            <span>Gas & Diesel Applications</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
