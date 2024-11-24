import CardsList from "../../../components/cardList/page";
import Hero from "../../../components/hero/page";
import Kontakt from "../../../components/kontakt/page";
import ButtonToTop from "../../../components/buttonToTop/page";

const Home = () => {
  return (
    <div>
      <Hero />
      <ButtonToTop />
      <CardsList />
      <Kontakt />
    </div>
  );
};
export default Home;
