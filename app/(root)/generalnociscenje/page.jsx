import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

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
