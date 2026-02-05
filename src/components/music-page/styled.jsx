import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

export const MusicPagePart = styled(Flexible)`
  position: fixed;
  z-index: 10;
  right: 20px;
  top: 5vh;
  width: 60px;
  height: 60px;
  background: #1e1e1e;
  opacity: 0.8;
  border-radius: 15px;
  color: aliceblue;
  gap: 10px;
  div {
    text-align: center;
    h4,
    p {
      font-weight: 100;
    }
    &:nth-child(2) {
      display: flex;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid aliceblue;
    }
    p {
      font-size: 13px;
    }
  }
`;
