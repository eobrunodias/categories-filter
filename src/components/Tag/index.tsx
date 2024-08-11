import { Container } from "./styles";

interface TitleProps {
  title: string;
}

export function Tag({ title }: TitleProps) {
  return <Container>{title}</Container>;
}
