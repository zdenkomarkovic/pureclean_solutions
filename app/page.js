import ButtonToTop from "@/components/buttonToTop/page";
import Ciscenje from "@/components/ciscenje/page";
import CiscenjePosleGradjevinskihRadova from "@/components/ciscenjePosleGradjevinskihRadova/page";
import DubinskoPranje from "@/components/dubinskoPranje/page";
import GeneralnoCiscenje from "@/components/generalnoCiscenje/page";
import Hero from "@/components/hero/page";
import Kontakt from "@/components/kontakt/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <ButtonToTop />
      <Ciscenje />
      <GeneralnoCiscenje />
      <CiscenjePosleGradjevinskihRadova />
      <DubinskoPranje />
      <Kontakt />
    </div>
  );
}
