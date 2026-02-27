import Link from "next/link";
import "./style.css"

export default function BruinOpp() {
  return (
    <section>
      <h1 className="bruinOppHead"> BruinOpp</h1>

      {/* <div className="section__media">
        <img src=""></img>
      </div> */}

      <div className="section__content">
        <h2 className="text-4xl">
        Program Description
        </h2>

        <p className="text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        <br></br>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        seddo eiusmod tempor incididunt ut labore et dolore magna aliqua
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <br></br>
        <button className="basicButton">
          CTA
        </button>
      
      </div>

      <br></br>
      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>
    </section>
  );
}