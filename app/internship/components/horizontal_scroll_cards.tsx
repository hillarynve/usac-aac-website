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
  const cards: Card[] = [
    {
      title: "Fall 2022",
      content: [
        "This quarter, we started off with over 10 interns.",
        "Our interns partook in conversations and skill-building opportunities. They began by building a fundamental knowledge about USAC, the Academic Senate, AAC and the Mother Organizations.",
        "Mixed in, interns developed their professional skills and advocacy toolkit to incite change in any environment.",
        "Upon completion, our interns this quarter have been placed in the following committees for the remainder of this term: Access & Equity, Accountability & Transparency, and Sanctuary Campus.",
      ],
      img_url: "",
    },
    {
      title: "Winter 2023",
      content: [
        "This quarter, we are entering in a never done-before collaboration with the Education Department at UCLA.",
        "For students in the major, who've completed EDUC 180 and are looking for capstone credit, you can apply to our internship and enroll in the course -- thus completing your capstone requirement, gaining internship experience, and receiving credit for the work you do within AAC this quarter.",
      ],
      img_url: "",
    },
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
