import { FaLinkedin } from "react-icons/fa";
import "./styles.css";

interface LeadershipCardProps {
  img: string;
  name: string;
  role: string;
  pronouns: string;
  year: string;
  majors: string;
  minors: string;
  email: string;
  term1: string;
  term2: string;
  linkedin: string;
}

export default function LeadershipCard({ img, name, role, pronouns, year, majors, minors, email, term1, term2, linkedin }: LeadershipCardProps) {
  return (
    <div className="leadership-card">
      <div className="leadership-card-inner">
        <div className="leadership-card-front">
          <div className="leadership-card-gradient-overlay"/>
          {/* Photos come from the Google Sheet and can be hosted anywhere, so next/image can't be used */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt={name} className="leadership-card-pfp" />
          <div className="leadership-card-label">
            <div>{name}</div>
            { role && <div>{role}</div> }
          </div>
        </div>
        <div className="leadership-card-back">
          <div className="leadership-card-solid-overlay"/>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt="" className="leadership-card-pfp" />
          <div className="leadership-card-info">
            { pronouns && <p>{pronouns}</p> }
            { year && <p>Year: {year}</p> }
            { majors && <p>Major(s): {majors}</p> }
            { minors && <p>Minor(s): {minors}</p> }
            { email && <p>Email: {email}</p> }
            { term1 && <p>First Term: {term1}</p> }
            { term2 && <p>Second Term: {term2}</p> }
            <a href={linkedin} target="_blank"><FaLinkedin /></a>
          </div>
          <div className="leadership-card-label">
            <div>{name}</div>
            { role && <div>{role}</div> }
          </div>
        </div>
      </div>
    </div>
  );
}