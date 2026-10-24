import React from "react";
import Link from "next/link";
import { Libre_Baskerville, Mulish } from "next/font/google";

// =============================================================================
// TYPOGRAPHY CONFIGURATION
// Next.js automatically optimizes and loads these Google Fonts
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
// STYLE CONSTANTS (Easily editable to match Figma Dev Mode values)
// =============================================================================
// Individual gradient color stops (easy to adjust directly from Figma)
const GRADIENT_COLORS = {
  // Hero section (diagonal from left to right)
  heroStart: "#1E4E7A", // Lightened from #122B43
  heroMid1: "#2D6898",  // Lightened from #1F4E79
  heroMid2: "#8FAEC7",  // Soft sky-blue transition
  heroEnd: "#D5DFE8",   // Light grey

  // Cards section (vertical from top to bottom)
  cardsTop: "#E6EEF5",    // Light blue-grey
  cardsMid1: "#B8CFE3",   // Soft blue
  cardsMid2: "#628EAE",   // Lightened transition blue
  cardsBottom: "#2D6898", // Lightened from #1F4E79
};

const STYLES = {
  // Brand colors
  navy: "#1F4E79",
  gold: "#E3AE3C",
  cardBg: "#F4F6F8",
  textDark: "#1F2937",
  textMuted: "#4B5563",
  labelGrey: "#6B7280",
  divider: "#E5E7EB",

  // Section backgrounds
  // Diagonal gradient: dark navy blue on the left fading to light grey on the right
  heroGradient: `linear-gradient(135deg, ${GRADIENT_COLORS.heroStart} 0%, ${GRADIENT_COLORS.heroMid1} 40%, ${GRADIENT_COLORS.heroMid2} 75%, ${GRADIENT_COLORS.heroEnd} 100%)`,
  // Vertical gradient: light blue-grey at top to deeper navy toward bottom
  cardsGradient: `linear-gradient(180deg, ${GRADIENT_COLORS.cardsTop} 0%, ${GRADIENT_COLORS.cardsMid1} 35%, ${GRADIENT_COLORS.cardsMid2} 75%, ${GRADIENT_COLORS.cardsBottom} 100%)`,
};

// =============================================================================
// DATA: FUNDING OPPORTUNITIES
// Keeps page content organized, cleanly separated, and easy to maintain
// =============================================================================
interface FundingCardData {
  id: string;
  title: React.ReactNode;
  description: string;
  director: string;
  email: string;
  guidelinesUrl: string;
  applyUrl: string;
}

const FUNDING_CARDS: FundingCardData[] = [
  {
    id: "asrf",
    title: (
      <>
        Academic Success
        <br />
        Referendum
      </>
    ),
    description:
      "This fund continues to fund and strengthen efforts promoting academic advocacy and educational programming for issues such as curriculum reform, student-initiated courses, and improving undergraduate education quality. It supports academic support resources and student movements for academic reform.",
    director: "Lelia Kennedy",
    email: "usacasrf@gmail.com",
    guidelinesUrl: "#", // Replace with real link when available
    applyUrl: "#", // Replace with real link when available
  },
  {
    id: "tgmf",
    title: (
      <>
        Travel Grant
        <br />
        Mini Fund
      </>
    ),
    description:
      "The AAC Travel Grant Mini Fund supports UCLA undergraduate students and student groups with their academic endeavors by providing grants for travel and accommodation expenses during academic events. By mitigating financial constraints, this fund provides equal opportunities to students.",
    director: "Tina Yee",
    email: "usactgmf@gmail.com",
    guidelinesUrl: "#", // Replace with real link when available
    applyUrl: "#", // Replace with real link when available
  },
];

const BEFORE_APPLYING_TEXT =
  "Please read the funding guidelines carefully to ensure your organization and proposed program meet all requirements.";

// =============================================================================
// MAIN COMPONENT
// =============================================================================
export default function FundingPage() {
  return (
    <div className={`flex flex-col min-h-screen ${mulish.className}`}>
      
      {/* -------------------------------------------------------------------- */}
      {/* 1. HERO SECTION                                                      */}
      {/* -------------------------------------------------------------------- */}
      <section
        className="w-full min-h-[330px] flex items-center px-8 sm:px-14 md:px-20 lg:px-28 py-12"
        style={{ background: STYLES.heroGradient }}
      >
        <div className="max-w-4xl">
          {/* Serif title: wraps onto two lines: "Funding" / "Opportunities" */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] text-[#F8FAFC] tracking-tight ${libreBaskerville.className}`}
          >
            Funding
            <br />
            Opportunities
          </h1>

          {/* Subtitle in small sans-serif off-white text */}
          <p className="mt-4 text-sm sm:text-base text-white/90 max-w-xl font-light leading-relaxed">
            Supporting UCLA students in their academic endeavors through
            dedicated funding programs
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 2. CARDS SECTION                                                     */}
      {/* -------------------------------------------------------------------- */}
      <section
        className="w-full flex-1 py-16 px-6 sm:px-10 flex justify-center items-center"
        style={{ background: STYLES.cardsGradient }}
      >
        {/* Responsive container: 2 columns on desktop with ~35px gap, stacked on mobile */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-stretch justify-center gap-[35px]">
          {FUNDING_CARDS.map((card) => (
            <article
              key={card.id}
              className="w-full max-w-[390px] mx-auto md:mx-0 rounded-[12px] shadow-md p-8 flex flex-col"
              style={{ backgroundColor: STYLES.cardBg }}
            >
              {/* 
                (a) Card Title 
                min-h-[4.25rem] reserves exactly 2 lines of vertical space
                so descriptions and dividers align at the same vertical position
              */}
              <h2
                className="text-2xl font-bold leading-snug mb-4 min-h-[4.25rem]"
                style={{ color: STYLES.navy }}
              >
                {card.title}
              </h2>

              {/* (b) Description */}
              <p
                className="text-sm leading-relaxed mb-6 font-normal"
                style={{ color: STYLES.textMuted }}
              >
                {card.description}
              </p>

              {/* (c) Thin divider line */}
              <hr
                className="w-full my-4 border-t"
                style={{ borderColor: STYLES.divider }}
              />

              {/* (d) Director Information */}
              <p
                className="text-xs font-semibold"
                style={{ color: STYLES.navy }}
              >
                Funding Director: {card.director}
              </p>

              {/* (e) Email with small envelope icon */}
              <div className="mt-2 flex items-center gap-2">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  style={{ color: STYLES.navy }}
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href={`mailto:${card.email}`}
                  className="text-xs font-medium hover:underline"
                  style={{ color: STYLES.navy }}
                >
                  {card.email}
                </a>
              </div>

              {/* (f) Thin divider line */}
              <hr
                className="w-full my-4 border-t"
                style={{ borderColor: STYLES.divider }}
              />

              {/* (g) BEFORE APPLYING guidance */}
              <div className="mb-6">
                <span
                  className="block text-[11px] font-bold tracking-wider uppercase mb-1.5"
                  style={{ color: STYLES.labelGrey }}
                >
                  BEFORE APPLYING
                </span>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: STYLES.textMuted }}
                >
                  {BEFORE_APPLYING_TEXT}
                </p>
              </div>

              {/* 
                (h & i) Bottom action buttons
                mt-auto pushes this container to the very bottom of the card,
                ensuring both cards' buttons align horizontally across columns.
              */}
              <div className="mt-auto pt-2 flex flex-col gap-3">
                {/* TODO: add link */}
                <Link
                  href={card.guidelinesUrl}
                  className="w-full py-2.5 px-4 rounded-full border-2 text-center text-sm font-semibold transition-colors duration-150 hover:bg-[#1F4E79]/5 active:scale-[0.99]"
                  style={{
                    borderColor: STYLES.navy,
                    color: STYLES.navy,
                    backgroundColor: "transparent",
                  }}
                >
                  View Funding Guidelines
                </Link>

                {/* TODO: add link */}
                <Link
                  href={card.applyUrl}
                  className="w-full py-2.5 px-4 rounded-full text-center text-sm font-semibold shadow-sm transition-all duration-150 hover:brightness-105 active:scale-[0.99]"
                  style={{
                    backgroundColor: STYLES.gold,
                    color: STYLES.textDark,
                  }}
                >
                  Apply Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}