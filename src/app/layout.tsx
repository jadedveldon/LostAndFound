import type { Metadata } from "next";
import { Hammersmith_One, Oranienbaum, Playfair_Display, Caveat_Brush } from "next/font/google";
import "./globals.css";

const hammersmithOne = Hammersmith_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-display",
});

const oranienbaum = Oranienbaum({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-body",
});

const caveatBrush = Caveat_Brush({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-brush",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Lost & Found — Personal Travel Curators",
  description: "Personal travel curators. Designing slow trips for people in transition.",
};

import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { MotionProvider } from "@/components/layout/MotionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hammersmithOne.variable} ${oranienbaum.variable} ${caveatBrush.variable} ${playfairDisplay.variable} antialiased`}
    >
      <head>
        {/* Oranienbaum italic — next/font/google doesn't carry this variant */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oranienbaum:ital@1&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SmoothScroll />
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
