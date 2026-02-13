import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Welcome to USAC AAC</h1>
      <p className="mt-4 text-gray-600">
        Placeholder page for leadership content.
      </p>

      {/* Simple link to Common Leadership page */}
      <Link
        href="/leadership"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to Common Leadership Page →
      </Link>
      <br></br>
      {/* Simple link to Research page */}
      <Link
        href="/research"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to Research Page →
      </Link>
      <br></br>

      {/* Simple link to internships page */}
      <Link
        href="/internship"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to Internship Page →
      </Link>
      <br></br>
      
      {/* Simple link to Newsletter page */}
      
      <Link 
        href="/newsletter"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to Newsletter Page →
      </Link>
      <br></br>

      {/* Link to the Resources page */}
      <Link
        href="/resources"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to Resources page →
      </Link>
      <br></br>

      {/* Link to the SARP page */}
      <Link
        href="/sarp"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to SARP page →
      </Link>
      <br></br>

    </section>
  );
}