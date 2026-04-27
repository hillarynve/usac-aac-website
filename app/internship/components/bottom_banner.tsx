export default function BottomBanner() {
  return (
    <div className="w-full bg-gray-100 px-8 py-16 md:px-20 flex justify-between relative overflow-hidden">

      <h2 className="text-4xl font-medium item-start text-black">
        Question? Email us!
      </h2>

      <div className="flex items-end gap-10">
        <div className="flex flex-col text-right">
          <span className="text-lg text-gray-500">Email Antonia Torres-Tinoco</span>
          <span className="text-lg text-gray-500">3rd-year, Internship Director</span>
          <span className="text-lg text-blue-600">yearinternshipaac@usac.ucla.edu</span>
        </div>

        <div className="self-center">
        <div className="self-center w-45 h-45 rounded-full bg-gray-300" />
        </div>
      </div>

    </div>
  );
}