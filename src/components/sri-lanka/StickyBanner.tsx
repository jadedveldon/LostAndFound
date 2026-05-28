"use client";

import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

const SESSION_KEY = "sl_banner_dismissed";

function smoothScrollTo(id: string, reducedMotion: boolean) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
}

export function StickyBanner() {
  const [dismissed, setDismissed] = useState(true); // hidden until hydrated
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setDismissed(sessionStorage.getItem(SESSION_KEY) === "1");
  }, []);

  function dismiss(e: React.MouseEvent) {
    e.stopPropagation();
    sessionStorage.setItem(SESSION_KEY, "1");
    setDismissed(true);
  }

  if (dismissed) return null;

  return (
    <div
      role="banner"
      className="sticky-banner"
      onClick={() => smoothScrollTo("request-invite", !!shouldReduceMotion)}
      style={{
        position: "sticky",
        top: "var(--header-h, 80px)",
        zIndex: 30,
        backgroundColor: "var(--clay)",
        color: "var(--paper)",
        textAlign: "center",
        padding: "10px 48px",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--type-mono-sm)",
        letterSpacing: "0.08em",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      ✦&nbsp;&nbsp;EARLY BIRD APPLICATIONS CLOSE AUG 1ST &nbsp;·&nbsp; REQUEST YOUR INVITE&nbsp;&nbsp;✦
      <button
        aria-label="Dismiss banner"
        onClick={dismiss}
        style={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: 0,
          color: "var(--paper)",
          opacity: 0.7,
          cursor: "pointer",
          fontSize: 18,
          lineHeight: 1,
          padding: "0 4px",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.7")}
      >
        ×
      </button>
    </div>
  );
}
