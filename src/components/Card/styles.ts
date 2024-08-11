import styled from "styled-components";

export const Container = styled.div`
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors["gray-200"]};

    border-radius: 10px;

    .image {
      height: 200px;
      width: 100%;
      border-radius: 10px 10px 0 0;
    }

    .details {
      background-color: ${({ theme }) => theme.colors["white-300"]};
      width: 100%;
      border-radius: 0 0 10px 10px;
      text-align: center;
      height: 220px;

      h1 {
        padding: 0 1rem;
        font-size: 1.125rem;
        text-align: left;
        margin-bottom: 0.5rem;
        display: -webkit-box; /* Cria um contêiner flexível baseado no WebKit */
        -webkit-box-orient: vertical; /* Orienta o contêiner na vertical */
        -webkit-line-clamp: 2; /* Número máximo de linhas a serem exibidas */
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .tags {
        margin-bottom: 1rem;
        max-height: 50px;
        background-color: ${({ theme }) => theme.colors["gray-100"]};
        padding: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      p {
        padding: 0 1rem;
        text-align: left;
        margin-bottom: 0.5rem;
        display: -webkit-box; /* Cria um contêiner flexível baseado no WebKit */
        -webkit-box-orient: vertical; /* Orienta o contêiner na vertical */
        -webkit-line-clamp: 2; /* Número máximo de linhas a serem exibidas */
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
