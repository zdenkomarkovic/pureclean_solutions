import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

export const metadata = {
  title: "Ciscenje redovno Niš - Pure Clean Solutions",
  description:
    "Mozete se osloniti na nas kada je u pitanju redovno ciscenje. Po unapred dogovorenom rasporedu dolazimo i sredjujemo vas prostor onako kako vi to zahtevate.",
  icons: {
    icon: "/pureclean_logo.png",
    apple: "/pureclean_logo.png",
  },
  keywords: [
    "ciscenje",
    "ciscenje nis",
    "ciscenje kancelarija",
    "ciscenje poslovnog prostora",
    "ciscenje zgrada",
  ],
  alternates: {
    canonical: "https://www.ciscenje-nis.rs/ciscenjeredovno",
  },
};

const ciscenjeRedovno = () => {
  const page = getPageData("Čišćenje redovno");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default ciscenjeRedovno;
