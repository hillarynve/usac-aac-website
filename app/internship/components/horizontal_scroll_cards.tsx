import ImageBox from "./image_box";
import { libreBaskerville } from "../fonts";

type Card = {
  title: string;
  content: string[];
  img_url: string;
};

export default function HorizontalScrollCards() {
  const cards = getCards();
  return (
    <div>
      <h2 className={`${libreBaskerville.className} mb-10 text-4xl text-gray-100 md:text-6xl`}>
        Past Cohorts
      </h2>

      {/* Bleeds off the right edge of the page */}
      <div className="hide-scrollbar -mr-8 flex gap-8 overflow-x-auto pr-8 pb-4 md:-mr-16 md:pr-16">
        {cards.map((card, i) => (
          <CardItem key={i} card={card} />
        ))}
      </div>
    </div>
  );
}

function getCards(): Card[] {
  const content = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in",
  ];
  const cards: Card[] = [
    { title: "Spring 2026", content: content, img_url: "" },
    { title: "Winter 2026", content: content, img_url: "" },
    { title: "Fall 2025", content: content, img_url: "" },
    { title: "Spring 2025", content: content, img_url: "" },
    { title: "Winter 2025", content: content, img_url: "" },
  ];

  return cards;
}

function CardItem({ card }: { card: Card }) {
  return (
    <div className="flex h-[36rem] w-[85vw] max-w-[32rem] shrink-0 flex-col overflow-hidden rounded-xl">
      <div className="flex flex-col gap-3 bg-gray-200 px-9 py-8 text-usac-navy">
        <p className="text-2xl font-bold">{card.title}</p>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-snug">
          {card.content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <ImageBox src={card.img_url} alt={`Image of ${card.title} cohort`} className="flex-1" />
    </div>
  );
}
