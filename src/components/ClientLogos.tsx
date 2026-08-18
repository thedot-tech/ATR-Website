import React from 'react';

// 1. Audi 4 Interlocking Rings Logo
export const AudiLogo: React.FC<{ className?: string }> = ({ className = 'h-7 w-auto' }) => (
  <svg viewBox="0 0 200 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="30" r="23" stroke="currentColor" strokeWidth="5.5" />
    <circle cx="78" cy="30" r="23" stroke="currentColor" strokeWidth="5.5" />
    <circle cx="120" cy="30" r="23" stroke="currentColor" strokeWidth="5.5" />
    <circle cx="162" cy="30" r="23" stroke="currentColor" strokeWidth="5.5" />
  </svg>
);

// 2. Jaya Coffee Since 1955 Logo
export const JayaCoffeeLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => (
  <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
    <div className="flex items-start">
      <span
        style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        className="font-bold text-[26px] tracking-tight text-white leading-none italic"
      >
        Jaya Coffee
      </span>
      <span className="text-[9px] font-sans font-bold text-white/80 ml-0.5 mt-0.5">®</span>
    </div>
    <span
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/80 mt-0.5"
    >
      Since 1955
    </span>
  </div>
);

// 3. Burgerman Logo (Bold, clean, uppercase geometric)
export const BurgermanLogo: React.FC<{ className?: string }> = ({ className = 'h-6 w-auto' }) => (
  <div
    style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
    className={`inline-flex items-center justify-center font-black tracking-[0.28em] text-[17px] text-white select-none ${className}`}
  >
    BURGERMAN
  </div>
);

// 4. Robotronic Logo (Mint green Spartan helmet + ROBOTRONIC text)
export const RobotronicLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => (
  <div className={`inline-flex items-center gap-2 select-none ${className}`}>
    <svg viewBox="0 0 100 100" className="h-7 w-7 shrink-0" fill="none">
      {/* Helmet crest / outer visor */}
      <path
        d="M 50 12 A 38 38 0 0 1 88 50 L 78 50 A 28 28 0 0 0 50 22 Z"
        fill="#00E599"
      />
      <path
        d="M 50 22 A 28 28 0 0 0 22 50 L 12 50 A 38 38 0 0 1 50 12 Z"
        fill="#00E599"
      />
      {/* Cheek guard & neck armor */}
      <path
        d="M 22 50 C 22 75 42 88 50 90 C 58 88 78 75 78 50 L 66 50 C 66 68 54 78 50 80 C 46 78 34 68 34 50 Z"
        fill="#00E599"
      />
      {/* Inner T-visor */}
      <path
        d="M 36 46 L 50 34 L 64 46 L 58 72 L 50 78 L 42 72 Z"
        stroke="#00E599"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
    <div
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      className="flex flex-col leading-none font-bold text-white tracking-wider text-[13px]"
    >
      <span>ROBO</span>
      <span>TRONIC</span>
    </div>
  </div>
);

// 5. The 3D Printing Company Logo
export const ThreeDPrintingLogo: React.FC<{ className?: string }> = ({ className = 'h-9 w-auto' }) => (
  <div className={`inline-flex flex-col items-center justify-center text-center select-none leading-none ${className}`}>
    <span
      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
      className="italic font-bold text-xs tracking-wider text-white/90"
    >
      The 3D
    </span>
    <span
      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
      className="font-bold text-[19px] tracking-normal text-white uppercase mt-0.5"
    >
      Printing
    </span>
    <span
      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
      className="italic text-[11px] tracking-widest text-white/80"
    >
      Company
    </span>
  </div>
);

// 6. Sirpa vanam Logo (Editorial two-tier serif typography)
export const SirpavanamLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => (
  <div className={`inline-flex flex-col items-start justify-center select-none leading-none ${className}`}>
    <span
      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
      className="font-bold text-[22px] tracking-tight text-white"
    >
      Sirpa
    </span>
    <span
      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
      className="font-normal text-[18px] tracking-normal text-white/90 pl-3 -mt-0.5"
    >
      vanam
    </span>
  </div>
);

// 7. Fruitbae Logo (#FRUITBAE with signature orange-to-magenta gradient)
export const FruitbaeLogo: React.FC<{ className?: string }> = ({ className = 'h-7 w-auto' }) => (
  <div
    style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
    className={`inline-flex items-center justify-center font-black tracking-tight text-[19px] select-none ${className}`}
  >
    <span className="text-[#FF6A13] font-bold mr-0.5 text-[21px]">#</span>
    <span className="text-[#FF6A13]">FRUIT</span>
    <span className="text-[#FF007F]">BAE</span>
  </div>
);

// 8. Mathi Mobiles Logo (Purple starburst icon + MATHI MOBILES text + A Mariappa Nadar Group)
export const MathiMobilesLogo: React.FC<{ className?: string }> = ({ className = 'h-8 w-auto' }) => (
  <div className={`inline-flex items-center gap-2 select-none ${className}`}>
    {/* Purple Gradient Starburst Icon matching the image */}
    <svg viewBox="0 0 100 100" className="h-7 w-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mathiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#E879F9" />
        </linearGradient>
      </defs>
      {/* 4 Chevron arms in angled starburst */}
      <path d="M 50 12 L 32 32 L 50 44 L 68 32 Z" fill="url(#mathiGrad)" />
      <path d="M 88 50 L 68 32 L 56 50 L 68 68 Z" fill="url(#mathiGrad)" />
      <path d="M 50 88 L 68 68 L 50 56 L 32 68 Z" fill="url(#mathiGrad)" />
      <path d="M 12 50 L 32 68 L 44 50 L 32 32 Z" fill="url(#mathiGrad)" />
    </svg>
    <div className="flex flex-col leading-tight justify-center">
      <div className="flex flex-col leading-[0.95] tracking-wider text-white font-extrabold text-[12px]">
        <span>MATHI</span>
        <span>MOBILES</span>
      </div>
      <span className="text-[7px] font-medium text-white/70 tracking-normal mt-0.5">
        A Mariappa Nadar Group
      </span>
    </div>
  </div>
);
