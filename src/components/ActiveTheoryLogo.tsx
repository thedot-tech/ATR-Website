import React from 'react';

interface ActiveTheoryLogoProps {
  className?: string;
  height?: number | string;
  theme?: 'dark' | 'light';
}

export const ActiveTheoryLogo: React.FC<ActiveTheoryLogoProps> = ({
  className = '',
  height = 50,
  theme = 'light',
}) => {
  // On dark background (theme === 'light'): White text, Lime 3D shadow, Dark outline
  // On light background (theme === 'dark'): Dark text, Lime 3D shadow, White/Dark outline
  const isDarkBg = theme === 'light';
  
  const fillColor = isDarkBg ? '#FFFFFF' : '#1B133C';
  const shadowColor = isDarkBg ? '#CBF24C' : '#1B133C';
  const strokeColor = isDarkBg ? '#0D0B14' : '#FFFFFF';

  return (
    <div className={`inline-flex items-center select-none ${className}`} style={{ height: height || 50 }}>
      <svg
        viewBox="0 0 250 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto block"
        style={{ maxHeight: '100%', overflow: 'visible' }}
      >
        <defs>
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&display=swap');
            .at-logo-font {
              font-family: 'Montserrat', 'Arial Black', Impact, sans-serif;
              font-weight: 900;
              font-style: italic;
              text-transform: uppercase;
            }
          `}</style>
        </defs>

        {/* 3D Extrusion Shadow Layer */}
        {[6, 5, 4, 3, 2, 1].map((offset) => (
          <g key={offset} transform={`translate(${offset}, ${offset})`} fill={shadowColor} stroke={shadowColor} strokeWidth="1.5">
            <text x="42" y="40" fontSize="38" letterSpacing="-0.5" className="at-logo-font">ACTIVE</text>
            <text x="4" y="80" fontSize="38" letterSpacing="-0.5" className="at-logo-font">THEORY</text>
            <path d="M 32 87 L 222 87 L 220 94 L 28 94 Z" />
          </g>
        ))}

        {/* Dark Stroke Outline for sharp definition */}
        <g fill={strokeColor} stroke={strokeColor} strokeWidth="4" strokeLinejoin="miter">
          <text x="42" y="40" fontSize="38" letterSpacing="-0.5" className="at-logo-font">ACTIVE</text>
          <text x="4" y="80" fontSize="38" letterSpacing="-0.5" className="at-logo-font">THEORY</text>
          <path d="M 32 87 L 222 87 L 220 94 L 28 94 Z" />
        </g>

        {/* Front Face Text */}
        <g fill={fillColor} stroke={fillColor} strokeWidth="0.5">
          <text x="42" y="40" fontSize="38" letterSpacing="-0.5" className="at-logo-font">ACTIVE</text>
          <text x="4" y="80" fontSize="38" letterSpacing="-0.5" className="at-logo-font">THEORY</text>
          <path d="M 32 87 L 222 87 L 220 94 L 28 94 Z" />
        </g>
      </svg>
    </div>
  );
};

export default ActiveTheoryLogo;
