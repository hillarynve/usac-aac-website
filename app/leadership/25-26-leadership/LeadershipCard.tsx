import { Fragment } from 'react';
import "./styles.css";

interface LeadershipCardProps {
  img: string;
  name: string;
  title: string;
  pronouns: string;
  year: string;
  majors: string[];
  minors: string[];
  email: string;
}

export default function LeadershipCard({ img, name, title, pronouns, year, majors, minors, email }: LeadershipCardProps) {
  return (
    <div className="leadership-card">
      <div className="leadership-card-inner">
        <div className="leadership-card-front">
          <img src={img} width="160" height="160" className="leadership-card-pfp" />
          <div className="leadership-card-label">
            <div>{name}</div>
            <div>{title}</div>
          </div>
        </div>
        <div className="leadership-card-back">
          <div className="leadership-card-info">
            <div>Pronouns: {pronouns}</div>
            <div>Year: {year}</div>
            <div>
              Majors: {majors.map((major, index) => (
                <Fragment key={index}>
                  {index === 0 ? major : `, ${major}`}
                </Fragment>
              ))}
            </div>
            <div>
              Minors: {minors.map((minor, index) => (
                <Fragment key={index}>
                  {index === 0 ? minor : `, ${minor}`}
                </Fragment>
              ))}
            </div>
            <div>Email: {email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}