import Image from "next/image";
import { fetchSheet } from "@/lib/sheets";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });

interface ExecMember {
  name: string;
  role: string;
  pronouns?: string;
  year?: string;
  majors?: string;
  minors?: string;
  email?: string;
  first_term?: string;
  second_term?: string;
  linkedin?: string;
  img?: string;
}

interface DirectorMember {
  name: string;
  role: string;
  pronouns?: string;
  year?: string;
  majors?: string;
  minors?: string;
  email?: string;
  first_term?: string;
  second_term?: string;
  linkedin?: string;
  tasks?: string | string[];
  img?: string;
}

const DEFAULT_TASKS = [
  "Enforce policies and frameworks that strengthen internal accountability and ensure compliance with ethical, USAC-wide, and AAC standards.",
  "Prepare quarterly reports and weekly newsletters detailing the Commission's progress to the UCLA student body.",
  "Facilitate transparent decision-making between USAC and the student body.",
  "Oversee internal reviews related to potential misconduct, inefficiencies, or policy violations to ensure initiatives are brought to fruition.",
];

function parseTasks(tasks: string | string[] | undefined): string[] {
  if (!tasks) return DEFAULT_TASKS;
  if (Array.isArray(tasks)) return tasks.length > 0 ? tasks : DEFAULT_TASKS;

  try {
    const parsed = JSON.parse(tasks);
    if (Array.isArray(parsed) && parsed.length > 0 && parsed[0] !== "tasks") {
      return parsed;
    }
  } catch {
    // If not valid JSON, return default
  }

  return DEFAULT_TASKS;
}

export default async function LeadershipPage() {
  // Fetch mock data
  let execMembers: ExecMember[] = [];
  let directors: DirectorMember[] = [];

  try {
    execMembers = await fetchSheet("leadership_exec_20252026");
  } catch (error) {
    console.error("Failed to load exec mock data:", error);
  }

  try {
    directors = await fetchSheet("leadership_directors_20252026");
  } catch (error) {
    console.error("Failed to load directors mock data:", error);
  }

  // Fallback data if arrays are empty
  if (!execMembers || execMembers.length === 0) {
    execMembers = [
      { name: "Antonia Torres-Tinoco", role: "Secretary to the Commissioner" },
      { name: "Antonia Torres-Tinoco", role: "Secretary to the Commissioner" },
      { name: "Antonia Torres-Tinoco", role: "Secretary to the Commissioner" },
      { name: "Antonia Torres-Tinoco", role: "Secretary to the Commissioner" },
      { name: "Antonia Torres-Tinoco", role: "Secretary to the Commissioner" },
      { name: "Antonia Torres-Tinoco", role: "Secretary to the Commissioner" },
    ];
  }

  if (!directors || directors.length === 0) {
    directors = [
      { name: "Antonia Torres-Tinoco", role: "Secretary to the Commissioner" },
      { name: "Antonia Torres-Tinoco", role: "Secretary to the Commissioner" },
      { name: "Antonia Torres-Tinoco", role: "Secretary to the Commissioner" },
    ];
  }

  // Display a clean 6-item grid for Exec and 3-item grid for Directors as shown in reference design
  const displayedExec = execMembers.slice(0, 6);
  const displayedDirectors = directors.slice(0, 3);

  const backgroundStyle = {
    background:
      "linear-gradient(180deg, #F8FAFC 0%, #D1DFED 15%, #6D91B3 45%, #3D648C 75%, #1E4064 100%)",
  };

  return (
    <section
      className={`${mulish.className} -m-6 min-h-screen px-6 py-16 md:px-12 md:py-20`}
      style={backgroundStyle}
    >
      <div className="max-w-5xl mx-auto">
        {/* Title Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#084C7F] tracking-tight">
            Leadership
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#084C7F] mt-2">
            2023-2026
          </h2>
        </div>

        {/* Meet the Exec Board Section */}
        <div className="mb-14">
          <h3 className="text-lg md:text-xl font-bold text-[#084C7F] mb-4 text-left">
            Meet the Exec Board
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayedExec.map((member, idx) => (
              <div
                key={`exec-${idx}`}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-[#c7d8e8]"
              >
                {/* Photo */}
                <Image
                  src={member.img || "/leadership_profile.jpg"}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority={idx < 3}
                />

                {/* Bottom Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#144773]/95 via-[#144773]/45 via-35% to-transparent flex flex-col justify-end items-center pb-5 px-4 text-center">
                  <span className="font-bold text-base md:text-lg text-white leading-snug drop-shadow-sm">
                    {member.name}
                  </span>
                  <span className="text-xs md:text-sm text-white/90 font-light mt-0.5 drop-shadow-sm">
                    {member.role || "Executive Member"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet the Directors Section */}
        <div className="mb-14">
          <h3 className="text-lg md:text-xl font-bold text-[#084C7F] mb-4 text-left">
            Meet the Directors
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayedDirectors.map((director, idx) => {
              const taskList = parseTasks(director.tasks);

              return (
                <div
                  key={`director-${idx}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col"
                >
                  {/* Top Image Card */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#c7d8e8]">
                    <Image
                      src={director.img || "/leadership_profile.jpg"}
                      alt={director.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />

                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#144773]/95 via-[#144773]/45 via-35% to-transparent flex flex-col justify-end items-center pb-4 px-3 text-center">
                      <span className="font-bold text-base text-white leading-snug drop-shadow-sm">
                        {director.name}
                      </span>
                      <span className="text-xs text-white/90 font-light mt-0.5 drop-shadow-sm">
                        {director.role || "Director"}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Weekly Tasks Card */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="text-[#084C7F] font-bold text-xs tracking-wide mb-3">
                        Weekly Task:
                      </h4>
                      <ul className="list-disc list-outside ml-4 space-y-2 text-[11px] text-gray-700 leading-relaxed font-normal">
                        {taskList.map((task, tIdx) => (
                          <li key={tIdx}>{task}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Static Dot Indicators */}
                    <div className="flex justify-end gap-1.5 mt-5 pt-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}