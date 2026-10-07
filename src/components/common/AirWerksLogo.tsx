import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
}

export const AirWerksLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
}) => {
  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-11 h-11', text: 'text-2xl', sub: 'text-[11px]' },
    xl: { icon: 'w-14 h-14', text: 'text-3xl', sub: 'text-[12px]' }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon: Cold Air Filter + Aerodynamic Velocity Airflow */}
      <div className={`relative flex items-center justify-center shrink-0 ${currentSize.icon}`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="metallicChrome" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#D2D7DF" />
              <stop offset="70%" stopColor="#8A939E" />
              <stop offset="100%" stopColor="#E2E6EC" />
            </linearGradient>
            <linearGradient id="electricBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#078FE8" />
              <stop offset="100%" stopColor="#0757B8" />
            </linearGradient>
            <linearGradient id="filterBase" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1B2026" />
              <stop offset="100%" stopColor="#080A0D" />
            </linearGradient>
            <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Hexagonal / Cylindrical Intake Housing Outline */}
          <rect x="3" y="6" width="42" height="36" rx="8" fill="url(#filterBase)" stroke="url(#metallicChrome)" strokeWidth="1.8" />
          
          {/* Intake Filter Pleats (Performance Blue Flow Elements) */}
          <path d="M12 12V36" stroke="url(#electricBlue)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M17 12V36" stroke="url(#electricBlue)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M22 12V36" stroke="url(#electricBlue)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M27 12V36" stroke="url(#electricBlue)" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* High Velocity Airflow Vector Stream */}
          <path 
            d="M6 24H32L38 16" 
            stroke="url(#metallicChrome)" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M10 29H34L41 21" 
            stroke="url(#electricBlue)" 
            strokeWidth="2.4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            filter="url(#glowEffect)"
          />
          <path 
            d="M6 19H28L34 11" 
            stroke="url(#metallicChrome)" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeOpacity="0.85"
          />

          {/* Air Filter Metallic Ring Flange */}
          <circle cx="40" cy="24" r="3" fill="url(#metallicChrome)" />
          <circle cx="40" cy="24" r="1.2" fill="#078FE8" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight font-black leading-none font-heading">
          <span className={`${currentSize.text} text-white font-extrabold tracking-wider`}>AIR</span>
          <span className={`${currentSize.text} text-[#078FE8] font-extrabold tracking-wider ml-1.5`}>WERKS</span>
        </div>
        {showTagline && (
          <span className={`${currentSize.sub} font-semibold tracking-[0.2em] uppercase text-[#B9C0C8] mt-0.5`}>
            COLD AIR INTAKE SPECIALISTS
          </span>
        )}
      </div>
    </div>
  );
};
