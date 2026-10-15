import { Libre_Baskerville, Mulish } from "next/font/google";

// Fonts: my best match from the Figma screenshot. Confirm in Dev Mode.
const headingFont = Libre_Baskerville({ subsets: ["latin"], weight: "400" });
const bodyFont = Mulish({ subsets: ["latin"] });

// Card labels. To add or reorder a card, edit this list.
const labels = [
  "Hotlines",
  "UCLA Wellness Guide",
  "UCLA Survival Guide",
  "Student Resource Database",
  "Disabled Student Guide",
  "UCLA Faculty Survey Report",
  "Winter Internship",
  "Coming Soon",
];

export default function Resources() {
  return (
    <section
      className={`${bodyFont.className} min-h-screen bg-[linear-gradient(to_bottom,#EDEDED_0%,#EDEDED_45%,#3A6290_100%)] px-6 pb-48 pt-28`}
    >
      <h1
        className={`${headingFont.className} mb-16 text-center text-4xl text-[#1F4A7F] md:text-6xl`}
      >
        Resources &amp; Guides
      </h1>

      {/* 1 column on phones, 2 on tablets, 4 on desktop (matches Figma) */}
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-x-[22px] gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {labels.map((label) => (
          <div
            key={label}
            className="flex flex-col rounded-[20px] bg-[#EBEBEB] shadow-[0_6px_14px_rgba(0,0,0,0.18)]"
          >
            {/* Blank grey rectangle where the image will go */}
            <div className="aspect-[288/262] shrink-0 rounded-t-[20px] bg-[#9B9B9B]" />

            {/* Label panel: flex-1 fills the leftover height of the card */}
            <div className="flex flex-1 items-center rounded-b-[20px] px-8 py-6 text-xl font-medium text-[#1F4A7F]">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
