import Link from "next/link";

export default function Home() {
  const brandBlue = "text-[#084C7F]";

  // Adjusted gradient: starts at an off-white/very light blue to pop the dark blue text
  const backgroundStyle = {
    background: "linear-gradient(180deg, #F8FAFC 0%, #D1DFED 15%, #6D91B3 45%, #3D648C 75%, #1E4064 100%)",
  };

  return (
    <main 
      className="min-h-screen text-white font-sans selection:bg-blue-100 selection:text-[#084C7F]" 
      style={backgroundStyle}
    >
      {/* Hero Section */}
      <section className="px-8 pt-24 pb-32 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className={`text-sm font-bold tracking-[0.25em] mb-4 uppercase ${brandBlue} opacity-70`}>
            UCLA USAC
          </p>
          <h1 className={`text-[120px] md:text-[200px] font-serif font-medium leading-[0.8] mb-6 -ml-2 ${brandBlue}`}>
            AAC
          </h1>
          <p className={`text-2xl md:text-3xl font-light tracking-wide mb-12 ${brandBlue} opacity-90`}>
            Academic Affairs Commission
          </p>
          <div className="flex gap-4">
            <Link
              href="/internship"
              className="px-10 py-3.5 bg-white text-[#084C7F] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Internship
            </Link>
            <Link
              href="/sarp"
              className="px-10 py-3.5 bg-white text-[#084C7F] font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              SARP Internship
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-8 py-32 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <h2 className="text-6xl md:text-7xl font-serif leading-[1.1] text-right text-[#084C7F] md:text-white/95">
            Finding <br />
            Inspiration in <br />
            Every Turn
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-white/90 max-w-xl">
            The Academic Affairs Commission (AAC) is one of 15 offices under UCLA&apos;s
            Undergraduate Students Association Council (USAC), dedicated to supporting
            students in all matters related to academics. Our mission is to enhance the
            academic experience for all Bruins through advocacy, resources, and programs
            that promote accessibility, equity, and success.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-8 py-20 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif text-center mb-24 text-white">
            What we do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Funding", icon: "💳" },
              { title: "Student Support", icon: "❤️" },
              { title: "Advocacy", icon: "⚖️" },
              { title: "Leadership", icon: "👤" },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 hover:bg-white/20 transition-all cursor-default">
                <div className="text-xl mb-4 flex items-center gap-2 font-bold text-white">
                  <span>{item.icon}</span>
                  {item.title}
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  Provide resources like textbook scholarships, workshops, and initiatives
                  such as Books for Bruins and evening study spaces.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Letter From Commissioner */}
      <section className="px-8 py-32 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-serif text-center mb-16 text-white">
            Letter From The Commissioner
          </h2>
          
          <div className="bg-white/95 rounded-[3rem] p-10 md:p-20 text-gray-800 shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-6 text-center leading-relaxed font-light text-[#084C7F]/90">
             <p>
                Days before making the decision to come to UCLA, I found myself inspired by the powerful words of Dr. Martin Luther King Jr. His dream of a better future resonated deeply with me, and my own dream of making a difference began to take shape. I envisioned a life at UCLA where I could actively contribute to my community and ensure that every student’s academic journey is equitable and supported— a vision I know many of us share.
              </p>
              <p>
                When I first ran for Academic Affairs Commissioner, I did so with a clear understanding of the work needed to improve our office, a fascination for learning, and an appetite for more. Much like a singer who masters their technique to ensure their voice stands the test of time, I knew that by enhancing programs like Books4Bruins and creating more opportunities for student involvement, we could meet the evolving needs of our community.
              </p>
              <p>
                My vision for the future is one where all students, regardless of background, have access to the resources and support they need to thrive. This includes not only strengthening existing programs but also fostering more opportunities for students to voice their concerns and actively shape the policies that affect them. I am committed to establishing an Interdepartmental Council that will bring together diverse voices across UCLA’s academic departments, so we can better collaborate and address challenges together.
              </p>
              <p>
                As your Academic Affairs Commissioner, I stand with each of you. My mission is to help ensure that academic equity is not just an ideal but a tangible reality for all Bruins. Together, we will create a UCLA where every student can dream, achieve, and thrive.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center md:flex-row md:justify-end gap-6 md:mr-10">
            <div className="text-center md:text-right">
              <h3 className={`text-4xl font-serif`}>Cristopher Espino</h3>
              <p className="text-white/80 font-light tracking-wide">Academic Affairs Commissioner 25–26</p>
            </div>
            {/* Profile Placeholder */}
            <div className="w-28 h-28 bg-white/20 rounded-full flex-shrink-0 shadow-xl border-4 border-white/40" />
          </div>
        </div>
      </section>

      <footer className="py-24 opacity-30 text-center text-[10px] tracking-[0.3em] uppercase">
        © 2026 UCLA Academic Affairs Commission
      </footer>
    </main>
  );
}