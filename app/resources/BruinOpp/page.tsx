import Link from "next/link";

export default function BruinOpp() {
  return (
    <section>

      {/* <div className="section__media">
        <img src=""></img>
      </div> */}

      <div className="flex m-16 min-h-[452px] w-full max-w-[1316px] my-16">

        <div className="w-2/5 bg-[#B3B3B3] text-center">
        </div>

        <div className="ml-6 w-3/5 flex flex-col gap-6 font-medium">
          <h3 className="text-[40px]">
            Bruin Opp Resource Database
          </h3>

          <p className="text-xl">
            This database seeks to address the current limited availability of jobs, internships, and scholarships for undergraduate students. Our goal is to increase access to opportunities and create a more equitable experience for students. This database is especially geared toward incoming first-year freshmen and transfers and first-generation students that are underrepresented at UCLA.
          </p>
          <p className="text-xl">
            The following pages will be updated periodically over the course of the school year to reflect new opportunities and deadlines. It will also be expanded to include a multitude of career paths beyond Pre-med, Pre-law, and Pre-business. Continue to visit the website to explore new additions! 
          </p>
          <button className="bg-[#6E6E6E] text-2xl rounded-[20px] w-[293px] py-5 px-8">
            Text
          </button>
        </div>
        
      
      </div>

      <hr className="mt-28 mb-16 w-3/4 mx-auto"></hr>

      <div className="text-center w-full font-medium min-h-[219px] max-w-[866px] flex flex-col gap-6 mx-auto m-16">
        <h3 className="text-[40px]">
          Submit Relevant Opportunities!
        </h3>
        <p className="text-xl">
          Are you an organization who has just launched a new scholarship? A student that wants to share a cool opportunity to your fellow peers? An academic department looking to spread the word on a new research project? Please submit your opportunities below and we will make sure to include them on our website!
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-[533px] mx-auto mt-12">
        
        <div className="flex flex-col">
          <label>Email</label>
          <input className="bg-[#B3B3B3] rounded-[20px] p-2.5 text-center" type="text" placeholder="Textbox"/>
        </div>

        <div className="flex flex-col">
          <label>Organization Name</label>
          <input className="bg-[#B3B3B3] rounded-[20px] p-2.5 text-center" type="text" placeholder="Textbox"/>
        </div>

        <input className="bg-[#B3B3B3] rounded-[20px] p-2.5 text-center min-h-[224px] mt-4" type="text" placeholder="Description of opportunity"/>

        <button className="bg-[#6E6E6E] rounded-[20px] p-2.5 w-[260px] mx-auto mt-4">Submit</button>

      </div>
    </section>
  );
}