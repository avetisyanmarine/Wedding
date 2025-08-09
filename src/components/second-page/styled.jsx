import styled from "styled-components";

const SecondPagePart = styled.div`
    div {
        text-align: center;
    }
    h2 {
        color: #965A00;
        font-size: 48px;
        font-weight: 600;
        font-family: ArmAllegrou;
        letter-spacing: 10px;
    }
`
const SecondPagePartContext = styled.div`
    div {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        img {
            object-fit: cover;
        }
        h4 {
            position: absolute;
            font-size: 22px;
        }
    }
`
export { SecondPagePart, SecondPagePartContext }