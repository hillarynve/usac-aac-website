import Link from "next/link";

export default function BruinOpp() {
  return (
    <section>
      <h1 className="text-2xl font-bold"> BruinOpp</h1>

      <image></image>
      <p className="mt-4 text-gray-600">
        Program Description
      </p>
      <br></br>
      <button>
        CTA
      </button>
      <br></br>
      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>
    </section>
  );
}