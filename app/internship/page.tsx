import HeaderBanner from "./components/header_banner";
import HorizontalScrollCards from "./components/horizontal_scroll_cards";
import BottomBanner from "./components/bottom_banner";
import ImageTextSection from "./components/image_text_section";
import { mulish } from "./fonts";
import "./styles.css";

export default function Internship() {
  return (
    // -m-6 cancels the padding on <main> so the banners span the full width
    <section className={`${mulish.className} -m-6`}>
      <HeaderBanner />

      <div className="grain internship-body overflow-hidden px-8 py-20 md:px-16 md:py-28">
        <div className="flex flex-col gap-20">
          <ImageTextSection
            title="Intern Responsibilities"
            content={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
              "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
              "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            ]}
            imageUrl=""
            imgLeft={true}
          />

          <ImageTextSection
            title="History of the Program"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            imageUrl=""
            imgLeft={false}
          />

          <hr className="border-white/40" />

          <HorizontalScrollCards />
        </div>
      </div>

      <BottomBanner />
    </section>
  );
}
