'use client';

import React from 'react';
import { track } from '@/lib/analytics';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  eventParams?: Record<string, unknown>;
  children: React.ReactNode;
}

export function TrackableLink({ eventName, eventParams, onClick, children, ...props }: Props) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    track(eventName, eventParams);
    onClick?.(e);
  }
  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
