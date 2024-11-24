import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

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
