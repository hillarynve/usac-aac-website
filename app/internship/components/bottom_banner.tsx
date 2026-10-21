import ImageBox from "./image_box";
import { libreBaskerville } from "../fonts";

export default function BottomBanner() {
  const directorName = "Antonia Torres-Tinoco";
  const directorRole = "3rd-year, Internship Director";
  const email = "yearinternshipaac@usac.ucla.edu";

  return (
    <div className="grain internship-contact flex w-full flex-col gap-10 overflow-hidden px-8 py-20 md:flex-row md:items-center md:justify-between md:px-16 md:py-28">
      <h2 className={`${libreBaskerville.className} text-5xl leading-tight text-usac-navy md:text-7xl`}>
        Questions?<br />Email us!
      </h2>

      <div className="flex items-end gap-8 self-end md:self-auto">
        <div className="flex flex-col text-right text-xl font-bold text-usac-navy">
          <span>{directorName}</span>
          <span>{directorRole}</span>
          <a href={`mailto:${email}`} className="hover:underline">{email}</a>
        </div>

        <ImageBox src="" alt="Image of director" className="size-40 shrink-0 rounded-full md:size-48" />
      </div>
    </div>
  );
}
