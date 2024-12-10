import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

export const metadata = {
  title: "Čišćenje Zgrada Niš - Pure Clean Solutions",
  description:
    "Pure Clean Solutions obavlja profesionalne usluge ciscenja zgrada. U to spada ciscenje zajednickih prostorija, hodnika, stepenista, liftova i ulaza!",
  icons: {
    icon: "/pureclean_logo.png",
    apple: "/pureclean_logo.png",
  },
  keywords: ["ciscenje", "ciscenje nis", "ciscenje zgrada"],
  alternates: {
    canonical: "https://www.ciscenje-nis.rs/ciscenjezgrada",
  },
};

const ciscenjeZgrada = () => {
  const page = getPageData("Čišćenje stambenih zgrada");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default ciscenjeZgrada;
