import Link from "next/link";

export default function BruinOpp() {
  return (
    <section>

      {/* <div className="section__media">
        <img src=""></img>
      </div> */}

      <div className="flex my-[164px] min-h-[452px] w-full my-16 gap-x-16 px-16">

        <div className="w-2/5 bg-[#B3B3B3] text-center">
        </div>

        <div className="ml-6 w-3/5 flex flex-col gap-y-6 font-medium text-[#084C7F]">
          <h3 className="text-[64px]">
            Bruin Opp Resource Database
          </h3>

          <p className="text-base">
            This database seeks to address the current limited availability of jobs, internships, and scholarships for undergraduate students. Our goal is to increase access to opportunities and create a more equitable experience for students. This database is especially geared toward incoming first-year freshmen and transfers and first-generation students that are underrepresented at UCLA.
          </p>
          <p className="text-base">
            The following pages will be updated periodically over the course of the school year to reflect new opportunities and deadlines. It will also be expanded to include a multitude of career paths beyond Pre-med, Pre-law, and Pre-business. Continue to visit the website to explore new additions! 
          </p>
          <button className="bg-[#FDB71B] text-2xl rounded-[80px] max-w-[293px] p-[10px]">
            View More
          </button>
        </div>
        
      
      </div>

      <div className="text-center w-full font-medium text-[#084C7F] min-h-[219px] max-w-[1090px] flex flex-col gap-6 mx-auto">
        <h3 className="text-[64px]">
          Submit Relevant Opportunities!
        </h3>
        <p className="text-xl p-[10px] gap-[10px]">
          Are you an organization who has just launched a new scholarship? A student that wants to share a cool opportunity to your fellow peers? An academic department looking to spread the word on a new research project? Please submit your opportunities below and we will make sure to include them on our website!
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-[533px] mx-auto mt-12 text-[#535353] mb-[164px]">
        
        <div className="flex flex-col">
          <label>Email</label>
          <input className="bg-[#B3B3B3] rounded-[20px] p-2.5 text-center" type="text"/>
        </div>

        <div className="flex flex-col">
          <label>Organization Name</label>
          <input className="bg-[#B3B3B3] rounded-[20px] p-2.5 text-center" type="text"/>
        </div>

        <input className="text-[#535353] bg-[#B3B3B3] rounded-[20px] p-2.5 text-center min-h-[224px] mt-4" type="text" placeholder="Description of opportunity"/>

        <button className="bg-[#FDB71B] text-2xl text-[#084C7F] rounded-[80px] p-2.5 w-[293px] h-[79px] mx-auto mt-4">Submit</button>

      </div>

      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline"> Back to Home </Link>
    
    </section>
  );
}