import { SecondPagePart, GridDiv } from "./styled";
import { Container, Flexible } from "../../GlobalStyle";
import { useEffect, useState } from "react";
import Photo2 from "../../assets/image/photo2.jpg";

export const SecondPage = () => {
  const weddingDate = new Date(2026, 2, 1, 0, 0, 0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");
  
  return (
    <SecondPagePart className="my-10">
      <Container>
        <div>
          <h2 className="mb-10" data-aos="zoom-in" data-aos-offset="400">Միջոցառմանը մնաց</h2>
          <GridDiv>
            <Flexible data-aos="flip-up" data-aos-duration="900" data-aos-delay="300">
              <h2>{formatNumber(timeLeft.days)}</h2>
              <p>Օր</p>
            </Flexible>
            <Flexible data-aos="flip-up" data-aos-duration="900" data-aos-delay="450">
              <h2>{formatNumber(timeLeft.hours)}</h2>
              <p>Ժամ</p>
            </Flexible>
            <Flexible data-aos="flip-up" data-aos-duration="900" data-aos-delay="600">
              <h2>{formatNumber(timeLeft.minutes)}</h2>
              <p>Րոպե</p>
            </Flexible>
            <Flexible className="uniqueBorder" data-aos="flip-up" data-aos-duration="900" data-aos-delay="750">
              <h2>{formatNumber(timeLeft.seconds)}</h2>
              <p>Վրկ</p>
            </Flexible>
          </GridDiv>
        </div>
      </Container>
      <div className="mt-10 mb-15">
        <h2
          className="mb-10"
          data-aos="fade-up"
          data-aos-offset="400"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          Սիրելի հյուրեր
        </h2>
        <Flexible className="w-full h-[147px] bg-white/45 px-4 font-[600]">
          <p>
            Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր հարսանյաց հանդիսությանը և
            կիսելու մեր ուրախությունը։
          </p>
        </Flexible>
      </div>
      <img
        src={Photo2}
        className="w-full grayscale contrast-125 brightness-105"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="600"
      />
    </SecondPagePart>
  );
};
