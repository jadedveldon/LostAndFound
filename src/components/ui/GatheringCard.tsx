import React from 'react';
import { Polaroid } from './Polaroid';

interface GatheringCardProps {
  title: string;
  location: string;
  dates: string;
  price: string;
  imageSrc: string;
  isSoldOut?: boolean;
}

export function GatheringCard({ title, location, dates, price, imageSrc, isSoldOut }: GatheringCardProps) {
  return (
    <div className="w-full h-full flex flex-col group cursor-pointer">
      <Polaroid 
        src={imageSrc} 
        alt={title} 
        className="w-full mb-6 group-hover:-translate-y-2 group-hover:shadow-elevated transition-all duration-medium" 
      />
      <div className="flex flex-col px-2">
        <span className="t-mono text-[10px] tracking-widest text-[var(--ink-mute)] mb-2 uppercase">{location}</span>
        <h4 className="t-h4 text-[var(--ink)] mb-2 group-hover:text-[var(--clay)] transition-colors">{title}</h4>
        <p className="t-body-sm italic text-[var(--denim)] mb-4">{dates}</p>
        <div className="flex items-center justify-between border-t border-[var(--paper-deep)] pt-4 mt-auto">
          <span className="t-mono text-xs">{price}</span>
          <span className={`t-eyebrow text-[10px] ${isSoldOut ? 'text-[var(--error)]' : 'text-[var(--moss)]'}`}>
            {isSoldOut ? 'SOLD OUT' : 'AVAILABLE'}
          </span>
        </div>
      </div>
    </div>
  );
}
