
import React from 'react';

interface FenjesLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export const FenjesLogo: React.FC<FenjesLogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-14 h-14'
  };
  
  const textClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <div className={`fenjes-logo flex items-center gap-2 justify-center`}>
      <div className="logo-icon relative">
        {/* Pessoa em posição de yoga na cadeira */}
        <svg viewBox="0 0 60 60" className={sizeClasses[size]} xmlns="http://www.w3.org/2000/svg">
          {/* Cadeira */}
          <rect x="15" y="35" width="30" height="20" rx="3" fill="#E5D3FF" />
          <rect x="17" y="37" width="26" height="3" rx="1" fill="#D4A574" />
          
          {/* Pessoa */}
          <circle cx="30" cy="20" r="6" fill="#F4D1C3" />
          <path d="M30 26 L30 40 M24 32 L36 32 M30 32 L20 28 M30 32 L40 38" 
                stroke="#7432B4" strokeWidth="3" strokeLinecap="round" />
          
          {/* Aura de bem-estar */}
          <circle cx="30" cy="30" r="25" fill="none" stroke="#9747FF" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
        </svg>
      </div>
      
      <div className={`logo-text font-quicksand font-bold ${textClasses[size]}`}>
        <span className="text-fenjes-purple-dark">Fen</span>
        <span className="text-fenjes-purple">jes</span>
      </div>
    </div>
  );
};
