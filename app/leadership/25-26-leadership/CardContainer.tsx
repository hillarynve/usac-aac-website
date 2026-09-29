import { ReactNode } from "react";
import "./styles.css";

interface CardContainer {
  children?: ReactNode;
}

/* 
 * This is the container for the exec board cards
 */
export default function CardContainer({ children }: CardContainer) {
  return (
    <div className="card-container">
      {children}
    </div>
  );
}