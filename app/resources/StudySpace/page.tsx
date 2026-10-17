"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Libre_Baskerville, Mulish } from "next/font/google";
import "./style.css";

// Image imports
import StudyHedrick from "./img/StudyHedrick.png";
import Bplate from "./img/Bplate.jpg";
import StarbucksWestwood from "./img/StarbucksWestwood.jpg";
import YRL from "./img/YRL.jpg";
import Kerckhoff from "./img/Kerckhoff.png";
import BTC from "./img/BTC.jpg";
import NorthernLights from "./img/NorthernLights.png";
import Anderson from "./img/Anderson.jpg";
import Upsidedown from "./img/upsidedown.jpg";

// =============================================================================
// TYPOGRAPHY CONFIGURATION
// Matching the Libre Baskerville (serif) & Mulish (sans-serif) fonts from Funding
// =============================================================================
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// =============================================================================
// CARD BOTTOM GRADIENT CONSTANTS (Easily tweakable)
// =============================================================================
const CARD_BOTTOM_OVERLAY = {
  // USAC Navy (#084C7F = rgb(8, 76, 127))
  colorRgb: "8, 76, 127",
  bottomOpacity: 0.85, // Changed from 1.0 (100% solid) to 0.55 (55% translucent)
  midOpacity: 0.65,    // Soft protection right behind text
  topOpacity: 0.1,     // Fully transparent fade-out
};

const CARD_BOTTOM_GRADIENT_STYLE = `linear-gradient(to top, rgba(${CARD_BOTTOM_OVERLAY.colorRgb}, ${CARD_BOTTOM_OVERLAY.bottomOpacity}) 0%, rgba(${CARD_BOTTOM_OVERLAY.colorRgb}, ${CARD_BOTTOM_OVERLAY.midOpacity}) 35%, rgba(${CARD_BOTTOM_OVERLAY.colorRgb}, ${CARD_BOTTOM_OVERLAY.topOpacity}) 95%)`;

// =============================================================================
// STUDY SPACES DATA
// Includes hoverText field for easy future updates
// =============================================================================
interface StudyCardData {
  label: string;
  src: StaticImageData;
  hoverText: string;
}

const STUDY_CARDS: StudyCardData[] = [
  {
    label: "The Study at Hedrick",
    src: StudyHedrick,
    hoverText: "The Blue Room is located @ The Study on the Hill.\nHours: 24/7",
  },
  {
    label: "Bruin Plate",
    src: Bplate,
    hoverText: "B-Plate Sunday-Thursday from 10PM - 2AM\n(B-Plate transforms into a late night study spot!)",
  },
  {
    label: "Starbucks Westwood",
    src: StarbucksWestwood,
    hoverText: "10955 Weyburn Ave, Los Angeles, CA 90024\nHours: 4:30AM–10:30PM",
  },
  {
    label: "Research Library",
    src: YRL,
    hoverText: "Mon-Thurs 7:30AM-11PM, Fri 7:30-6PM, Sat 9AM - 5PM,\nSun: 1PM - 10PM",
  },
  {
    label: "Kerckhoff Hall",
    src: Kerckhoff,
    hoverText: "Kerckhoff Hall, 2nd Floor, Hours 8AM – 11PM\n(Kerckhoff also has multiple study spaces :)",
  },
  {
    label: "Bruin Transfer Center",
    src: BTC,
    hoverText: "Kerckhoff Hall Room 128, Monday – Thursday 9AM – 5PM\n/ Friday 9AM – 2PM",
  },
  {
    label: "Northern Lights Cafe",
    src: NorthernLights,
    hoverText: "Hours: Mon-Fri 7:00 AM - 5:00 PM\nStay warm by the fire at Northern Lights!",
  },
  {
    label: "Anderson School of Management",
    src: Anderson,
    hoverText: "The Rosenburg Library is open from 9AM-11PM Mon-Fri.\nThere are additional study spaces located in Anderson!",
  },
  {
    label: "Upside Down Cafe",
    src: Upsidedown,
    hoverText: "10962 Le Conte Ave, Los Angeles, CA 90064\n9AM–4PM",
  },
];

export default function StudySpace() {
  // Tracks which card is currently opened via tap or keyboard (null if all are closed)
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const toggleCard = (label: string) => {
    setActiveCard((prev) => (prev === label ? null : label));
  };

  // Close the open card when tapping/clicking anywhere outside or pressing Escape
  useEffect(() => {
    if (!activeCard) return;

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      // If the tap occurred outside any study card, close the open card
      if (!target?.closest("[data-study-card]")) {
        setActiveCard(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCard(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCard]);

  return (
    <section>
      <div>
        {/* Page Title: Serif Libre Baskerville font in USAC navy */}
        <h1 className={`study-header ${libreBaskerville.className}`}>
          Where Can I Study?
        </h1>

        {/* Study Cards Grid: Preserves existing grid layout and spacing */}
        <div className="study-grid">
          {STUDY_CARDS.map((card) => {
            const isOpen = activeCard === card.label;

            return (
              <div
                key={card.label}
                data-study-card="true"
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggleCard(card.label)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCard(card.label);
                  } else if (e.key === "Escape") {
                    setActiveCard(null);
                  }
                }}
                className="group relative rounded-[10px] overflow-hidden aspect-square bg-[#B3B3B3] cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#084C7F]/50"
              >
                {/* Card Photo */}
                <Image
                  src={card.src}
                  alt={card.label}
                  className="w-full h-full object-cover"
                />

                {/* Default State: Lower-opacity bottom gradient & Title Label */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-6 min-h-[35%] flex items-end justify-center transition-opacity duration-300 ease-in-out pointer-events-none ${
                    isOpen
                      ? "opacity-0"
                      : "opacity-100 [@media(hover:hover)]:group-hover:opacity-0"
                  }`}
                  style={{ background: CARD_BOTTOM_GRADIENT_STYLE }}
                >
                  <p className="text-[#F0F0F0] text-2xl text-center font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                    {card.label}
                  </p>
                </div>

                {/* Hover / Keyboard Focus / Tap State: Dark navy overlay with photo faintly visible + centered white sans-serif text */}
                <div
                  className={`absolute inset-0 bg-[#084C7F]/80 flex items-center justify-center p-4 sm:p-6 text-center transition-opacity duration-300 ease-in-out ${
                    isOpen
                      ? "opacity-100"
                      : "opacity-0 [@media(hover:hover)]:group-hover:opacity-100 pointer-events-none"
                  }`}
                >
                  <p
                    className={`text-white text-sm sm:text-base md:text-xl font-medium leading-snug whitespace-pre-line max-w-[260px] ${mulish.className}`}
                  >
                    {card.hoverText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href="/"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

