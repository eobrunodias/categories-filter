import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem 0;

  > div {
    color: black;

    display: flex;
    align-items: center;
  }

  input {
    width: 100%;
    max-width: 89.75rem;
    margin: 0 auto;
    display: block;
    padding: 1rem 0;
    border-radius: 10px;
    position: relative;
    z-index: -1;
  }

  .icon {
    position: absolute;
    left: 245px;
  }
`;
