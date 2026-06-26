'use client';

import { useEffect, useRef } from 'react';
import { track } from '@/lib/analytics';

const MILESTONES = [25, 50, 75, 90];

export function ScrollDepthTracker() {
  const reached = useRef(new Set<number>());

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = Math.round((scrolled / total) * 100);
      for (const milestone of MILESTONES) {
        if (pct >= milestone && !reached.current.has(milestone)) {
          reached.current.add(milestone);
          track('scroll_depth', { percent: milestone, page: window.location.pathname });
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
