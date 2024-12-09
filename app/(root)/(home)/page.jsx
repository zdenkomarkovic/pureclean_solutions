import CardsList from "../../../components/cardList/page";
import Hero from "../../../components/hero/page";
import Kontakt from "../../../components/kontakt/page";
import ButtonToTop from "../../../components/buttonToTop/page";
import VideoCard from "../../../components/videoCard/page";
import Head from "next/head";
import CiscenjeNis from "../../../components/ciscenjeNis/page";

const Home = () => {
  return (
    <>
      {/* <Head>
        <title>Ciscenje - Najbolje usluge u gradu</title>
        <meta
          name="description"
          content="Nudimo profesionalne usluge ciscenja za stanove, kuce, kancelarije i poslovne prostore"
        />
        <meta
          name="keywords"
          content="ciscenje, generalno ciscenje, dubinsko ciscenje, odrzavanje zgrada, dubinsko pranje automobila, dubinsko pranje"
        />
        <meta name="robots" content="index, folow" />
        <meta
          property="og:title"
          content="Ciscenje - Najbolje usluge u gradu"
        />
        <meta
          property="og:description"
          content="Nudimo profesionalne usluge ciscenja za stanove, kuce, kancelarije i poslovne prostore"
        />
        <meta property="og:image" content="/ciscenje.jpg" />
        <meta property="og:url" content="https://www.purecleansolutions.rs" />
      </Head> */}
      <div>
        <Hero />
        <ButtonToTop />
        <CiscenjeNis />
        <CardsList />
        <VideoCard />
        <Kontakt />
      </div>
    </>
  );
};
export default Home;
