import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  alignment = 'center',
  className = ''
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[alignment]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#078FE8]/10 border border-[#078FE8]/30 mb-3.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#078FE8] animate-pulse" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#078FE8] uppercase font-mono">
            {badge}
          </span>
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F7F9FC] tracking-tight leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#078FE8] via-[#38BDF8] to-[#0757B8]">
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[#B9C0C8] font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
