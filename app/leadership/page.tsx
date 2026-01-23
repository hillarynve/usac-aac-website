import Link from "next/link";

export default function Leadership() {
  return (
    <section>
      <h1 className="text-2xl font-bold">Commission Leadership</h1>
      <p className="mt-4 text-gray-600">
        Placeholder page for leadership content.
      </p>


      <Link
        href="/leadership/previous"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to Previous Leadership Page →
      </Link>

      <br></br>

      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>

      

    </section>
    


  );
}