import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Haverjutyun from "../../assets/image/haverjutyun.png";
import Church from "../../assets/image/church.png";
import Kenac from "../../assets/image/kenac.png";
import Photo4 from "../../assets/image/photo4.jpg";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            imageSize={0}
            ImageSrc={null}
            number={"11:00"}
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
            smallText="Այստեղ կարող է լինել Ձեր հասցեն"
          />
          <ThirdPageBlock
            uniqueMargin={50}
            imageSize={147}
            ImageSrc={Haverjutyun}
            number={"12:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
            smallText="Այստեղ կարող է լինել Ձեր հասցեն"
          />
          <ThirdPageBlock
            imageSize={114}
            ImageSrc={Church}
            number={"14:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սուրբ Հռիփսիմե եկեղեցի"
          />
          <ThirdPageBlock
            line={true}
            ImageSrc={Kenac}
            imageSize={159}
            number={"17:00"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Հրաշք Այգի ռեստորան"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          <h3>Սիրով սպասում ենք</h3>
          <hr />
          <img src={Photo4} className="mt-10 rounded-[16px] grayscale" alt="" />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
