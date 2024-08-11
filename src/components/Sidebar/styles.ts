import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors["purple-400"]};
  color: ${({ theme }) => theme.colors["white-100"]};

  grid-area: sidebar;
`;
