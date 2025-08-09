import styled from "styled-components";
import { Flexible } from "../../../GlobalStyle";

export const ThirdPageBlockPart = styled(Flexible)`
    justify-content: start;
    gap: 40px;
    margin-top: 120px;
`
export const ThirdPageBlockPartSvg = styled.div`
    position: relative; 
    img {
        width: 53px;
        height: 53px;
        max-width: none;
    }
    ${({ line }) =>
        !line &&
        `
      &::before {
        content: "";
        position: absolute;
        top: 73px; 
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 102px;
        background: #965A00;
        border-radius: 50px;
      }
    `}

`
export const ThirdPageBlockPartContext = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 12px;
`
