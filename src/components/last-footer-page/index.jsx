import { Container } from "../../GlobalStyle"
import { LastFooterPagePart, LastFooterPagePartContext } from "./styled"
import PhoneSvg from "../../assets/vectors/Phone.svg"

export const LastFooterPage = () => {
    return (
        <LastFooterPagePart>
            <Container>
                <LastFooterPagePartContext>
                    <div>
                        <div>
                            <div>
                                <p>
                                    Փեսա
                                </p>
                                <p>
                                    Հարս
                                </p>
                            </div>
                        </div>
                        <div>
                            <img loading="lazy" src={PhoneSvg} />
                            <div>
                                <p> Սեղմիր՝
                                    <a href="tel:077215009"> 077-21-50-09</a>
                                </p>
                                <p> Սեղմիր՝
                                    <a href="tel:077149983"> 077-14-99-83</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <p>Պատրաստվել է ՀարսնաՔրոջ կողմից</p>
                </LastFooterPagePartContext>
            </Container>
        </LastFooterPagePart>
    )
}