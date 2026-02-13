import Link from "next/link";

export default function Leadership24() {
  return (
    <section>
      <h1 className="text-2xl font-bold">24-25 Leadership</h1>
      <p className="mt-4 text-gray-600">
        Placeholder page for 24-25 leadership content.
      </p>

      <Link href="/leadership/previous" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to View Previous Leadership </Link>

      <br></br> 

      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>
    </section>

        
  );
}