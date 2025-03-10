import Card from "../../../components/card/page";
import React from "react";
import { getPageData } from "../../../constants";

export const metadata = {
  title: "Dubinsko Pranje tepiha Niš - Pure Clean Solutions",
  description:
    "Profesionalno dubinsko pranje tepiha u Nisu. Dolazimo i peremo tepih na licu mesta. Efikasno uklanjamo svu necistocu, prasinu, fleke i neprijatne mirise",
  icons: {
    icon: "/pureclean_logo.png",
    apple: "/pureclean_logo.png",
  },
  keywords: ["dubinsko pranje", "dubinsko pranje tepiha"],
  alternates: {
    canonical: "https://www.ciscenje-nis.rs/dubinskopranjetepiha",
  },
};

const dubinskoPranjeTepiha = () => {
  const page = getPageData("Dubinsko pranje tepiha");
  return (
    <Card
      title={page.title}
      image={page.image}
      description={page.description}
    />
  );
  ``;
};

export default dubinskoPranjeTepiha;
