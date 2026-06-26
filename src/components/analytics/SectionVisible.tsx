'use client';

import { useEffect, useRef } from 'react';
import { track } from '@/lib/analytics';

interface Props {
  name: string;
}

export function SectionVisible({ name }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          track('section_viewed', { section_name: name, page: window.location.pathname });
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [name]);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      style={{ position: 'absolute', width: 1, height: 1, pointerEvents: 'none', top: 0, left: 0 }}
    />
  );
}
