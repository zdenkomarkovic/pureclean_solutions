import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

export const metadata = {
  title: "Čišćenje posle gradjeviskih radova Niš - Pure Clean Solutions",
  description:
    "Posle renoviranja ili gradjevinskih radova potrebno je ukloniti prasinu i tvrdokorne necistoce! Posle naseg ciscenja podovi, prozori, stolarija, sanitarija blistaju!",
  icons: {
    icon: "/pureclean_logo.png",
  },
  keywords: ["ciscenje", "ciscenje nis"],
};

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
