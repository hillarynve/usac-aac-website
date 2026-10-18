
"use client";

import { Mulish, Libre_Baskerville } from "next/font/google";
import { useEffect, useState } from "react";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

type NewsletterRow = {
  rowIndex: number;
  Title: string;
  Link: string;
  Description: string;
  Img: string;
  Pages: string;
};

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "w-4 h-4 flex-shrink-0"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}
function getDriveImageUrl(url: string) {
  const match = url.match(/\/file\/d\/([^/]+)/);
  const fileId = match?.[1];

  if (!fileId) return url;

  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`;
}
function NewsletterViewer({
  title,
  pages,
  onClose,
}: {
  title: string;
  pages: string[];
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-7xl flex-col overflow-hidden rounded-xl bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b px-5 py-4">
          <h2 className="text-lg font-bold text-[#084C7F]">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close newsletter"
            className="rounded-lg px-3 py-2 text-2xl text-[#084C7F] hover:bg-gray-100"
          >
            &times;
          </button>
        </div>

        <div className="overflow-y-auto bg-gray-100 p-3 md:p-6">
          <div className="mx-auto flex w-full max-w-10xl flex-col gap-4">
            {pages.map((page, index) => (
              <img
                key={`${page}-${index}`}
                src={getDriveImageUrl(page)}
                alt={`${title}, page ${index + 1}`}
                className="block h-auto w-full bg-white shadow-sm"
                loading={index === 0 ? "eager" : "lazy"}
                onError={(event) => {
                  console.error("Failed to load newsletter page:", page);
                  event.currentTarget.alt =
                    `Unable to load page ${index + 1}. Check the Drive sharing settings.`;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NewsletterClient({
  newsletters,
}: {
  newsletters: NewsletterRow[];
}) {
  const [search, setSearch] = useState("");
  const [selectedNewsletter, setSelectedNewsletter] =
  useState<NewsletterRow | null>(null);

  const filtered = newsletters.filter((newsletter) => {
    const query = search.toLowerCase().trim();

    return (
      query === "" ||
      newsletter.Title.toLowerCase().includes(query) ||
      newsletter.Description.toLowerCase().includes(query)
    );
  });

  return (
    <main
      className={`min-h-screen pb-20 ${mulish.className}`}
      style={{
        background: "linear-gradient(to bottom, #FFFFFF 0%, #084C7F 100%)",
      }}
    >
      {/* Hero heading */}
      <section className="pl-8 pr-8 pt-10 pb-22 md:pl-24">
        <h1
          className={`mb-1 ${libreBaskerville.className}`}
          style={{ color: "#084C7F", fontSize: "90px", fontWeight: 400 }}
        >
          Newsletter
        </h1>
        <p
          className="font-medium"
          style={{
            color: "#084C7F",
            fontSize: "30px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Stay updated with academic resources, events, and important announcements
        </p>
      </section>

      {/* Search bar */}
      <section className="px-8 md:px-16 mb-14 flex items-center justify-end gap-3">
        <div
          className="flex items-center gap-2 rounded-lg px-4 py-2 w-full md:w-3/7"
          style={{
            background: "#fff",
            boxShadow: "0 2px 8px rgba(8,76,127,0.08)",
          }}
        >
          <span style={{ color: "#000" }}>
            <SearchIcon className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search newsletters..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none placeholder:italic placeholder:[color:#535353]"
            style={{
              color: "#084C7F",
              fontFamily: "Inter, sans-serif",
              fontSize: "25px",
              fontStyle: "italic",
            }}
          />
        </div>
      </section>

      {/* Newsletter cards */}
      <section className="px-8 md:px-24">
        {filtered.length === 0 ? (
          <p className="text-center py-20 text-gray-500 font-semibold">
            No newsletters match your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
            {filtered.map((newsletter) => (
  <NewsletterCard
    key={newsletter.rowIndex}
    newsletter={newsletter}
    onClick={() => setSelectedNewsletter(newsletter)}
  />
))}
          </div>
        )}
      </section>
      {selectedNewsletter && (
  <NewsletterViewer
    title={selectedNewsletter.Title}
    pages={(selectedNewsletter.Pages ?? "")
  .split(/\r?\n/)
  .map((page) => page.trim())
  .filter(Boolean)}
    onClose={() => setSelectedNewsletter(null)}
  />
)}
    </main>
  );
}

function NewsletterCard({
  newsletter,
  onClick,
}: {
  newsletter: NewsletterRow;
  onClick: () => void;
}) {
  const hasImage =
    newsletter.Img.trim() !== "" &&
    !newsletter.Img.toLowerCase().includes("insert img");

  const hasLink =
    newsletter.Link.trim() !== "" &&
    !newsletter.Link.toLowerCase().includes("insert link");

  const cardContent = (
    <>
      {/* Image area */}
      <div
        className="relative w-full aspect-[1.5/1] shrink-0"
        style={{
          background:
            "linear-gradient(135deg, #0a3d62 0%, #1a6fa8 60%, #2e86c1 100%)",
        }}
      >
        {hasImage && (
          <img
            src={getDriveImageUrl(newsletter.Img)}
            alt={newsletter.Title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* Text footer */}
      <div
        className="px-5 py-5 flex flex-col gap-3 flex-1"
        style={{ background: "#fff" }}
      >
        <div className="flex items-start justify-between gap-3">
          <h2
            className="uppercase tracking-wider leading-snug"
            style={{
              color: "#084C7F",
              fontFamily: "Mulish, sans-serif",
              fontSize: "55px",
              fontWeight: 700,
            }}
          >
            {newsletter.Title}
          </h2>

          {hasLink && (
            <span
              className="flex-shrink-0 p-1.5"
              style={{ color: "#084C7F" }}
              title="Open newsletter"
            >
              <ShareIcon />
            </span>
          )}
        </div>

        <p
          className="leading-snug line-clamp-3"
          style={{
            fontFamily: "Mulish, sans-serif",
            fontSize: "30px",
            fontWeight: 400,
            color: '#111'
          }}
        >
          {newsletter.Description}
        </p>
      </div>
    </>
  );

  const cardClass =
    "relative rounded-[.75rem] overflow-hidden flex flex-col aspect-square";

  const cardStyle = {
    boxShadow: "0 4px 24px rgba(8,76,127,0.13)",
    transition: "transform 0.22s ease, box-shadow 0.22s ease",
  };

  if (hasLink) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${cardClass} group w-full cursor-pointer text-left`}
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 12px 36px rgba(8,76,127,0.22)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 4px 24px rgba(8,76,127,0.13)";
      }}
    >
      {cardContent}
    </button>
  );
}

  return (
  <button
    type="button"
    onClick={onClick}
    className={`${cardClass} w-full cursor-pointer text-left`}
    style={cardStyle}
  >
    {cardContent}
  </button>
);
}