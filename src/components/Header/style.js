import styled from "styled-components";

export const Container = styled.div`
  background-color: lightblue;
  width: 99vw;
  height: 95px;
  padding-top: 20px;
  display: flex;
  a {
    font-size: 18px;
    width: 50%;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
      padding: 0 10px;
    }
    span {
      border-radius: 25px;
      background-color: red;
      color: white;
      font-weight: bold;
      width: 20px;
      height: 20px;
      text-align: center;
    }
  }
  @media (min-width: 768px) {
    height: 100px;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    a {
      width: 30%;
      font-size: 25px;
      p {
      }
      span {
        font-size: 22px;
        width: 25px;
        height: 25px;
      }
    }
  }
`;
