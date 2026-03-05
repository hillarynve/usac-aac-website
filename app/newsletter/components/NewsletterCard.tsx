export default function NewsletterCard() {
  return (
    <div className="relative bg-[#B7B7B7] rounded-[1.5rem] aspect-square flex flex-col justify-end overflow-hidden">
      <div className="absolute top-5 right-5 bg-[#8C8C8C] text-white px-16 py-2 rounded-xl text-md">Year</div>
      <div className="bg-[#8C8C8C] p-8">
        <h4 className="text-white text-2xl font-semibold">Month Newsletter</h4>
        <div className="h-4 bg-[#7D7D7D] w-full rounded-full mt-4"></div>
        <div className="h-4 bg-[#7D7D7D] w-7/8 rounded-full mt-4"></div>
        <div className="h-4 bg-[#7D7D7D] w-3/4 rounded-full mt-4"></div>

      </div>
    </div>
  );
}