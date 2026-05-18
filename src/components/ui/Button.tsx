"use client";

import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link-italic';
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClass = `btn btn-${variant} ${className}`;
  
  if (variant === 'link-italic') {
    return (
      <button className={baseClass} {...props}>
        {children}
        <ArrowRight className="arrow transition-transform duration-fast inline-block ml-1" size={16} />
      </button>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
