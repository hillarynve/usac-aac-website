import Link from "next/link";

export default function Resources() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Hotlines & Getting Help</h1>
      <p className="mt-4 text-gray-600">
        Placeholder page for resources content.
      </p>

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