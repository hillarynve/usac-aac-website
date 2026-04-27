import Image, { StaticImageData } from "next/image";

export default function Box({ label, src }: { label: string; src: StaticImageData }) {
  return (
    <div className="relative rounded-[10px] overflow-hidden aspect-square bg-[#B3B3B3]">
      <Image src={src} alt={label} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(to_top,#084C7F_0%,_transparent_100%)] p-6">
        <p className="text-[#F0F0F0] text-2xl text-center font-medium">{label}</p>
      </div>
    </div>
  );
}
