type Props = {
  src: string;
  alt: string;
  className?: string;
};

// Shows the image, or a dark placeholder labeled with the alt text if there is no image yet
export default function ImageBox({ src, alt, className = "" }: Props) {
  return (
    <div className={`overflow-hidden bg-[#454545] ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-4 text-center text-xs text-gray-200">
          {alt}
        </div>
      )}
    </div>
  );
}
