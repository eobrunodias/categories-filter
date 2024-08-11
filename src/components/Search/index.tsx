import { Container } from "./styles";
import { GoSearch } from "react-icons/go";

export function Search() {
  return (
    <Container>
      <div>
        <GoSearch className="icon" />
      </div>
      <input type="text" name="search" id="search" />
    </Container>
  );
}
