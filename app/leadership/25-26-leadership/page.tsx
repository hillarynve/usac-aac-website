import CardContainer from "./CardContainer";
import LeadershipCard from "./LeadershipCard";
import LongLeadershipCard from "./LongLeadershipCard";
import { fetchSheet } from "@/lib/sheets"
import "./styles.css";
import { Key } from "react";

export default async function Leadership() {
  const boardMembers = await fetchSheet("Leadership");

  const directorsTemp = [
    { name: "Timmy", pfp: "blank", title: "President", tasks: ["task1", "task2", "task2", "task4"]},
    { name: "Timmy", pfp: "blank", title: "President", tasks: ["task1", "task2", "task2", "task4"]},
    { name: "Timmy", pfp: "blank", title: "President", tasks: ["task1", "task2", "task2", "task4"]}
  ];

  return (
    <section className="page-container">
      <h1 className="text-3xl font-bold text-center">2025-2026 Leadership</h1>
      <h2 className="card-group-header text-xl font-bold">Meet the Exec Board</h2>
      <CardContainer>
        {boardMembers.map((boardMember: { [x: string]: string; }, index: Key | null | undefined) => (
          <LeadershipCard
            key={index}
            img="blank"
            name={boardMember["Name"]}
            role={boardMember["Role"]}
            pronouns={boardMember["Pronouns"]}
            year={boardMember["Year"]}
            majors={boardMember["Major(s)"]}
            minors={boardMember["Minor(s)"]}
            email={boardMember["Email"]}
            term1={boardMember["First Term"]}
            term2={boardMember["Second Term"]}
          />
        ))}
      </CardContainer>

      <h2 className="card-group-header text-xl font-bold">Meet the Directors</h2>
      <CardContainer>
        {directorsTemp.map((director, index) => (
          <LongLeadershipCard
            key={index}
            img={director.pfp}
            name={director.name}
            role={director.title}
            tasks={director.tasks}
          />
        ))}
      </CardContainer>
    </section>
  );
}