import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

const DubinskoPranje = () => {
  const page = getPageData("Dubinsko pranje");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default DubinskoPranje;
