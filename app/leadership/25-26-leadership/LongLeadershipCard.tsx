import { Key } from 'react';
import "./styles.css";

interface LongLeadershipCardProps {
  img: string;
  name: string;
  role: string;
  tasks: string;
}

export default function LeadershipCard({ img, name, role, tasks }: LongLeadershipCardProps) {
  const tasksList = JSON.parse(tasks);
  return (
    <div className="long-leadership-card">
      <div className="long-leadership-card-top">
        <div className="leadership-card-gradient-overlay"/>
        {/* Photos come from the Google Sheet and can be hosted anywhere, so next/image can't be used */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={name} width="160" height="160" className="leadership-card-pfp" />
        <div className="leadership-card-label">
          <div>{name}</div>
          <div>{role}</div>
        </div>
      </div>
      <div className="long-leadership-card-bottom">
        <h1>Weekly Task:</h1>
        <ul>
          {tasksList.map((task: string, index: Key | null | undefined) => (
            <li key={index}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}