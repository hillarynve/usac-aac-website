import CardContainer from "./CardContainer";
import CardCarousel from "./CardCarousel";
import LeadershipCard from "./LeadershipCard";
import LongLeadershipCard from "./LongLeadershipCard";
import { fetchSheet } from "@/lib/sheets"
import "./styles.css";
import { Key } from "react";

export default async function Leadership() {
  const boardMembers = await fetchSheet("leadership_exec_20252026");
  const directors = await fetchSheet("leadership_directors_20252026")

  return (
    <section className="page-container">
      <h1>Leadership</h1>
      <h2>2025-2026</h2>
      <h3>Meet the Exec Board</h3>
      <CardContainer>
        {boardMembers.map((boardMember: { [x: string]: string; }, index: Key | null | undefined) => (
          <LeadershipCard
            key={index}
            img="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
            name={boardMember.name}
            role={boardMember.role}
            pronouns={boardMember.pronouns}
            year={boardMember.year}
            majors={boardMember.majors}
            minors={boardMember.minors}
            email={boardMember.email}
            term1={boardMember.first_term}
            term2={boardMember.second_term}
            linkedin={boardMember.linkedin}
          />
        ))}
      </CardContainer>

      <h3 className="card-group-header">Meet the Directors</h3>
      <CardCarousel>
        {directors.map((director: { [x: string]: string }, index: Key | null | undefined) => (
          <LongLeadershipCard
            key={index}
            img="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
            name={director.name}
            role={director.role}
            tasks={director.tasks}
          />
        ))}
      </CardCarousel>
    </section>
  );
}