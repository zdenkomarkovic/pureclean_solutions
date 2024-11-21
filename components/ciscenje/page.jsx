import Image from "next/image";
import React from "react";

const Ciscenje = () => {
  return (
    <div
      id="ciscenje"
      className=" container pb-[100px]  mx-auto px-10 text-center"
    >
      <h2 className="text-[50px] text-center py-[80px] text-primary">
        Čišćenje
      </h2>
      <div className="flex gap-20 items-center">
        <Image
          src="/ciscenje.jpg"
          width={750}
          height={600}
          alt="ciscenje"
          className="rounded-3xl"
        />
        <div className="text-left">
          <p className="text-[28px]">
            Učinite vaš prostor blistavim uz usluge profesionalnog čišćenja!
            Bilo da je u pitanju stan, poslovni prostor ili kancelarija,
            PureClean Solutions garantuje besprekornu higijenu i pažnju prema
            svakom detalju. Naš tim koristi kvalitetna sredstva i efikasne
            metode kako bi obezbedio čistoću koja traje. Prepustite brigu nama i
            uživajte u savršenoj svežini vašeg prostora!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ciscenje;
