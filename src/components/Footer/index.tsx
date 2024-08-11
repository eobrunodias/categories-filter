import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div>
        <div>
          <p>footer</p>
        </div>
        <p>
          by |{" "}
          <a href="https://www.github.com/eobrunodias" target="_blank">
            eobrunodias 💻
          </a>
        </p>
      </div>
    </Container>
  );
}
