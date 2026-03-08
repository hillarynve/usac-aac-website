import Link from "next/link";

export default function Resources() {
  return (
    <section>
      <h1 className="text-[40px] font-medium px-16 text-left">Resources & Guides</h1>

      <div className="flex flex-row gap-11 px-[60px] py-5 w-full justify-center">
        <div className= "flex-1 flex flex-col rounded-[10px] overflow-hidden">
          <div className="min-h-[189px] bg-[#B3B3B3]"></div>
          <div className="bg-[#6E6E6E] px-[25px] py-[25px]">
            <p className="text-white text-xl font-medium">Hotlines</p>
          </div>
        </div>

        <div className= "flex-1 flex flex-col rounded-[10px] overflow-hidden">
          <div className="min-h-[189px] bg-[#B3B3B3]"></div>
          <div className="bg-[#6E6E6E] px-[25px] py-[25px]">
            <p className="text-white text-xl font-medium">The UCLA Wellness Guide</p>
          </div>
        </div>

        <div className= "flex-1 flex flex-col rounded-[10px] overflow-hidden">
          <div className="min-h-[189px] bg-[#B3B3B3]"></div>
          <div className="bg-[#6E6E6E] px-[25px] py-[25px]">
            <p className="text-white text-xl font-medium">The UCLA Survival Guide</p>
          </div>
        </div>

        <div className= "flex-1 flex flex-col rounded-[10px] overflow-hidden">
          <div className="min-h-[189px] bg-[#B3B3B3]"></div>
          <div className="bg-[#6E6E6E] px-[25px] py-[25px]">
            <p className="text-white text-xl font-medium">Student Resource Database</p>
          </div>
        </div>
      </div>



      <div className="flex flex-row gap-11 px-[60px] py-5 w-full justify-center">
        <div className= "flex-1 flex flex-col rounded-[10px] overflow-hidden">
          <div className="min-h-[189px] bg-[#B3B3B3]"></div>
          <div className="bg-[#6E6E6E] px-[25px] py-[25px]">
            <p className="text-white text-xl font-medium">Disabled Student Union Guide</p>
          </div>
        </div>

        <div className= "flex-1 flex flex-col rounded-[10px] overflow-hidden">
          <div className="min-h-[189px] bg-[#B3B3B3]"></div>
          <div className="bg-[#6E6E6E] px-[25px] py-[25px]">
            <p className="text-white text-xl font-medium">UCLA Faculty Survey Report</p>
          </div>
        </div>

        <div className= "flex-1 flex flex-col rounded-[10px] overflow-hidden">
          <div className="min-h-[189px] bg-[#B3B3B3]"></div>
          <div className="bg-[#6E6E6E] px-[25px] py-[25px]">
            <p className="text-white text-xl font-medium">Student Resource Database</p>
          </div>
        </div>

        <div className= "flex-1 flex flex-col rounded-[10px] overflow-hidden">
          <div className="min-h-[189px] bg-[#B3B3B3]"></div>
          <div className="bg-[#6E6E6E] px-[25px] py-[25px]">
            <p className="text-white text-xl font-medium">Student Resource Database</p>
          </div>
        </div>
      </div>

      <Link href="/resources/BruinOpp" className="mt-4 inline-block text-blue-600 hover:underline">
        Bruin Opp </Link><br></br>
      <Link href="/resources/Funding" className="mt-4 inline-block text-blue-600 hover:underline">
        Funding </Link><br></br>
      <Link href="/resources/StudySpace" className="mt-4 inline-block text-blue-600 hover:underline">
        Study Space </Link><br></br>
      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>
    </section>
  );
}