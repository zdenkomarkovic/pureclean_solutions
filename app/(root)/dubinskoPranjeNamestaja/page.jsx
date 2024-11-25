import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

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
