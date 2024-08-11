import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors["purple-500"]};
  color: ${({ theme }) => theme.colors["white-100"]};

  grid-area: header;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    max-width: 89.75rem;
    margin: 0 auto;
  }
`;
