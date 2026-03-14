import { useEffect } from "react";
import { FirstPage } from "./components/first-page";
import { ForthPage } from "./components/forth-page";
import { LastFooterPage } from "./components/last-footer-page";
import { MusicPage } from "./components/music-page";
import { SecondPage } from "./components/second-page";
import { ThirdPage } from "./components/third-page";
import AOS from "aos";
import "aos/dist/aos.css";
import { BackToTop } from "./components/top-button";
import { Helmet } from "react-helmet";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Մեր Միջոցառումը</title>
        <meta property="og:title" content="Մեր Միջոցառումը" />
        <meta
          property="og:description"
          content="Դու հրավիրված ես մեր միջոցառմանը"
        />
        <meta property="og:image" content="https://example.com/invite.jpg" />{" "}
        <meta property="og:url" content="https://example.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Մեր Միջոցառումը" />
        <meta
          name="twitter:description"
          content="Դու հրավիրված ես մեր միջոցառմանը"
        />
        <meta name="twitter:image" content="https://example.com/invite.jpg" />
      </Helmet>

      <MusicPage />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
      <LastFooterPage />
      <BackToTop />
    </>
  );
}

export default App;
