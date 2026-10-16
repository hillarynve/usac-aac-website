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
    hoverText: "Example text",
  },
  {
    label: "Bruin Plate",
    src: Bplate,
    hoverText: "Example text",
  },
  {
    label: "Starbucks Westwood",
    src: StarbucksWestwood,
    hoverText: "Example text",
  },
  {
    label: "Research Library",
    src: YRL,
    hoverText: "Example text",
  },
  {
    label: "Kerckhoff Hall",
    src: Kerckhoff,
    hoverText: "Example text",
  },
  {
    label: "Bruin Transfer Center",
    src: BTC,
    hoverText: "Example text",
  },
  {
    label: "Northern Lights Cafe",
    src: NorthernLights,
    hoverText: "Example text",
  },
  {
    label: "Anderson School of Management",
    src: Anderson,
    hoverText: "Example text",
  },
  {
    label: "Upside Down Cafe",
    src: Upsidedown,
    hoverText: "Example text",
  },
];

export default function StudySpace() {
  return (
    <section>
      <div>
        {/* Page Title: Serif Libre Baskerville font in USAC navy */}
        <h1 className={`study-header ${libreBaskerville.className}`}>
          Where Can I Study?
        </h1>

        {/* Study Cards Grid: Preserves existing grid layout and spacing */}
        <div className="study-grid">
          {STUDY_CARDS.map((card) => (
            <div
              key={card.label}
              tabIndex={0}
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
                className="absolute bottom-0 left-0 right-0 p-6 min-h-[35%] flex items-end justify-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 group-focus-within:opacity-0 pointer-events-none"
                style={{ background: CARD_BOTTOM_GRADIENT_STYLE }}
              >
                <p className="text-[#F0F0F0] text-2xl text-center font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  {card.label}
                </p>
              </div>

              {/* Hover / Keyboard Focus State: Dark navy overlay with photo faintly visible + centered white sans-serif text */}
              <div className="absolute inset-0 bg-[#084C7F]/80 flex items-center justify-center p-6 text-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
                <p
                  className={`text-white text-xl font-medium leading-snug whitespace-pre-line max-w-[240px] ${mulish.className}`}
                >
                  {card.hoverText}
                </p>
              </div>
            </div>
          ))}
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
