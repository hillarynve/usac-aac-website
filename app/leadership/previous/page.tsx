import Link from "next/link";

export default function Previous() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Previous Commission Leadership</h1>
      <p className="mt-4 text-gray-600">
        Placeholder page for previous leadership content.
      </p>

      <Link
        href="/leadership/previous/24leadership"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to 24-25 Leadership Page →
      </Link>

      <br></br>

      <Link
        href="/leadership/previous/24directorship"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to 24-25 Directorship Page →
      </Link>

      <br></br>

      <Link
        href="/leadership/previous/24senator"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to 24-25 Senator Page →
      </Link>

      <br></br>

      <Link
        href="/leadership/previous/23leadership"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to 23-24 Leadership Page →
      </Link>

      <br></br>

      <Link href="/leadership" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Commission Leadership </Link>

      <br></br> 

      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>
    </section>

        
  );
}