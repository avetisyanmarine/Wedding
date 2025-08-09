import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: DavelAghvor;
    letter-spacing: 1px;
    background-color: #F3F3F3;
  }
  @font-face {
    font-family: ArmAllegrou;
    src: url("/font/ArmAllegroU.ttf");
    font-display: swap;
  }
  @font-face {
    font-family: "DavelAghvor";
    src: url("/font/davel-aghvor.otf");
    font-display: swap;
  }
  h3 {
    font-size: 24px;
  }
  h2 {
    font-size: 36px;
    font-weight: 100;
  }
  h1 {
    font-size: 128px;
    font-family: ArmAllegrou;
    color: #965A00;
    font-weight: 100;
  }
`;
const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 16px;
`;
const Flexible = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyle, Container, Flexible };
