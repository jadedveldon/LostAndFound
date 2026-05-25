import React from 'react';

export function HandArrow({ className = '' }: { className?: string }) {
  return (
    <svg 
      className={`text-[var(--clay)] ${className}`}
      width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M2 10C15 8 28 12 38 10M30 4C34 8 36 9 38 10C35 13 32 16 28 18" />
    </svg>
  );
}

export function HandUnderline({ className = '' }: { className?: string }) {
  return (
    <svg 
      className={`text-[var(--clay)] absolute -bottom-2 left-0 w-full ${className}`}
      height="12" viewBox="0 0 100 12" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    >
      <path d="M2 8C25 3 75 3 98 8" />
    </svg>
  );
}

export function HandCircle({ className = '' }: { className?: string }) {
  return (
    <svg 
      className={`text-[var(--clay)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[140%] pointer-events-none ${className}`}
      viewBox="0 0 100 50" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    >
      <path d="M50 5C80 5 95 20 95 25C95 30 80 45 50 45C20 45 5 30 5 25C5 20 20 5 50 5Z" />
    </svg>
  );
}

export function Tape({ className = '' }: { className?: string }) {
  return (
    <div 
      className={`absolute top-[-10px] left-1/2 -translate-x-1/2 w-20 h-6 bg-[var(--paper-deep)] opacity-70 rotate-[-2deg] shadow-sm z-10 ${className}`} 
    />
  );
}
