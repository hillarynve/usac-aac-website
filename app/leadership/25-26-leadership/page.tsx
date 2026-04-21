import CardContainer from "./CardContainer";
import LeadershipCard from "./LeadershipCard";
import LongLeadershipCard from "./LongLeadershipCard";
import { fetchSheet } from "@/lib/sheets"
import "./styles.css";
import { Key } from "react";

export default async function Leadership() {
  const boardMembers = await fetchSheet("Leadership");

  const directorsTemp = [
    { name: "Timmy", pfp: "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg", title: "President", tasks: ["task1", "task2", "task2", "task4"]},
    { name: "Timmy", pfp: "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg", title: "President", tasks: ["task1", "task2", "task2", "task4"]},
    { name: "Timmy", pfp: "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg", title: "President", tasks: ["task1", "task2", "task2", "task4"]}
  ];

  return (
    <section className="page-container">
      <h1>Leadership</h1>
      <h2>2023-2026</h2>
      <h3>Meet the Exec Board</h3>
      <CardContainer>
        {boardMembers.map((boardMember: { [x: string]: string; }, index: Key | null | undefined) => (
          <LeadershipCard
            key={index}
            img="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
            name={boardMember["Name"]}
            role={boardMember["Role"]}
            pronouns={boardMember["Pronouns"]}
            year={boardMember["Year"]}
            majors={boardMember["Major(s)"]}
            minors={boardMember["Minor(s)"]}
            email={boardMember["Email"]}
            term1={boardMember["First Term"]}
            term2={boardMember["Second Term"]}
            linkedin={boardMember["Linkedin"]}
          />
        ))}
      </CardContainer>

      <h3 className="card-group-header">Meet the Directors</h3>
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