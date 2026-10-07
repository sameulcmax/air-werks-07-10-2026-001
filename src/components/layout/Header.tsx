import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPage]);

  const handleLogoClick = () => {
    onNavigate('home');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'vehicles', label: 'VEHICLES' },
    { id: 'intakes', label: 'INTAKES' },
    { id: 'brands', label: 'BRANDS' },
    { id: 'installation', label: 'INSTALLATION' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <>
      <header
      id="header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080A0D] py-3 shadow-xl'
            : 'py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo Anchor */}
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
            aria-label="Air Werks Home"
          >
            <img
              src="/logo.png"
              alt="Air Werks"
              className="h-20 w-[clamp(180px,58vw,320px)] object-contain sm:h-24"
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#078FE8] bg-[#078FE8]/10 border border-[#078FE8]/30 shadow-sm'
                      : 'text-[#B9C0C8] hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Side CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenQuote}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#078FE8] to-[#0757B8] hover:from-[#38BDF8] hover:to-[#078FE8] text-white text-xs font-bold font-mono tracking-wider shadow-lg shadow-[#078FE8]/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                REQUEST A QUOTE
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenQuote}
              className="px-3 py-1.5 rounded-lg bg-[#078FE8] text-white text-[11px] font-mono font-bold tracking-wider shadow-md cursor-pointer"
            >
              QUOTE
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#11151A] border border-[#2E3743] text-white hover:text-[#078FE8] transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#080A0D] border-l border-[#2E3743] shadow-2xl flex flex-col justify-between overflow-y-auto">
            {/* Header */}
            <div className="p-5 border-b border-[#2E3743] flex items-center justify-between">
              <button
                type="button"
                onClick={handleLogoClick}
                className="flex items-center text-left focus:outline-none cursor-pointer"
                aria-label="Air Werks Home"
              >
                <img
                  src="/logo.png"
                  alt="Air Werks"
                  className="h-20 w-[clamp(180px,58vw,320px)] object-contain"
                />
              </button>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-[#11151A] text-white border border-[#2E3743] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation list */}
            <div className="p-5 space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#8A939E] tracking-widest px-3 block mb-2">
                Navigation
              </span>
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => {
                      onNavigate(link.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl text-sm font-mono font-bold tracking-wider transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-[#078FE8]/15 border border-[#078FE8] text-[#078FE8]'
                        : 'text-[#F7F9FC] hover:bg-[#11151A] hover:text-[#078FE8]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-60" />
                  </button>
                );
              })}

              {/* Truck Quick Links */}
              <div className="pt-4 mt-4 border-t border-[#2E3743] space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#8A939E] tracking-widest px-3 block">
                  Quick Truck Applications
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {['Ford Super Duty', 'Silverado HD', 'RAM 2500/3500', 'Toyota Tacoma'].map((truck, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        onNavigate('vehicles');
                        setMobileMenuOpen(false);
                      }}
                      className="p-2 rounded-lg bg-[#11151A] border border-[#2E3743] text-xs text-[#B9C0C8] hover:text-white text-left font-mono cursor-pointer"
                    >
                      {truck}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-5 bg-[#11151A] border-t border-[#2E3743] space-y-3">
              <button
                type="button"
                onClick={() => {
                  onOpenQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#078FE8] to-[#0757B8] text-white text-sm font-bold font-mono tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#078FE8]/30 cursor-pointer"
              >
                REQUEST A QUOTE
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-3 gap-2 pt-1 text-[10px] text-center text-[#8A939E] font-mono">
                <div className="p-1 rounded bg-[#080A0D]">GAS & DIESEL</div>
                <div className="p-1 rounded bg-[#080A0D]">2020+ TRUCKS</div>
                <div className="p-1 rounded bg-[#080A0D]">BAY INSTALL</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
