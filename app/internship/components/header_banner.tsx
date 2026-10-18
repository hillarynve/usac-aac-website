import { libreBaskerville } from "../fonts";

export default function HeaderBanner() {
  const dueDate = "Jan 30, 2026";
  const duration = "Winter, 10 weeks";
  const applyUrl = "#";

  return (
    <div className="grain internship-hero w-full overflow-hidden px-8 py-20 md:px-16 md:py-28">
      <div className="flex max-w-2xl flex-col gap-4">
        <h1 className={`${libreBaskerville.className} text-5xl text-gray-100 md:text-7xl`}>
          AAC Internship
        </h1>

        <p className="max-w-xl text-base leading-snug text-gray-100">
          The AAC Internship is an effort that was started with a single goal in mind: to cultivate a space that could lead into a sources of empowerment for future leaders that would bring us closer to Educational Justice.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <span className="bg-gray-200 px-6 py-3 text-sm text-usac-navy">
            Due {dueDate}
          </span>
          <span className="bg-gray-200 px-6 py-3 text-sm text-usac-navy">
            {duration}
          </span>
          <a
            href={applyUrl}
            className="rounded-full bg-usac-gold px-16 py-4 text-lg text-usac-navy transition hover:brightness-110">
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
}
