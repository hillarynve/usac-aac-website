import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Welcome to USAC AAC</h1>
      <p className="mt-4 text-gray-600">
        Placeholder page for leadership content.
      </p>

      {/* Simple link to Leadership page */}
      <Link
        href="/leadership"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to Leadership Page →
      </Link>
      <br></br>
      {/* Simple link to Research page */}
      <Link
        href="/research"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to Research Page →
      </Link>

      <div>
        <Link
          href="/internship"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Go to Internship Page →
        </Link>
      </div>

    </section>
  );
}