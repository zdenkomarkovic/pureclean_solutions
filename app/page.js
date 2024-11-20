import ButtonToTop from "@/components/buttonToTop/page";
import Ciscenje from "@/components/ciscenje/page";
import Hero from "@/components/hero/page";
import Palamudjenje from "@/components/palamudjenje/page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <ButtonToTop />
      <Ciscenje />

      <Palamudjenje />
    </div>
  );
}
