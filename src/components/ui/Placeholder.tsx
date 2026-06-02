"use client";

import React, { useEffect, useRef, useState } from "react";

interface PlaceholderProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Placeholder({ className = "", style }: PlaceholderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setSize({ w: Math.round(r.width), h: Math.round(r.height) });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center ${className}`}
      style={{
        background: "var(--paper-deep)",
        border: "1.5px dashed rgba(151,137,110,0.35)",
        ...style,
      }}
    >
      <span className="t-mono text-[var(--ink-mute)] text-xs select-none">
        {size ? `${size.w} × ${size.h}px` : ""}
      </span>
    </div>
  );
}
