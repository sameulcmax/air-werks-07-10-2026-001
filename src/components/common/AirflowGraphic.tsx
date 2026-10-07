import React from 'react';

interface AirflowGraphicProps {
  className?: string;
  variant?: 'subtle' | 'dynamic' | 'horizontal';
}

export const AirflowGraphic: React.FC<AirflowGraphicProps> = ({
  className = '',
  variant = 'horizontal'
}) => {
  const opacityClass = variant === 'subtle' ? 'opacity-30' : variant === 'dynamic' ? 'opacity-80' : 'opacity-60';

  return (
    <div className={`overflow-hidden pointer-events-none select-none relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1000 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${opacityClass}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#078FE8" stopOpacity="0" />
            <stop offset="40%" stopColor="#078FE8" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0757B8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B9C0C8" stopOpacity="0" />
            <stop offset="50%" stopColor="#B9C0C8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#078FE8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Primary Stream */}
        <path
          d="M0,60 C250,20 400,95 700,45 C850,20 950,60 1000,60"
          stroke="url(#flowGrad1)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-airflow"
        />

        {/* Secondary Stream */}
        <path
          d="M0,40 C200,75 450,25 650,70 C800,95 900,40 1000,40"
          stroke="url(#flowGrad2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-airflow-delayed"
        />

        {/* Accent High-Speed Stream */}
        <path
          d="M0,80 C300,90 550,45 800,60 C900,65 950,75 1000,80"
          stroke="url(#flowGrad1)"
          strokeWidth="1.8"
          strokeDasharray="12 16"
          strokeLinecap="round"
          className="animate-airflow"
        />
      </svg>
    </div>
  );
};
