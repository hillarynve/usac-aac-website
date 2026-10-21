import ImageBox from "./image_box";
import { libreBaskerville } from "../fonts";

type Props = {
  title: string;
  // A string renders as a paragraph, an array renders as a bulleted list
  content: string | string[];
  imageUrl: string;
  imgLeft?: boolean;
};

export default function ImageTextSection({ title, content, imageUrl, imgLeft = true }: Props) {
  const image = (
    <ImageBox
      src={imageUrl}
      alt="Image of last internship cohort"
      className="aspect-[3/2] w-full shrink-0 rounded-xl md:w-[38%]"
    />
  );

  const text = (
    <div className="flex flex-col gap-6">
      <h2 className={`${libreBaskerville.className} text-4xl text-usac-navy md:text-6xl`}>{title}</h2>
      {Array.isArray(content) ? (
        <ul className="list-disc space-y-1 pl-6 text-base leading-snug text-usac-navy">
          {content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-base leading-snug text-usac-navy">{content}</p>
      )}
    </div>
  );

  return (
    <div className={`flex flex-col items-start gap-10 md:gap-16 ${imgLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {image}
      {text}
    </div>
  );
}
