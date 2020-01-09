import styled from 'styled-components';

  export const HomeWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

  export const HomeContent = styled.div`
    width: calc(100%);
    min-height: 300px;
    text-align: center;
    iframe {
      width: 100%;
      min-height: 300px;
    }
    #mainBanner {
      background-color: #6ec8b1;
      color: #fff;
      background-image: url("/images/c0c36d4cf5ddf65e286f6f0724be5beaa0eaf365.png");
      background-position: center;
      background-size: auto 200%;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-shadow: 0px 1px 8px #00000080;
    }
    .splitWrapRight {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      #hiddenImage {
        display: none;
      }
      @media (min-width: 700px){
        flex-direction: row-reverse;
        .splitDiv {
          width: 50%;
          #hiddenImage {
            display: block;
            width: 100%;
          }
        }

      }
    }
    .splitWrapLeft {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @media (min-width: 700px){
        flex-direction: row;
        .splitDiv {
          width: 50%;
        }
      }
    }
  `;
