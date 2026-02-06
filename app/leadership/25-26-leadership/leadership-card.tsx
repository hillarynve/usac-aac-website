interface LeadershipCardProps {
  img: string;
  name: string;
  title: string;
}

export default function LeadershipCard({ img, name, title }: LeadershipCardProps) {
  return (
      <div className="leadership-card">
        <img src={img} />
        {name}
        <br />
        {title}
      </div>
  );
}