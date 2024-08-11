import styled from "styled-components";

export const Container = styled.span`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors["purple-200"]};

  display: inline-block;
  padding: 0.3rem 0.5rem;
  color: white;
  font-size: 0.875rem;

  & + & {
    margin-left: 0.5rem;
  }
`;
