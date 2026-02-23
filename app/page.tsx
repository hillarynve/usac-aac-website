import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <section className="bg-gray-100 px-8 py-16 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
            UCLA USAC
          </p>
          <h1 className="text-8xl font-black text-gray-1000 leading-none mb-2">
            AAC
          </h1>
          <p className="text-lg text-gray-600 mb-8">Academic Affairs Commission</p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/internship"
              className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded hover:bg-gray-400 transition-colors duration-200"
            >
              Internship
            </Link>
            <Link
              href="/sarp"
              className="px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded hover:bg-gray-400 transition-colors duration-200"
            >
              SARP Program
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-8 py-20 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-black text-gray-900 leading-tight text-right">
              Finding<br />Inspiration in<br />Every Turn
            </h2>
          </div>
          <div>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Academic Affairs Commission (AAC) is one of 15 offices under UCLA&apos;s
              Undergraduate Students Association Council (USAC), dedicated to supporting
              students in all matters related to academics. Our mission is to enhance the
              academic experience for all Bruins through advocacy, resources, and programs
              that promote accessibility, equity, and success.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-8 py-16 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-gray-900 text-center mb-16">
            What we do
          </h2>
          <div className="grid grid-cols-2 text-center md:grid-cols-4 gap-6">
            {[
              {
                title: "Advocacy",
                desc: "Collaborate with UCLA's Academic Senate to influence academic policies that benefit students.",
              },
              {
                title: "Funding Opportunities",
                desc: "Manage programs like the Academic Success Referendum Fund and Travel Grant Mini Fund to support student projects and academic endeavors.",
              },
              {
                title: "Student Support Programs",
                desc: "Provide resources like textbook scholarships, workshops, and initiatives such as Books for Bruins and evening study spaces.",
              },
              {
                title: "Leadership Development",
                desc: "Run internship programs that equip students with skills in advocacy and student government, preparing them for leadership roles within and beyond UCLA.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col">
                <div className="bg-gray-200 rounded-xl aspect-square mb-4 w-full" />
                <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Letter From Commissioner */}
      <section className="px-8 py-20 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-12">
            Letter From The Commissioner
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Letter Text */}
            <div className="bg-gray-100 text-center rounded-2xl p-8 text-sm text-gray-700 leading-relaxed space-y-4">
              <p>
                Days before making the decision to come to UCLA, I found myself inspired by the
                powerful words of Dr. Martin Luther King Jr. His dream of a better future resonated
                deeply with me, and my own dream of making a difference began to take shape. I
                envisioned a life at UCLA where I could actively contribute to my community and
                ensure that every student&apos;s academic journey is equitable and supported—a
                vision I know many of us share.
              </p>
              <p>
                When I first ran for Academic Affairs Commissioner, I did so with a clear
                understanding of the work needed to improve our office, a fascination for learning,
                and an appetite for more. Much like a singer who masters their technique to ensure
                their voice stands the test of time, I knew that by enhancing programs like
                Books4Bruins and creating more opportunities for student involvement, we could meet
                the evolving needs of our community.
              </p>
              <p>
                My vision for the future is one where all students, regardless of background, have
                access to the resources and support they need to thrive. This includes not only
                strengthening existing programs but also fostering more opportunities for students
                to voice their concerns and actively shape the policies that affect them. I am
                committed to establishing an Interdepartmental Council that will bring together
                diverse voices across UCLA&apos;s academic departments, so we can better
                collaborate and address challenges together.
              </p>
              <p>
                As your Academic Affairs Commissioner, I stand with each of you. My mission is to
                help ensure that academic equity is not just an ideal but a tangible reality for all
                Bruins. Together, we will create a UCLA where every student can dream, achieve, and
                thrive.
              </p>
            </div>

            {/* Commissioner Profile */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-200 rounded-t-[64px] w-85 h-85 mb-6" />
              <h3 className="text-4xl font-bold text-gray-900">Cristopher Espino</h3>
              <p className="text-gray-500 text-lg mt-1">Academic Affairs Commissioner 25–26</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}