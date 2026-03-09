import Link from "next/link";
import ResourceCard from "./components/resourceCards";

export default function Resources() {
  return (
    <section>
      <h1 className="text-[40px] font-medium px-16 text-left">Resources & Guides</h1>

      <div className="flex flex-row gap-11 px-[60px] py-5 w-full justify-center">
        <ResourceCard label="Hotlines" />
        <ResourceCard label="The UCLA Wellness Guide" />
        <ResourceCard label="The UCLA Survival Guide" />
        <ResourceCard label="Student Resource Database" />
      </div>


      <div className="flex flex-row gap-11 px-[60px] py-5 w-full justify-center">
        <ResourceCard label="Disabled Student Union Guide" />
        <ResourceCard label="UCLA Faculty Survey Report" />
        <ResourceCard label="Student Resource Database" />
        <ResourceCard label="Student Resource Database" />
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