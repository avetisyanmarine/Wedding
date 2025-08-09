import styled from "styled-components";
import { Flexible } from "../../GlobalStyle";

const ThirdPagePart = styled.div`
    h2 {
        width: fit-content;
        margin: auto;
    }
`
const ThirdPagePartContext = styled.div`
overflow: hidden;
   
`
const ThirdPagePartMini = styled.div`
    text-align: center;
    h3 {
        font-family: ArmAllegrou;
        letter-spacing: 9px;
        font-weight: 200;
        margin: 30px 0;
        &:nth-child(1) {
            color: #965A00;
            margin-top: 120px;
        }
    }
    hr {
        width: 195px;
        margin: auto;
        background: #965A00;
        border: 0;
        height: 2px;
        border-radius: 50px;
    }
`
const ThirdPagePartCalendar = styled(Flexible)`
    flex-wrap: wrap;
    gap: 10px;
    div {
        text-align: center;
        font-size: 27px;
        flex: 1 0 calc(100% / 7 - 10px);
    }
   .special {
    position: relative;
        &::after {
            content: "";
            width: 60px;
            height: 60px;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-image: url('src/assets/vectors/heart.svg');
            background-size: cover;
        }
    }

`

export { ThirdPagePart, ThirdPagePartContext, ThirdPagePartMini, ThirdPagePartCalendar }