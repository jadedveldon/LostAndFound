import React from 'react';

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  tilt?: number; // e.g. -3 to 3
}

export function Polaroid({ src, alt, caption, className = '', tilt = 0 }: PolaroidProps) {
  // Use inline style for the tilt so it can be randomized or passed explicitly
  return (
    <div 
      className={`polaroid ${className}`} 
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="photo-treatment">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-auto object-cover" />
      </div>
      {caption && (
        <div className="caption">
          {caption}
        </div>
      )}
    </div>
  );
}
