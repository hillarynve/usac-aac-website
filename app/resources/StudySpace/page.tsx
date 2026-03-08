import Link from "next/link";
import ThreeBoxes from "./components/box";

export default function StudySpace() {
  return (
    <section>
      <h1 className="text-[40px] font-medium text-center w-4/5 mx-auto m-8"> Where Can I Study?</h1>


      <div className="flex flex-col gap-4 w-full">

        <ThreeBoxes />

        <ThreeBoxes />

        <ThreeBoxes />

      </div>
      <p className="mt-4 text-gray-600">
        Placeholder page for Study Space content.
      </p>

      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>
    </section>
  );
}