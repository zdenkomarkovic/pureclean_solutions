import Card from "../../../components/card/page";
import React from "react";

const Ciscenje = () => {
  const pageData = {
    image: "/ciscenje.jpg",
    title: "Čišćenje",
    route: "/ciscenje",
    description:
      "Učinite vaš prostor blistavim uz usluge profesionalnog čišćenja! Bilo da je u pitanju stan, poslovni prostor ili kancelarija, PureClean Solutions garantuje besprekornu higijenu i pažnju prema svakom detalju. Naš tim koristi kvalitetna sredstva i efikasne metode kako bi obezbedio čistoću koja traje. Prepustite brigu nama i uživajte u savršenoj svežini vašeg prostora!",
  };
  return (
    <Card
      title={pageData.title}
      image={pageData.image}
      description={pageData.description}
    />
  );
};

export default Ciscenje;
