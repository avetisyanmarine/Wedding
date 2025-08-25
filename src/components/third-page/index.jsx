import { ThirdPagePart, ThirdPagePartCalendar, ThirdPagePartContext, ThirdPagePartMini } from "./styled"
import { Container } from "../../GlobalStyle"
import SvgRing from "../../assets/vectors/wedding-rings2.svg"
import SvgChurch from "../../assets/vectors/church.svg"
import SvgCouple from "../../assets/vectors/couple.svg"
import { ThirdPageBlock } from "./third-page-block"


export const ThirdPage = () => {
    return (
        <ThirdPagePart>
            <Container>
                <h2>Ծրագիր</h2>
                <ThirdPagePartContext>
                    <ThirdPageBlock uniqueMargin={50} ImageSrc={SvgRing} number={'12:00'} bigText="ՀԱՐՍԻ ՏՈՒՆ" smallText="Հ․Թումանյան փողոց, 42 տուն" />
                    <ThirdPageBlock ImageSrc={SvgChurch} number={'14:30'} bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ" smallText="Սուրբ Հռիփսիմե եկեղեցի" />
                    <ThirdPageBlock ImageSrc={SvgRing} number={'16:00'} bigText="ՓԵՍԱՅԻ ՏՈՒՆ" smallText="Մովսես Խորենացի փողոց, 7 տուն" />
                    <ThirdPageBlock line={true} ImageSrc={SvgCouple} number={'17:30'} bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ" smallText="Արև Ռեստորանային Համալիր" />
                </ThirdPagePartContext>
                <ThirdPagePartMini>
                    <h3>Սիրով սպասում ենք</h3>
                    <hr />
                    <h3>Պահպանիր Օրը</h3>
                </ThirdPagePartMini>
                <ThirdPagePartCalendar>
                    {[...Array(35)].map((_, i) =>
                        i > 1 && i <= 31 ? <div className={i - 1 == 19 ? "special" : ""}>{i - 1}</div> : <div></div>
                    )}
                </ThirdPagePartCalendar>
            </Container>
        </ThirdPagePart>
    )
}