import MainPhoto from "../../assets/image/mainPhoto.jpg"
import { Container, Flexible } from "../../GlobalStyle"
import Ring from "../../assets/vectors/ring.svg"
import { FirstPagePart, FirstPagePartContext, GridDiv } from "./styled"
import { useEffect, useState } from "react";

export const FirstPage = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const weddingDate = new Date(2025, 8, 19, 10, 0, 0);

        const interval = setInterval(() => {
            const now = new Date();
            const diff = weddingDate - now;

            if (diff <= 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <FirstPagePart>
            <img src={MainPhoto} />
            <Container>
                <FirstPagePartContext>
                    <h2>հարսանյաց  <br /> հրավեր</h2>
                    <Flexible className="uniqueDiv">
                        <h1>Անդո</h1>
                        <p className="text-[89px]">&</p>
                        <h1 className="uniqueH1">Ռոզա</h1>
                    </Flexible>
                    <div className="w-full absolute bottom-9">
                        <h2 className="uniqueH2 ">Մնաց</h2>
                        <GridDiv>
                            <Flexible>
                                <h2>{timeLeft.days}</h2>
                                <p>Օր</p>
                            </Flexible>
                            <Flexible>
                                <h2>{timeLeft.hours}</h2>
                                <p>Ժամ</p>
                            </Flexible>
                            <Flexible>
                                <h2>{timeLeft.minutes}</h2>
                                <p>Րոպե</p>
                            </Flexible>
                            <Flexible className="uniqueBorder">
                                <h2>{timeLeft.seconds}</h2>
                                <p>Վայրկյան</p>
                            </Flexible>
                        </GridDiv>
                    </div>
                </FirstPagePartContext>
            </Container>
        </FirstPagePart>
    )
}