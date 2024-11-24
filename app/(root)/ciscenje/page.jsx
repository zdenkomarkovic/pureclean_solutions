import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

const Ciscenje = () => {
  const page = getPageData("Čišćenje");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default Ciscenje;
