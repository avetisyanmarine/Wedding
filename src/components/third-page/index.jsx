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
            number={"13:00"}
            bigText="ՓԵՍԱՅԻ ՏՈՒՆ"
            smallText="գ․ Մուսալեռ Տիգրան Մեծ 19/2"
          />
          <ThirdPageBlock
            uniqueMargin={50}
            imageSize={147}
            ImageSrc={Haverjutyun}
            number={"13:30"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
            smallText="ք․ Էջմիածին, Չարենց 4/37"
          />
          <ThirdPageBlock
            imageSize={114}
            ImageSrc={Church}
            number={"14:30"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սուրբ Գայանե եկեղեցի"
          />
          <ThirdPageBlock
            line={true}
            ImageSrc={Kenac}
            imageSize={159}
            number={"17:30"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Նոր Դվին Ռեստորան"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          <h3>Սիրով սպասում ենք</h3>
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
