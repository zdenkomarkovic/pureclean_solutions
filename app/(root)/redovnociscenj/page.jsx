import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

const redovnoCiscenje = () => {
  const page = getPageData("Redovno čišćenje");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default redovnoCiscenje;
