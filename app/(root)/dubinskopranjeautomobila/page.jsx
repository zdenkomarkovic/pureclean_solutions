import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

export const metadata = {
  title: "Dubinsko Pranje Automobila Niš - Pure Clean Solutions",
  description:
    "Pure Clean Solutions obavlja usluge dubinskog pranja automobila. To obuhvata pranje sedista tepiha i unutrasnjih povrsina, uklanjanje fleka i neprijatnih mirisa!",
  icons: {
    icon: "/pureclean_logo.png",
  },
  keywords: ["dubinsko pranje", "dubinsko pranje automobila"],
};

const DubinskoPranjeAutomobila = () => {
  const page = getPageData("Dubinsko pranje automobila");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default DubinskoPranjeAutomobila;
