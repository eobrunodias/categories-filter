import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors["purple-500"]};
  color: ${({ theme }) => theme.colors["white-100"]};
  grid-area: footer;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;

    max-width: 89.75rem;
    margin: 0 auto;

    a {
      color: ${({ theme }) => theme.colors["gray-100"]};
    }
  }
`;
