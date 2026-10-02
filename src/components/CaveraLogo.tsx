import React from 'react';

interface CaveraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light'; // dark means dark logo elements for white background
}

export const CaveraLogo: React.FC<CaveraLogoProps> = ({
  className = '',
  size = 'md',
  theme = 'light',
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Automotive Silhouette Icon with Red Neon Contour */}
      <div className={`relative flex items-center justify-center shrink-0 ${isSm ? 'w-9 h-9' : isLg ? 'w-16 h-16' : 'w-12 h-12'}`}>
        <svg
          viewBox="0 0 100 70"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(220,38,38,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Neon Red Speed Accent Lines */}
          <path
            d="M 5 18 C 25 8, 70 8, 95 32"
            stroke="#ef4444"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="filter drop-shadow-[0_0_6px_#ef4444]"
          />
          <path
            d="M 2 54 L 98 48"
            stroke="#dc2626"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Car Body Silhouette */}
          <path
            d="M 8 46 C 10 38, 18 36, 25 35 C 32 26, 42 16, 56 16 C 68 16, 78 22, 85 34 C 92 36, 96 40, 96 46 C 96 49, 88 50, 85 50 C 82 50, 80 43, 72 43 C 64 43, 62 50, 36 50 C 34 50, 32 43, 24 43 C 16 43, 14 50, 10 50 Z"
            fill="#09090b"
            stroke="#ef4444"
            strokeWidth="1.8"
          />

          {/* Windshield & Cabin Chrome/White highlight */}
          <path
            d="M 36 32 C 43 23, 52 20, 60 20 C 67 20, 72 24, 76 32 Z"
            fill="#f8fafc"
            stroke="#94a3b8"
            strokeWidth="1"
          />
          {/* Cabin glass divide */}
          <line x1="57" y1="20" x2="55" y2="32" stroke="#09090b" strokeWidth="1.5" />

          {/* Headlights Red & White flare */}
          <ellipse cx="14" cy="42" rx="4" ry="2.2" fill="#ffffff" stroke="#ef4444" strokeWidth="1" />
          <ellipse cx="88" cy="42" rx="3" ry="1.8" fill="#ef4444" />
        </svg>
      </div>

      {/* Typography: CAVERA VEÍCULOS */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span
            className={`font-black tracking-tighter uppercase italic leading-none font-display ${
              isSm ? 'text-lg' : isLg ? 'text-3xl' : 'text-2xl'
            }`}
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.15)',
              letterSpacing: '-0.05em',
            }}
          >
            <span className="text-zinc-950 font-black">CAVERA</span>
          </span>
        </div>

        {/* VEÍCULOS in Racing Red with dual underline bars */}
        <div className="flex items-center gap-1 mt-0.5">
          <div className="h-[2px] w-3 bg-red-600 rounded-full" />
          <span
            className={`font-black uppercase italic tracking-widest text-red-600 leading-none ${
              isSm ? 'text-[9px]' : isLg ? 'text-sm' : 'text-[11px]'
            }`}
            style={{ letterSpacing: '0.15em' }}
          >
            VEÍCULOS
          </span>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-red-600 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
};
