import Link from "next/link";
import CardContainer from "./CardContainer";
import LeadershipCard from "./LeadershipCard";
import LongLeadershipCard from "./LongLeadershipCard";
import "./styles.css";

export default function Leadership() {
  const boardMembers = [
    { name: "Timmy", pfp: "blank", title: "President", pronouns: "He/Him", year: "Fourth", majors: ["Political Science", "Sociology"], minors: ["Biology"], email: "timmy@gmail.com" },
    { name: "Timmy", pfp: "blank", title: "President", pronouns: "He/Him", year: "Fourth", majors: ["Political Science", "Sociology"], minors: ["Biology"], email: "timmy@gmail.com"  },
    { name: "Timmy", pfp: "blank", title: "President", pronouns: "He/Him", year: "Fourth", majors: ["Political Science", "Sociology"], minors: ["Biology"], email: "timmy@gmail.com"  },
    { name: "Timmy", pfp: "blank", title: "President", pronouns: "He/Him", year: "Fourth", majors: ["Political Science", "Sociology"], minors: ["Biology"], email: "timmy@gmail.com"  },
    { name: "Timmy", pfp: "blank", title: "President", pronouns: "He/Him", year: "Fourth", majors: ["Political Science", "Sociology"], minors: ["Biology"], email: "timmy@gmail.com"  },
    { name: "Timmy", pfp: "blank", title: "President", pronouns: "He/Him", year: "Fourth", majors: ["Political Science", "Sociology"], minors: ["Biology"], email: "timmy@gmail.com"  }
  ];

  const directors = [
    { name: "Timmy", pfp: "blank", title: "President", tasks: ["task1", "task2", "task2", "task4"]},
    { name: "Timmy", pfp: "blank", title: "President", tasks: ["task1", "task2", "task2", "task4"]},
    { name: "Timmy", pfp: "blank", title: "President", tasks: ["task1", "task2", "task2", "task4"]}
  ];

  return (
    <section className="page-container">
      <h1 className="text-3xl font-bold text-center">2025-2026 Leadership</h1>
      <h2 className="card-group-header text-xl font-bold">Meet the Exec Board</h2>
      <CardContainer>
        {boardMembers.map((boardMember, index) => (
          <LeadershipCard
            key={index}
            img={boardMember.pfp}
            name={boardMember.name}
            title={boardMember.title}
            pronouns={boardMember.pronouns}
            year={boardMember.year}
            majors={boardMember.majors}
            minors={boardMember.minors}
            email={boardMember.email}
          />
        ))}
      </CardContainer>

      <h2 className="card-group-header text-xl font-bold">Meet the Directors</h2>
      <CardContainer>
        {directors.map((director, index) => (
          <LongLeadershipCard
            key={index}
            img={director.pfp}
            name={director.name}
            title={director.title}
            tasks={director.tasks}
          />
        ))}
      </CardContainer>
    </section>
  );
}