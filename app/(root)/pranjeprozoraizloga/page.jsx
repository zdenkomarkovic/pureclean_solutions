import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

export const metadata = {
  title: "Pranje prozora i izloga - Pure Clean Solutions",
  description:
    "Pure Clean Solutions obavlja uslugu pranja prozora i izloga. Cisti i sjajni izlozi i prozori ostavljaju snazan utisak i ulepsavaju svaki prostor.",
  icons: {
    icon: "/pureclean_logo.png",
  },
  keywords: ["ciscenje", "ciscenje nis", "pranje prozora", "pranje izloga"],
};

const pranjeProzoraIzloga = () => {
  const page = getPageData("Pranje prozora i izloga");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default pranjeProzoraIzloga;
