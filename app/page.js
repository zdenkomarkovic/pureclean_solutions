import ButtonToTop from "@/components/buttonToTop/page";
import Ciscenje from "@/components/ciscenje/page";
import Hero from "@/components/hero/page";
import Kontakt from "@/components/kontakt/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <ButtonToTop />
      <Ciscenje />
      <Kontakt />
    </div>
  );
}
