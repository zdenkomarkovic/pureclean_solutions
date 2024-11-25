import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

const dubinskoPranjeTepiha = () => {
  const page = getPageData("Dubinsko pranje tepiha");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default dubinskoPranjeTepiha;
