"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function MagneticButton({ children, className = "", ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  
  function onMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    if (Math.hypot(dx, dy) < 80) { 
      x.set(dx * 0.18); 
      y.set(dy * 0.18); 
    }
  }
  
  return (
    <motion.button
      ref={ref} 
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x, y }} 
      className={`btn btn-primary cursor-pointer ${className}`} 
      {...props}
    >
      {children}
    </motion.button>
  );
}
