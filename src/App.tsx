import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { VehiclesPage } from './pages/VehiclesPage';
import { ColdAirIntakesPage } from './pages/ColdAirIntakesPage';
import { BrandsPage } from './pages/BrandsPage';
import { InstallationPage } from './pages/InstallationPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { VehicleDetailModal } from './components/common/VehicleDetailModal';
import { VehicleModel, VehicleEngine } from './data/vehicles';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedVehicleMake, setSelectedVehicleMake] = useState<string>('all');
  
  // Fitment Quote Passing
  const [quoteTargetVehicle, setQuoteTargetVehicle] = useState<VehicleModel | null>(null);
  const [quoteTargetEngine, setQuoteTargetEngine] = useState<VehicleEngine | null>(null);

  // Global Vehicle Modal state
  const [activeModalVehicle, setActiveModalVehicle] = useState<VehicleModel | null>(null);

  // Scroll to top on page change & update title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const pageTitles: Record<string, string> = {
      home: 'Air Werks | Cold Air Intake Sales & Professional Installation',
      vehicles: 'Supported Truck Platforms | Air Werks',
      intakes: 'Cold Air Intake Technology & Engineering | Air Werks',
      brands: 'Sourced Performance Intake Brands | Air Werks',
      installation: 'Professional Intake Installation Bay | Air Werks',
      about: 'About Air Werks | Cold Air Intake Specialists',
      contact: 'Contact Us & Bay Hours | Air Werks',
      quote: 'Request A Quote & Fitment | Air Werks'
    };

    document.title = pageTitles[currentPage] || 'Air Werks | Cold Air Intake Installation';
  }, [currentPage]);

  useEffect(() => {
    const updateBackToTopVisibility = () => {
      setShowBackToTop(window.scrollY > 320);
    };

    updateBackToTopVisibility();
    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateBackToTopVisibility);
  }, []);

  // Handle navigation
  const handleNavigate = (page: string, makeFilter?: string) => {
    if (makeFilter) {
      setSelectedVehicleMake(makeFilter);
    }
    setCurrentPage(page);
  };

  // Handle direct Quote trigger
  const handleOpenQuote = (vehicle?: VehicleModel, engine?: VehicleEngine) => {
    if (vehicle) {
      setQuoteTargetVehicle(vehicle);
      setQuoteTargetEngine(engine || vehicle.engines[0]);
    }
    setCurrentPage('quote');
  };

  return (
    <div className="min-h-screen bg-[#080A0D] text-[#F7F9FC] flex flex-col font-body selection:bg-[#078FE8]/30 selection:text-white">
      {/* Sticky Global Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={(p) => handleNavigate(p)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Global Vehicle Detail Modal */}
      <VehicleDetailModal
        vehicle={activeModalVehicle}
        isOpen={!!activeModalVehicle}
        onClose={() => setActiveModalVehicle(null)}
        onRequestQuote={(v, eng) => {
          handleOpenQuote(v, eng);
          setActiveModalVehicle(null);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(p) => handleNavigate(p)}
            onOpenQuote={(v) => handleOpenQuote(v)}
            onSelectVehicle={(v) => setActiveModalVehicle(v)}
          />
        )}

        {currentPage === 'vehicles' && (
          <VehiclesPage
            initialMake={selectedVehicleMake}
            onOpenQuote={(v, eng) => handleOpenQuote(v, eng)}
          />
        )}

        {currentPage === 'intakes' && (
          <ColdAirIntakesPage
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={(p) => handleNavigate(p)}
          />
        )}

        {currentPage === 'brands' && (
          <BrandsPage
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={(p) => handleNavigate(p)}
          />
        )}

        {currentPage === 'installation' && (
          <InstallationPage
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={(p) => handleNavigate(p)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenQuote={() => handleOpenQuote()}
            onNavigate={(p) => handleNavigate(p)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'quote' && (
          <QuotePage
            initialVehicle={quoteTargetVehicle}
            initialEngine={quoteTargetEngine}
            onNavigate={(p) => handleNavigate(p)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={(p) => handleNavigate(p)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-[#078FE8]/50 bg-[#11151A]/90 text-white shadow-lg shadow-black/30 backdrop-blur transition-colors hover:bg-[#078FE8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#078FE8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080A0D]"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

export default App;
