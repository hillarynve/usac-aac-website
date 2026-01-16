import Link from "next/link";

export default function Resources() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Commission Resources</h1>
      <p className="mt-4 text-gray-600">
        Placeholder page for resources content.
      </p>

      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>
    </section>
  );
}