type Card = {
  title: string;
  content: string;
  img_url: string;
};

export default function HorizontalScrollCards() {
  const cards = getCards();
  return (
    <div className="p-6">
      <h2 className="text-4xl font-medium mb-4">What We've Done</h2>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {cards.map((card, i) => (
          <CardItem key={i} card={card} />
        ))}
      </div>
    </div>
  );
}

function getCards(): Card[] {
  const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit\nsed do eiusmod tempor incididunt ut labore et dolore magna aliqua\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris\nnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"
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
    <div className="shrink-0 w-120 h-120 rounded-sm overflow-hidden flex flex-col">
      <div className="flex-[1] p-10 flex flex-col gap-2 bg-gray-200">
        <p className="font-normal text-2xl leading-snug">{card.title}</p>
        <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed">{card.content}</p>
      </div>
      <div className="flex-[1] bg-gray-300">
        {card.img_url && (
          <img src={card.img_url} alt={card.title} className="w-full h-full object-cover" />
        )}
      </div>
    </div>
  );
}