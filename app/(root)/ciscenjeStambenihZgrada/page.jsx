import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

const ciscenjeStambenihZgrada = () => {
  const page = getPageData("Čišćenje stambenih zgrada");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default ciscenjeStambenihZgrada;
