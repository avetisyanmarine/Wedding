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
import AttendanceGuests from "./components/AttendanceGuests";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <>
      <Helmet>
        <title>Հարսանյաց հրավեր</title>
        <meta property="og:title" content="Հարսանյաց հրավեր" />
        <meta
          property="og:description"
          content="Դու հրավիրված ես մեր միջոցառմանը"
        />
        <meta
          property="og:image"
          content="https://andranik-lilit.vercel.app/wedding.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Հարսանյաց հրավեր" />
        <meta
          name="twitter:description"
          content="Դու հրավիրված ես մեր միջոցառմանը"
        />
        <meta
          name="twitter:image"
          content="https://andranik-lilit.vercel.app/wedding.jpg"
        />
      </Helmet>

      <MusicPage />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <ForthPage />
      <AttendanceGuests />
      <LastFooterPage />
      <BackToTop />
    </>
  );
}

export default App;
