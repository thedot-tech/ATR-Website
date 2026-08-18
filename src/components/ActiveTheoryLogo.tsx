import React from 'react';

const activeTheoryLogoImg = '/assets/active theory logo.png';

interface ActiveTheoryLogoProps {
  className?: string;
  height?: number | string;
  theme?: 'dark' | 'light';
}

export const ActiveTheoryLogo: React.FC<ActiveTheoryLogoProps> = ({
  className = '',
  height = 50,
  theme = 'dark',
}) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`} style={{ height: height || 50 }}>
      <img
        src={activeTheoryLogoImg}
        alt="Active Theory"
        className="h-full w-auto object-contain block"
        style={{
          maxHeight: '100%',
          filter: theme === 'light' ? 'invert(1) brightness(1.2)' : 'none',
          mixBlendMode: theme === 'dark' ? 'multiply' : 'normal',
        }}
      />
    </div>
  );
};

export default ActiveTheoryLogo;
