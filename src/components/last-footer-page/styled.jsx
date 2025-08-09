import styled from "styled-components";

const LastFooterPagePart = styled.div`
    background: #965A00;
    color: aliceblue;
`
const LastFooterPagePartContext = styled.div`
    font-size: 18px;
    > p {
        margin-top: 48px;
    }
    div {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        div {
            img {
                padding: 11px;
                border-right: 2px solid aliceblue;
                /* border-radius: 50px; */
            }
            div {
                display: block;
            }
        }
   }
     a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        transition: 0.2s;
    }

    a:hover {
        text-decoration: underline;
        opacity: 0.8;
    }
`
export { LastFooterPagePart, LastFooterPagePartContext }