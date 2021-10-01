import styled from "styled-components";

export const Container = styled.div`
  border: 10px ridge #934730;
  border-radius: 25px;
  width: 95%;
  background-color: #bfa217;
  margin: 0 auto;
  height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h3,
  h4 {
    font-size: 28px;
    padding: 10px;
    width: 100%;
    height: 85px;
    color: darkturquoise;
    background-color: rgb(46, 76, 198, 0.3);
  }
  h4 {
    margin-top: 10px;
    margin-bottom: -60px;
  }
  img {
    border-radius: 10px;
    width: 150px;
    height: 150px;
  }
  @media (min-width: 425px) {
    width: 327px;
  }
  @media (min-width: 768px) {
    width: 290px;
  }
`;
