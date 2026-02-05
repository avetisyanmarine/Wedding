import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/gayane.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import Photo3 from "../../assets/image/photo3.jpg";
import Bant from "../../assets/image/bant.png";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Գայանե եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/VyLXsTENTBxsTU987"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Նոր Դվին Ռեստորանային Համալիր"}
            mapSrc={"https://maps.app.goo.gl/35zzYY99W9wpDqpM7"}
          />
        </ForthPagePartContext>
      </Container>
      <div className="relative">
        <img
          src={Photo3}
          alt="Restaurant"
          className="w-full my-10 mt-23 grayscale contrast-125 brightness-105"
        />
        <h1
          style={{
            fontFamily: "SaveTheDate", // Այստեղ համոզվեք, որ տառատեսակի անունը ճիշտ է
            textAlign: "center",
            color: "#1e1e1e",
            fontSize: "2rem", // սա text-4xl-ն է
            fontWeight: "600", // սա font-bold-ն է
            marginTop: "2.5rem", // սա mt-10-ն է
            position: "absolute", // սա absolute-ն է
            top: "-85px", // սա top-3-ն է
            left: "50%", // սա left-1/2-ն է
            transform: "translateX(-50%)", // սա -translate-x-1/2-ն է
            }}
        >
          Save the Date
        </h1>
      </div>

      <div className="text-center my-14">
        <h2>Դետալներ</h2>
        <Flexible className="relative">
          <img src={Bant} className="mx-auto my-8 grayscale" />
          <Flexible className="absolute w-full h-[322px] bg-white/45 font-[600] px-20">
            Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
            հարմարավետ կոշիկներ` պարելու համար:
            <br />
            <br />
            Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
            իրենց բալիկների նկատմամբ:
          </Flexible>
        </Flexible>
      </div>
    </ForthPagePart>
  );
};
