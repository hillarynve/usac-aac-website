import { Fragment } from 'react';
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
}

export default function LeadershipCard({ img, name, role, pronouns, year, majors, minors, email, term1, term2 }: LeadershipCardProps) {
  return (
    <div className="leadership-card">
      <div className="leadership-card-inner">
        <div className="leadership-card-front">
          <img src={img} width="160" height="160" className="leadership-card-pfp" />
          <div className="leadership-card-label">
            <div>{name}</div>
            <div>{role}</div>
          </div>
        </div>
        <div className="leadership-card-back">
          <div className="leadership-card-info">
            <div>Pronouns: {pronouns}</div>
            <div>Year: {year}</div>
            <div>Majors: {majors}</div>
            <div>Minors: {minors}</div>
            <div>Email: {email}</div>
            <div>First Term: {term1}</div>
            <div>Second Term: {term2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}