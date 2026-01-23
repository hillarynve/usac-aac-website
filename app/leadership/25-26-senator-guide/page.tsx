import Link from "next/link";

export default function Leadership() {
  return (
    <section>
      <h1 className="text-2xl font-bold">25-26 Senator Guide</h1>
      <p className="mt-4 text-gray-600">
        Placeholder page for 25-26 senator guide content.
      </p>

      <Link href="/leadership" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Common Leadership </Link>
    </section>
  );
}