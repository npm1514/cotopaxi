import styled from 'styled-components';
export const ProductCardWrap = styled.div`
  width: calc(100% - 48px);
  padding: 24px;
  min-height: 300px;
  height: max-content;
  background-color: #fff;
  color: #000;
  font-family: 'Nanum Gothic Coding', monospace;
  font-size: 24px;
  margin-bottom: 24px;
  img {
    width: 100%;
  }
  button {
    background-color: #000;
    color: #fff;
    width: 100%;
    text-align: center;
    padding: 12px;
    font-family: "Nanum Gothic Coding";
  }
  .product_h2 {
    font-size: 22px;
  }
  .product_h3 {
    margin: 8px 0;
    font-size: 16px;
  }
  p {
    text-align: left;
    line-height: 2;
    marginTop: 0;
  }
  @media (min-width: 700px){
    width: 300px;
    margin: 12px;
  }
`;

export const TagCircle = styled.div`
  background-color: blue;
  border-radius: 50px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 12px;
`;
