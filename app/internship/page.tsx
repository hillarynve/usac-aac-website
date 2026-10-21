import HeaderBanner from "./components/header_banner";
import HorizontalScrollCards from "./components/horizontal_scroll_cards";
import BottomBanner from "./components/bottom_banner";
import ImageTextSection from "./components/image_text_section";
import { mulish } from "./fonts";
import "./styles.css";

export default function Internship() {
  return (
    <section className={mulish.className}>
      <HeaderBanner />

      <div className="grain internship-body overflow-hidden px-8 py-20 md:px-16 md:py-28">
        <div className="flex flex-col gap-20">
          <ImageTextSection
            title="What You'll Learn"
            content="Through an intensive and enriching 10-week program, a cohort of interns in the Fall and Winter quarters learn about the ins-and-outs of the Undergraduate Student Association (UCLA's student government model), the Academic Affairs Commission, the Academic Senate, the Mother Organizations and many valuable campus stakeholders."
            imageUrl=""
            imgLeft={true}
          />

          <ImageTextSection
            title="Where Interns Go Next"
            content="By the end of it, interns will walk away with the knowledge, tools and experience to advocate for Educational Justice. All of our interns go on to work with our committees through the Spring Quarter. Beyond, our interns tend to continue on with directorship positions in AAC, other USAC offices, running for USAC positions, or applying their skills many fields like law, policy, and more."
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
