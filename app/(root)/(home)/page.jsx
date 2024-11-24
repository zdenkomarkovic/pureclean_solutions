import CardsList from "../../../components/cardList/page";
import Hero from "../../../components/hero/page";
import Kontakt from "../../../components/kontakt/page";
import ButtonToTop from "../../../components/buttonToTop/page";
import VideoCard from "../../../components/videoCard/page";

const Home = () => {
  return (
    <div>
      <Hero />
      <ButtonToTop />
      <CardsList />
      <VideoCard />
      <Kontakt />
    </div>
  );
};
export default Home;
