import React from 'react';

// Image paths from static public/assets folder
const sirpavanamImg = '/assets/sirpavanam.png';
const mathiMobilesImg = '/assets/mathi mobiles.png';
const jayaCoffeeImg = '/assets/jaya coffee.png';
const robotronicImg = '/assets/robotronic.png';
const threeDPrintingImg = '/assets/3d ong.png';
const siemensImg = '/assets/siemens.png';
const shanthiGearsImg = '/assets/shanthi gears.png';
const burgerKingImg = '/assets/burger king.png';
const bbtImg = '/assets/bbt.png';
const caterpillarImg = '/assets/caterpillar.png';
const nolaOn5thImg = '/assets/nola_on_5th.png';

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
export const JayaCoffeeLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => (
  <img
    src={jayaCoffeeImg}
    alt="Jaya Coffee"
    className={`object-contain max-h-full max-w-full rounded ${className}`}
  />
);

// 3. Siemens Logo
export const SiemensLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => (
  <img
    src={siemensImg}
    alt="Siemens"
    className={`object-contain max-h-full max-w-full ${className}`}
  />
);

// 4. Shanthi Gears Logo
export const ShanthiGearsLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => (
  <img
    src={shanthiGearsImg}
    alt="Shanthi Gears"
    className={`object-contain max-h-full max-w-full ${className}`}
  />
);

// 5. Burger King Logo
export const BurgerKingLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => (
  <img
    src={burgerKingImg}
    alt="Burger King"
    className={`object-contain max-h-full max-w-full ${className}`}
  />
);

// 6. Robotronic Logo
export const RobotronicLogo: React.FC<{ className?: string; textColor?: string }> = ({
  className = 'h-10 w-auto',
}) => (
  <img
    src={robotronicImg}
    alt="Robotronic"
    className={`object-contain max-h-full max-w-full rounded ${className}`}
  />
);

// 7. The 3D Printing Company Logo
export const ThreeDPrintingLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => (
  <img
    src={threeDPrintingImg}
    alt="The 3D Printing Company"
    className={`object-contain max-h-full max-w-full rounded ${className}`}
  />
);

// 8. Sirpavanam Logo
export const SirpavanamLogo: React.FC<{ className?: string; textColor?: string }> = ({
  className = 'h-10 w-auto',
}) => (
  <img
    src={sirpavanamImg}
    alt="Sirpavanam"
    className={`object-contain max-h-full max-w-full rounded ${className}`}
  />
);

// 9. Mathi Mobiles Logo
export const MathiMobilesLogo: React.FC<{ className?: string; textColor?: string }> = ({
  className = 'h-10 w-auto',
}) => (
  <img
    src={mathiMobilesImg}
    alt="Mathi Mobiles"
    className={`object-contain max-h-full max-w-full rounded ${className}`}
  />
);

// 9. Samsung Official Wordmark Logo
export const SamsungLogo: React.FC<{ className?: string }> = ({ className = 'h-5 w-auto' }) => (
  <svg viewBox="0 0 200 40" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <text
      x="0"
      y="30"
      fontFamily="system-ui, -apple-system, 'Space Grotesk', sans-serif"
      fontWeight="900"
      fontSize="32"
      letterSpacing="4"
    >
      SAMSUNG
    </text>
  </svg>
);

// 10. BBT (Big Boy Toyz) Logo
export const BbtLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => (
  <img
    src={bbtImg}
    alt="Big Boy Toyz"
    className={`object-contain max-h-full max-w-full ${className}`}
  />
);

// 11. Caterpillar (CAT) Logo
export const CaterpillarLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => (
  <img
    src={caterpillarImg}
    alt="Caterpillar"
    className={`object-contain max-h-full max-w-full ${className}`}
  />
);

// 12. Nola on 5th Logo
export const NolaOn5thLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => (
  <img
    src={nolaOn5thImg}
    alt="Nola on 5th"
    className={`object-contain max-h-full max-w-full ${className}`}
  />
);

