"use client";
import Link from "next/link";
import { Mulish, Libre_Baskerville } from "next/font/google";
const libreBaskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400"] });
import { useState } from "react";
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "w-4 h-4 flex-shrink-0"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

const mulish = Mulish({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] });

/* ─── placeholder image gradients (swap src="" with real URLs) ─── */
const CARDS = [
  {
    id: 1,
    year: "25 - 26",
    month: "February",
    title: "February Newsletter",
    excerpt:
      "As we enter the new year, we are excited to announce the projects that confirm that our organization's commitment to tackling the problems UCLA students...",
    imgUrl: "/royce.jpg",
    gradient: "linear-gradient(135deg, #0a3d62 0%, #1a6fa8 60%, #2e86c1 100%)",
  },
  {
    id: 2,
    year: "25 - 26",
    month: "February",
    title: "February Newsletter",
    excerpt:
      "As we enter the new year, we are excited to announce the projects that confirm that our organization's commitment to tackling the problems UCLA students...",
    imgUrl: "/royce.jpg",
    gradient: "linear-gradient(135deg, #0a3d62 0%, #1a6fa8 60%, #2e86c1 100%)",
  },
  {
    id: 3,
    year: "25 - 26",
    month: "February",
    title: "February Newsletter",
    excerpt:
      "As we enter the new year, we are excited to announce the projects that confirm that our organization's commitment to tackling the problems UCLA students...",
    imgUrl: "/royce.jpg",
    gradient: "linear-gradient(135deg, #0a3d62 0%, #1a6fa8 60%, #2e86c1 100%)",
  },
  {
    id: 4,
    year: "25 - 26",
    month: "February",
    title: "February Newsletter",
    excerpt:
      "As we enter the new year, we are excited to announce the projects that confirm that our organization's commitment to tackling the problems UCLA students...",
    imgUrl: "/royce.jpg",
    gradient: "linear-gradient(135deg, #0a3d62 0%, #1a6fa8 60%, #2e86c1 100%)",
  },
];

export default function Newsletter() {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  const filtered = CARDS.filter((c) => {
    const matchesSearch =
      search === "" ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.month.toLowerCase().includes(search.toLowerCase());
    const matchesYear = yearFilter === "" || c.year === yearFilter;
    return matchesSearch && matchesYear;
  });

  return (
    <main
      className={`min-h-screen pb-20 ${mulish.className}`}
      style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, #084C7F 100%)" }}
    >
      {/* ── Hero heading ── */}
      <section className="pl-16 pr-8 pt-10 pb-22 md:pl-24">
        <h1
          className={`mb-1 ${libreBaskerville.className}`}
          style={{ color: "#084C7F", fontSize: "64px", fontWeight: 400 }}
        >
          Newsletter
        </h1>
        <p
          className="font-medium"
          style={{ color: "#084C7F", fontSize: "24px", fontFamily: "Inter, sans-serif" }}
        >
          Stay updated with academic resources, events, and important announcements
        </p>
      </section>

      {/* ── Search + Filter bar ── */}
      <section className="px-8 md:px-16 mb-14 flex items-center justify-end gap-3">
        {/* Search */}
        <div className="flex items-center gap-2 rounded-lg px-4 py-2 w-3/7" style={{ background: "#fff", boxShadow: "0 2px 8px rgba(8,76,127,0.08)" }}>
          <span style={{ color: "#000" }}><SearchIcon className="w-5 h-5" /></span>
          <input
            type="text"
            placeholder="February 2025"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none placeholder:italic placeholder:[color:#535353]"
            style={{ color: "#084C7F", fontFamily: "Inter, sans-serif", fontSize: "15px", fontStyle: "italic" }}
          />
        </div>

      </section>

      {/* ── Cards grid ── */}
      <section className="px-16 md:px-24">
        {filtered.length === 0 ? (
          <p className="text-center py-20 text-gray-400 font-semibold">
            No newsletters match your search.
          </p>
        ) : (
          <div className="grid gap-x-14 gap-y-18" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))" }}>
            {filtered.map((card) => (
              <NewsletterCard key={card.id} {...card} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

/* ─── Card component ─── */
interface CardProps {
  year: string;
  title: string;
  excerpt: string;
  imgUrl: string;
  gradient: string;
}

function NewsletterCard({ year, title, excerpt, imgUrl, gradient }: CardProps) {
  return (
    <div
      className="relative rounded-[.75rem] overflow-hidden flex flex-col group cursor-pointer aspect-square"
      style={{
        boxShadow: "0 4px 24px rgba(8,76,127,0.13)",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 36px rgba(8,76,127,0.22)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(8,76,127,0.13)";
      }}
    >
      {/* Image area */}
      <div
        className="relative w-full flex-[7]"
        style={{ background: gradient }}
      >
        {imgUrl && (
          <img
            src={imgUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* Text footer */}
      <div
        className="flex-[2.4] px-7 pt-7 pb-4 flex flex-col gap-4"
        style={{ background: "#fff" }}
      >
        <div className="flex items-start justify-between gap-3">
          <h4
            className="uppercase tracking-wider leading-snug"
            style={{ color: "#084C7F", fontFamily: "Mulish, sans-serif", fontSize: "28px", fontWeight: 700 }}
          >
            {year} {title}
          </h4>
          <button
            className="flex-shrink-0 p-1.5 rounded-full transition-colors"
            style={{ color: "#084C7F" }}
            title="Share"
          >
            <ShareIcon />
          </button>
        </div>
        <p
          className="leading-snug line-clamp-3"
          style={{fontFamily: "Mulish, sans-serif", fontSize: "18px", fontWeight: 600 }}
        >
          {excerpt}
        </p>
      </div>
    </div>
  );
}