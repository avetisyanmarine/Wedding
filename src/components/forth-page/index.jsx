import { Container } from "../../GlobalStyle"
import { ForthPageBlock } from "./fortg-page-block"
import { ForthPagePart, ForthPagePartContext, ForthPagePartContextLast } from "./styled"
import Church from "../../assets/image/church.jpg"
import Restaurant from "../../assets/image/restaurant.jpg"
import Flower from "../../assets/image/flower1.png"

export const ForthPage = () => {
    return (
        <ForthPagePart>
            <Container>
                <ForthPagePartContext>
                    <ForthPageBlock ImageSrc={Church} bigText={"Սուրբ Հռիփսիմե եկեղեցի"} mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.89020152337!2d44.3094668!3d40.1669983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a95df45ee7879%3A0x5edc387da55a163a!2z1Y3VuNaC1oDVoiDVgNW81avWg9W91avVtNWlINWl1a_VpdWy1aXWgdWr!5e0!3m2!1shy!2sam!4v1752148881848!5m2!1shy!2sam"} />
                    <ForthPageBlock ImageSrc={Restaurant} bigText={"Արև Ռեստորանային Համալիր"} mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800.4218804309901!2d44.133016700000006!3d40.14342473475587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aef3c8197e16d%3A0xdfa4b711ca144494!2sArev%20Hall!5e0!3m2!1shy!2sam!4v1752149091046!5m2!1shy!2sam"} />
                </ForthPagePartContext>
                <ForthPagePartContextLast>
                    <img loading="lazy" src={Flower} />
                    <h2>Սպասում ենք Ձեզ <br /> Մեր Հարսանիքին</h2>
                </ForthPagePartContextLast>
            </Container>
        </ForthPagePart>
    )
}