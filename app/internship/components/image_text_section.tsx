type Props = {
  title: string;
  content: string;
  imageUrl: string;
  imgLeft?: boolean;
};

export default function ImageTextSection({ title, content, imageUrl, imgLeft = true }: Props) {
  const image = (
    <div className="w-2/5 flex-shrink-0 bg-gray-300 self-stretch">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );

  const text = (
    <div className="w-3/5 flex flex-col gap-4">
      <h2 className="text-4xl font-medium text-black">{title}</h2>
      <p className="text-lg text-gray-600 leading-relaxed">{content}</p>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-16 md:px-20 flex items-stretch gap-12">
      {imgLeft ? (
        <>{image}{text}</>
      ) : (
        <>{text}{image}</>
      )}
    </div>
  );
}