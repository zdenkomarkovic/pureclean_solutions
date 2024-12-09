import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

export const metadata = {
  title: "Dubinsko Pranje Niš - Pure Clean Solutions",
  description:
    "Pure Clean Solutions nudi profesionalno dubinsko pranje namestaja u Nisu. Ocistite i osvezite vas namestaj uz nase efikasne i bezbedne metode ciscenja!",
  icons: {
    icon: "/pureclean_logo.png",
  },
  keywords: ["dubinsko pranje", "dubinsko pranje namestaja"],
};

const DubinskoPranjeNamestaja = () => {
  const page = getPageData("Dubinsko pranje nameštaja");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default DubinskoPranjeNamestaja;
