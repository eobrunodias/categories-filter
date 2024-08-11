import { ReactNode } from "react";
import { Container } from "./styles";

interface CardProps {
  thumb: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function Card({ thumb, title, description, children }: CardProps) {
  return (
    <Container>
      <div className="card-container">
        <img className="image" src={thumb} />
        <div className="details">
          <div className="tags">{children}</div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
}
