import Link from "next/link";
import NewsletterCard from "./components/NewsletterCard";

export default function Leadership() {
  return (
    <main className="min-h-screen bg-[#F2F9F9] font-sans pb-16">

      <section className="px-8 py-8 md:px-16">
      <h3 className="text-4xl font-black text-gray-900 text-left mb-7">
            Stay updated with academic resources, events, <br></br>and important announcements
          </h3>
      </section>

      <section className="bg-white mx-18 pl-2 md:pl-3 pr-3 py-2 mb-6">
        
        <div className="flex items-center justify-between w-full">
          <div className="flex-grow max-w-3xl">
          <input type = "text" placeholder="Search bar" className="w-full bg-[#B7B7B7] py-2 px-10 rounded-lg outline-none text-sm !text-black placeholder:!text-black text-opacity-100 max-w-3xl text-center">
          </input>
        </div>

        <div className="flex-shrink-0 ml-4">
      <select className="w-40 md:w-36 bg-[#B7B7B7] py-2 px-4 !text-black text-sm font-medium outline-none cursor-pointer appearance-none text-center">
        <option value="">Year Filter</option>
        <option value="1">25-26</option>
        <option value="2">24-25</option>
      </select>
    </div>
    </div>
      </section>


    <section className="px-6 py-10 bg-white mx-18 pb-8">

        <div className="grid grid-cols-2 gap-x-14 gap-y-8">

          <NewsletterCard />
          <NewsletterCard />
          <NewsletterCard />
          <NewsletterCard />

        </div>

      </section>

    </main>
  );
}
