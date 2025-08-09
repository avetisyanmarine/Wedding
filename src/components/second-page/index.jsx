import { SecondPagePart, SecondPagePartContext } from "./styled"
import { Container } from "../../GlobalStyle"
import Flowers from "../../assets/image/flowers2.png"

export const SecondPage = () => {
    return (
        <SecondPagePart>
            <Container>
                <SecondPagePartContext>
                    <div>
                        <img loading="lazy" src={Flowers} alt="Flowers" />
                        <h4>
                            Սիրով հրավիրում ենք Ձեզ 
                            <br />
                            մասնակցելու մեր կյանքի կարևոր և 
                            <br />
                            հիշարժան օրվան։

                        </h4>
                    </div>
                </SecondPagePartContext>
                <h2>19.09.2025</h2>
            </Container>
        </SecondPagePart>
    )
}