export default function HeaderBanner() {
  const dueDate = " Jan 30, 2026";
  const duration = "Winter, 10-weeks";

  return (
    <div className="w-full bg-gray-100 px-8 py-16 md:px-20 flex flex-col gap-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "" }} />

      <h1 className="text-7xl font-black text-gray-1000">
        AAC Internship
      </h1>

      <div className="flex gap-5">
          <button
            className="px-6 py-2 bg-gray-400 text-sm">
            Due {dueDate}
          </button>
          <button
            className="px-6 py-2 bg-gray-400 text-sm">
            {duration}
          </button>
          <button
            className="px-3 py-2 text-white bg-black text-xs rounded-full">
            Apply Now
          </button>
      </div>

      <p className="text-sm leading-relaxed max-w-sm tracking-wide">
        One sentence summary or mission. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}