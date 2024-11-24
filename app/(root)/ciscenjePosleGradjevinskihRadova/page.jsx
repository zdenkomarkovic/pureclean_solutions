import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

const CiscenjePosleGradjevinskihRadova = () => {
  const page = getPageData("Čišćenje posle građevinskih radova");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
};

export default CiscenjePosleGradjevinskihRadova;
