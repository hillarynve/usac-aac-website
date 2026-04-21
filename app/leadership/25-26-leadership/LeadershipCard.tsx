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
          <img src={img} className="leadership-card-pfp" />
          <div className="leadership-card-label">
            <div>{name}</div>
            <div>{role}</div>
          </div>
        </div>
        <div className="leadership-card-back">
          <div className="leadership-card-solid-overlay"/>
          <img src={img} className="leadership-card-pfp" />
          <div className="leadership-card-info">
            <p>{pronouns}</p>
            <p>Year: {year}</p>
            <p>Major(s): {majors}</p>
            <p>Minor(s): {minors}</p>
            <p>Email: {email}</p>
            <p>First Term: {term1}</p>
            <p>Second Term: {term2}</p>
            <a href={linkedin} target="_blank"><img src={`https://cdn-icons-png.flaticon.com/512/1384/1384014.png`}/></a>
          </div>
          <div className="leadership-card-label">
            <div>{name}</div>
            <div>{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}