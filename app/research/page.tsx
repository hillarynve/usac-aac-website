import Link from "next/link";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

// Survey entries shown on the page. Add a `link` once findings are published
// and the card will show a "View Findings" button instead of "Coming soon".
// TODO: replace descriptions with final copy from the research team.
type Survey = {
  title: string;
  description: string;
  link?: string;
};

const surveys: Survey[] = [
  {
    title: "USAC Engagement Poll",
    description:
      "How Bruins connect with USAC: awareness of student government offices, the programs students use, and the barriers that keep them from getting involved.",
  },
  {
    title: "Non-Traditional Student Survey",
    description:
      "The academic experiences of student parents, working students, veterans, and older students, and the resources they need to succeed at UCLA.",
  },
  {
    title: "Transfer Student Survey",
    description:
      "The transition to UCLA for transfer students, from course articulation and enrollment to finding community and academic support on campus.",
  },
];

const contactEmail = "marketingaac@usac.ucla.edu";

export default function Research() {
  const brandBlue = "text-[#084C7F]";

  const backgroundStyle = {
    background: "linear-gradient(180deg, #F8FAFC 0%, #D1DFED 15%, #6D91B3 45%, #3D648C 75%, #1E4064 100%)",
  };

  return (
    <section
      className="min-h-screen text-white font-sans selection:bg-blue-100 selection:text-[#084C7F]"
      style={backgroundStyle}
    >
      {/* Hero Section */}
      <div className="px-8 pt-24 pb-28 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className={`text-sm font-bold tracking-[0.25em] mb-4 uppercase ${brandBlue} opacity-70`}>
            AAC Research
          </p>
          <h1 className={`text-6xl md:text-8xl font-serif font-medium leading-[0.95] mb-8 ${brandBlue}`}>
            Our Mission <br />
            Through Research
          </h1>
          <p className={`text-xl md:text-2xl font-light leading-relaxed max-w-2xl mb-12 ${brandBlue} opacity-90`}>
            The Academic Affairs Commission of USAC is dedicated to representing student
            needs and perspectives through data-driven advocacy. Explore our key surveys
            and findings below.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#surveys"
              className="px-10 py-3.5 bg-white text-[#084C7F] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore Surveys
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="px-10 py-3.5 border-2 border-[#084C7F] text-[#084C7F] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Surveys Section */}
      <div id="surveys" className="px-8 py-24 md:px-16 scroll-mt-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-6 text-white">
            Our Surveys
          </h2>
          <p className="text-lg font-light text-center text-white/80 max-w-2xl mx-auto mb-16">
            Each survey gives students a direct voice in the issues that shape their
            academic lives at UCLA.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {surveys.map((survey, i) => (
              <SurveyCard key={survey.title} survey={survey} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-8 py-24 md:px-16">
        <div className="max-w-5xl mx-auto bg-white/95 rounded-[3rem] p-10 md:p-16 shadow-2xl text-center">
          <h2 className={`text-4xl md:text-5xl font-serif mb-6 ${brandBlue}`}>
            Questions about our research?
          </h2>
          <p className="text-lg font-light leading-relaxed text-[#084C7F]/80 max-w-2xl mx-auto mb-10">
            Want to learn more about a survey, suggest a topic we should study, or
            partner with us? Reach out to the Academic Affairs Commission.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-3 px-10 py-3.5 bg-[#084C7F] text-white font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FaEnvelope />
            {contactEmail}
          </a>
        </div>
      </div>

      <footer className="py-24 opacity-30 text-center text-[10px] tracking-[0.3em] uppercase">
        © 2026 UCLA Academic Affairs Commission
      </footer>
    </section>
  );
}

function SurveyCard({ survey, index }: { survey: Survey; index: number }) {
  return (
    <div className="flex flex-col bg-white/95 rounded-[2rem] p-8 md:p-10 shadow-xl">
      <span className="mb-8 font-serif text-5xl text-[#084C7F]/25 leading-none">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-3xl font-serif text-[#084C7F] mb-4 leading-tight">{survey.title}</h3>
      <p className="text-base font-light leading-relaxed text-gray-600 mb-10 flex-1">
        {survey.description}
      </p>
      {survey.link ? (
        <Link
          href={survey.link}
          target="_blank"
          className="inline-flex items-center gap-2 self-start font-bold text-[#084C7F] hover:text-[#3A81B8]"
        >
          View Findings <FaArrowRight className="text-sm" />
        </Link>
      ) : (
        <span className="self-start text-sm font-bold tracking-wide uppercase text-gray-400">
          Findings coming soon
        </span>
      )}
    </div>
  );
}
