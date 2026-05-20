import React from 'react';
import { TreatedImage } from './TreatedImage';

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  tilt?: number | string; // e.g. -3 or '2deg'
  style?: React.CSSProperties;
  showTape?: boolean;
  tapeRotate?: string;
}

export function Polaroid({ src, alt, caption, className = '', tilt = 0, style = {}, showTape = false, tapeRotate = '-4deg' }: PolaroidProps) {
  const tiltVal = typeof tilt === 'number' ? `${tilt}deg` : tilt;
  
  return (
    <figure 
      className={`polaroid ${className}`} 
      style={{ 
        '--tilt': tiltVal,
        transform: `rotate(var(--tilt))`,
        ...style 
      } as React.CSSProperties}
    >
      {showTape && (
        <span 
          className="tape" 
          style={{ 
            transform: `rotate(${tapeRotate})`, 
            top: -14, 
            left: '38%',
            position: 'absolute'
          }} 
        />
      )}
      <TreatedImage src={src} alt={alt} className="w-full aspect-[4/5] object-cover" />
      {caption && (
        <figcaption className="caption">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
