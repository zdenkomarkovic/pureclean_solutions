import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

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
