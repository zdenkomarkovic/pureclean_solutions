import CardsList from "../../../components/cardList/page";
import Hero from "../../../components/hero/page";
import Kontakt from "../../../components/kontakt/page";
import ButtonToTop from "../../../components/buttonToTop/page";
import VideoCard from "../../../components/videoCard/page";
import Head from "next/head";
import CiscenjeNis from "../../../components/ciscenjeNis/page";

// export const metadata = {
//   title: "Čišćenje Niš - Pure Clean Solutions",
//   description:
//     "Pure Clean Solutions obavlja profesionalne usluge ciscenja za stanove, kuce, kancelarije i poslovne prostore, posle nas sve blista!",
//   icons: {
//     icon: "/pureclean_logo.png",
//   },
//   keywords: [
//     "ciscenje",
//     "ciscenje nis",
//     "dubinsko pranje",
//     "dubinsko pranje automobila",
//     "ciscenje kancelarija",
//     "ciscenje poslovnog prostora",
//     "ciscenje zgrada",
//   ],
// };
const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <ButtonToTop />
        <CiscenjeNis />
        <CardsList />
        <VideoCard />
      </div>
    </>
  );
};
export default Home;
