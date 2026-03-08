import Link from "next/link";

export default function StudySpace() {
  return (
    <section>
      <h1 className="text-[40px] font-medium text-center w-4/5 mx-auto m-8"> Where Can I Study?</h1>


      <div className="flex flex-col gap-4 w-full">

        <div className="gap-11 px-2.5 py-5 w-full">
          <div className="flex flex-row gap-6 max-w-[1091px] mx-auto">
            <div className="flex-1 min-h-[357px] bg-[#B3B3B3] rounded-[10px] flex items-center justify-center">Placeholder box (image/text/card)</div>
            <div className="flex-1 min-h-[357px] bg-[#B3B3B3] rounded-[10px] flex items-center justify-center">Placeholder box (image/text/card)</div>
            <div className="flex-1 min-h-[357px] bg-[#B3B3B3] rounded-[10px] flex items-center justify-center">Placeholder box (image/text/card)</div>
          </div>
        </div>

        <div className="gap-11 px-2.5 py-5 w-full">
          <div className="flex flex-row gap-6 max-w-[1091px] mx-auto">
            <div className="flex-1 min-h-[357px] bg-[#B3B3B3] rounded-[10px] flex items-center justify-center">Placeholder box (image/text/card)</div>
            <div className="flex-1 min-h-[357px] bg-[#B3B3B3] rounded-[10px] flex items-center justify-center">Placeholder box (image/text/card)</div>
            <div className="flex-1 min-h-[357px] bg-[#B3B3B3] rounded-[10px] flex items-center justify-center">Placeholder box (image/text/card)</div>
          </div>
        </div>

        <div className="gap-11 px-2.5 py-5 w-full">
          <div className="flex flex-row gap-6 max-w-[1091px] mx-auto">
            <div className="flex-1 min-h-[357px] bg-[#B3B3B3] rounded-[10px] flex items-center justify-center">Placeholder box (image/text/card)</div>
            <div className="flex-1 min-h-[357px] bg-[#B3B3B3] rounded-[10px] flex items-center justify-center">Placeholder box (image/text/card)</div>
            <div className="flex-1 min-h-[357px] bg-[#B3B3B3] rounded-[10px] flex items-center justify-center">Placeholder box (image/text/card)</div>
          </div>
        </div>

      </div>
      <p className="mt-4 text-gray-600">
        Placeholder page for Study Space content.
      </p>

      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>
    </section>
  );
}