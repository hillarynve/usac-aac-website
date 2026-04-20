import Link from "next/link";
import HeaderBanner from "./components/header_banner";
import HorizontalScrollCards from "./components/horizontal_scroll_cards";
import BottomBanner from "./components/bottom_banner";
import ImageTextSection from "./components/image_text_section";

export default function Internship() {
  return (
    <section>
      <HeaderBanner />

      <div className="px-12">
      <ImageTextSection
        title="Intern Responsibilities"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        imageUrl=""
        imgLeft={true}
      />

      <ImageTextSection
        title="History of the Program"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageUrl=""
        imgLeft={false}
      />
        <hr className="border-gray-300 my-8" />
        <HorizontalScrollCards />
        <hr className="border-gray-300 my-8" />
      </div>

      <BottomBanner />
      <div className="mb-30"></div>
    </section>
  );
}