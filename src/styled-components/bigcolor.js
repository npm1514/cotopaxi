import styled from 'styled-components';
export const BigColorWrap = styled.div`
  width: calc(100% - 48px);
  padding: 24px;
  min-height: 300px;
  height: max-content;
  background-color: #fff;
  color: #000;
  font-family: 'Helvetica';
  overflow-x: hidden;
  h1 {
    font-family: Helvetica;
    font-size: 24px;
    span {
      font-size: 64px;
    }
  }
  h2 {
    font-size: 18px;
    width: 100%;
    margin: auto;
    span {
      font-weight: bold;
      font-size: 54px;
      letter-spacing: -6px;
    }
  }
  h3 {
    font-size: 18px;
    letter-spacing: -1.5px;
    line-height: 1.5;
    @media (min-width: 700px){
      width: 80%;
      max-width: 800px;
      margin: auto;
    }
  }
  p {
    font-size: 12px;
    line-height: 1.5;
    @media (min-width: 700px){
      width: 80%;
      max-width: 800px;
      margin: auto;
    }
  }
  button {
    background-color: #000;
    color: #fff;
    width: 100%;
    text-align: center;
    padding: 12px;
    font-family: "Nanum Gothic Coding";
  }
  .flexDiv {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (min-width: 700px){
      flex-direction: row;
      justify-content: center;
    }
  }
  #instaBlock {
    width: 100%;
    height: max-content;
    min-height: 900px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/c6599b0108f14cc295135a5ac0ccbc0173e110b6.png");
    background-size: contain;
    @media (min-width: 700px){
      background-image: url("/images/5ad2bb639e20458692ca4d197aa3b753567ee014.png");
    }

  }
`;
