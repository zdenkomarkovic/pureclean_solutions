import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

export const metadata = {
  title: "Generalno Čišćenje Niš - Pure Clean Solutions",
  description:
    "Generalno ciscenje je mnogo vise od redovnog ciscenja. Tada se ciste sve povrsine: podovi, prozori, kuhinjski elementi i tesko dostupna mesta.",
  icons: {
    icon: "/pureclean_logo.png",
  },
  keywords: ["ciscenje", "ciscenje nis"],
};

const GeneralnoCiscenje = () => {
  const page = getPageData("Generalno čišćenje");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default GeneralnoCiscenje;
