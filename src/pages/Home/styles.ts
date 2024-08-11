import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 13rem 1fr;
  grid-template-rows: 7rem 8rem auto 3.5rem;

  height: 100vh;

  grid-template-areas:
    "sidebar header"
    "sidebar search"
    "sidebar content"
    "sidebar footer";
`;

export const Content = styled.div`
  grid-area: content;
  overflow-y: scroll;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: repeat(4, minmax(15rem, 22rem));
  max-width: 1500px;
  margin: 0 auto;

  padding: 2rem;
  gap: 1rem;
`;
