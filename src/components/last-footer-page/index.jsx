import { Container } from "../../GlobalStyle";
import { LastFooterPagePart, LastFooterPagePartContext } from "./styled";
import PhoneSvg from "../../assets/vectors/Phone.svg";
// import {Insta} from "../../assets/vectors/instagram.svg";

export const LastFooterPage = () => {
  return (
    <LastFooterPagePart className="bg-[#1e1e1e]/55">
      <Container>
        <LastFooterPagePartContext>
          <div>
            <div>
              {/* <img loading="lazy" src={Insta} /> */}
              <div>
                <p>Փեսա</p>
                <p>Հարս</p>
              </div>
            </div>
            <div>
              <img loading="lazy" src={PhoneSvg} />
              <div>
                <p>
                  <a href="tel:043090996"> 043-09-09-96</a>
                </p>
                <p>
                  <a href="tel:094104015"> 094-10-40-15</a>
                </p>
              </div>
            </div>
          </div>
          <p>Պատրաստվել է <a href="https://www.instagram.com/avetisyaan.m/">ՈՒՍԱՆՈՂՈՒՀԻՆԵՐԻ</a> կողմից</p>
        </LastFooterPagePartContext>
      </Container>
    </LastFooterPagePart>
  );
};
