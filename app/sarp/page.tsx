import Link from "next/link";
import "./styles.css";

export default function SARP() {
  return (
    
    <section className="web-page">
      <div className = "header-section"> 
        <div className = "heading-padding"> 
          {/* title */}
          <h1 className="page-title">SARP</h1> 
          <button className="apply-button">Apply Now</button>

          {/* mission statement */}
          <p className="paragraph-text">
            The Student Ambassador to the Registrar Program (SARP) serves as a bridge between the student body and the Registrar’s Office. Our mission is to enhance transparency, streamline administrative processes, and ensure that student voices are represented in university policy discussions related to enrollment, transfer articulation, and academic records.
          </p>
        </div>
      </div>

      {/* student ambassadors section  */}
      <div className = "student-ambassadors-section">
        <h3 className = "heading">Meet Our Student Ambassadors</h3>
        <p className="paragraph-text">The Student Ambassador to the Registrar serves as a liaison between the student body and the UCLA Registrar’s Office, providing feedback and assisting in the development of initiatives that improve academic processes and communication across campus.</p>
        
        {/* ambassador card 1 */}
        <div className="ambassador-card">
          <div className="ambassador-image">
            <span>Image</span>
          </div>
          <div className="ambassador-info">
            <button className="email-button">email</button>
            <div className="ambassador-header">
              <div>
                <h4 className="ambassador-name">David Escobedo <span className="pronouns">he/him</span></h4>
                <p className="ambassador-p">1st year</p>
                <p className="ambassador-p"> Major: Business Economics</p>
                <p className="ambassador-p">Minor(s): Math and Accounting</p>
              </div>
            </div>
            
            <div className="ambassador-tasks">
              <p className = "ambassador-p">Weekly Tasks:</p>
              <ul>
                <li>Gather and organize student feedback on registration, academic policy, and degree progress.</li>
                <li>Collaborate with Registrar staff and other ambassadors on improving communication and accessibility of academic resources.</li>
                <li>Support outreach efforts that help students better understand Registrar functions and key academic deadlines.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ambassador card 2 */}
        <div className="ambassador-card">
          <div className="ambassador-image">
            <span>Image</span>
          </div>
          <div className="ambassador-info">
            <button className="email-button">email</button>
            <div className="ambassador-header">
              <div>
                <h4 className="ambassador-name">David Escobedo <span className="pronouns">he/him</span></h4>
                <p className="ambassador-p">1st year</p>
                <p className="ambassador-p"> Major: Business Economics</p>
                <p className="ambassador-p">Minor(s): Math and Accounting</p>
              </div>
            </div>
            
            <div className="ambassador-tasks">
              <p className = "ambassador-p">Weekly Tasks:</p>
              <ul>
                <li>Gather and organize student feedback on registration, academic policy, and degree progress.</li>
                <li>Collaborate with Registrar staff and other ambassadors on improving communication and accessibility of academic resources.</li>
                <li>Support outreach efforts that help students better understand Registrar functions and key academic deadlines.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* current projects section  */}
      <div className = "current-projects-section">
        <h3 className = "heading">Current Projects</h3>
        
        <div className="projects-scroll-container">
          <div className="project-card">
            <h4 className="project-title">Transferology & Course Substitution Repository:</h4>
            <p className="project-description">Improving transfer course clarity and petition processing.</p>
          </div>

          <div className="project-card">
            <h4 className="project-title">Survey on Registrar-Related Student Experiences:</h4>
            <p className="project-description">Gathering feedback to enhance Registrar services and communication.</p>
          </div>

          <div className="project-card">
            <h4 className="project-title">Website and Outreach Initiative:</h4>
            <p className="project-description">Increasing student awareness of Registrar resources and policies.</p>
          </div>

          <div className="project-card">
            <h4 className="project-title">Support for Unofficial Transcript Markings:</h4>
            <p className="project-description">Advancing transparency and access at UCLA.</p>
          </div>
        </div>
      </div>

      <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
        Back to Home </Link>
    </section>
  );
}