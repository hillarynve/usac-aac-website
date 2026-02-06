import Link from "next/link";

export default function Leadership() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Common Leadership</h1>
      <p className="mt-4 text-gray-600">
        Placeholder page for leadership content.
      </p>

      {/* Simple link to 25-26 Leadership page */}
      <Link
        href="/leadership/25-26-leadership"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to 25-26 Leadership Page →
      </Link>
      <br></br>
      {/* Simple link to 25-26 Senator Guide page */}
      <Link
        href="/leadership/25-26-senator-guide"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to 25-26 Senator Guide Page →
      </Link>
      <br></br>
      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>
    </section>
  );
}