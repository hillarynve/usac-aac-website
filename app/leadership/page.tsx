import Link from "next/link";
import { fetchSheet } from "@/lib/sheets"

export default async function Leadership() {
  const data = await fetchSheet("Leadership")

  console.log("Leadership data:", data)

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
      <Link
        href="/leadership/previous"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to Previous Leadership Page →
      </Link>

      <br></br>
      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>

      <h2 className="mt-8 font-semibold">API Test Output:</h2>
      <pre className="mt-2 text-sm bg-gray-100 p-4 overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>

    </section>
    


  );
}