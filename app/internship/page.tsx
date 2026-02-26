import Link from "next/link";
import HeaderBanner from "./components/header_banner";
import HorizontalScrollCards from "./components/horizontal_scroll_cards";

export default function Internship() {
  return (
    <section>
      <HeaderBanner />

      <div className="px-12">
        <hr className="border-gray-300 my-8" />
        <HorizontalScrollCards />
        <hr className="border-gray-300 my-8" />
        <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </section>
  );
}