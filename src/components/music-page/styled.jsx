import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

export const MusicPagePart = styled(Flexible)`
    position: fixed;
    z-index: 10;
    right: 0;
    top: 65vh;
    width: 196px;
    height: 60px;
    background: #965A00;
    opacity: .8;
    border-radius: 15px;
    color: aliceblue;
    gap: 10px;
    font-family: 'Segoe Script', cursive;
    div {
        text-align: center;
        h4, p {
            font-weight: 100;
        }
        &:nth-child(2) {
            display: flex;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid aliceblue;
            background: #965A00;
        }
        p {
            font-size: 13px;
        }
    }
`