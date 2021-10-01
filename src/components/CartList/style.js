import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: rgb(46, 76, 198);
  background: linear-gradient(
    340deg,
    rgba(46, 76, 198, 1) 5%,
    rgba(164, 244, 121, 1) 59%,
    rgba(10, 47, 7, 1) 100%
  );

  h1 {
    font-size: 2rem;
    text-align: left;
    padding: 10px;
    font-weight: bold;
    color: darkturquoise;
    background-color: rgb(46, 76, 198, 0.3);
  }
  p {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 10px;
    text-align: right;
    color: lightpink;
    background-color: rgb(171, 16, 16, 0.3);
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
    P {
      color: darkred;
    }
  }
`;
