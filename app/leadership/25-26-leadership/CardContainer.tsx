import { ReactNode } from "react";
import "./styles.css";

interface CardContainer {
  children?: ReactNode;
}

export default function CardContainer({ children }: CardContainer) {
  return (
    <div className="card-container">
      {children}
    </div>
  );
}