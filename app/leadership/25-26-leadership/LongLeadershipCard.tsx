import { Fragment } from 'react';
import "./styles.css";

interface LongLeadershipCardProps {
  img: string;
  name: string;
  title: string;
  tasks: string[];
}

export default function LeadershipCard({ img, name, title, tasks }: LongLeadershipCardProps) {
  return (
    <div className="long-leadership-card">
      <div className="long-leadership-card-top">
        <img src={img} width="160" height="160" className="leadership-card-pfp" />
        <div className="leadership-card-label">
          <div>{name}</div>
          <div>{title}</div>
        </div>
      </div>
      <div className="long-leadership-card-bottom">
        <div>Weekly Task:</div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}