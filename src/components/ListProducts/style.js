import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: rgb(0, 10, 10);
  background: linear-gradient(
    90deg,
    rgba(0, 10, 10, 1) 0%,
    rgba(19, 69, 143, 1) 50%,
    rgba(125, 185, 89, 1) 100%
  );
  h1 {
    font-size: 2rem;
    text-align: left;
    margin: 10px;
    font-weight: bold;
  }
  section {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 10px auto;
  }
  @media (min-width: 768px) {
    section {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }
`;
