import React from 'react';

const activeTheoryLogoImg = '/assets/active theory logo.jpeg';

interface ActiveTheoryLogoProps {
  className?: string;
  height?: number | string;
  theme?: 'dark' | 'light';
}

export const ActiveTheoryLogo: React.FC<ActiveTheoryLogoProps> = ({
  className = '',
  height = 50,
}) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`} style={{ height: height || 50 }}>
      <img
        src={activeTheoryLogoImg}
        alt="Active Theory"
        className="h-full w-auto object-contain rounded-lg filter drop-shadow-sm block"
        style={{ maxHeight: '100%' }}
      />
    </div>
  );
};

export default ActiveTheoryLogo;
