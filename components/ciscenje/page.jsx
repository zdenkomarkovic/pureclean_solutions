import Image from "next/image";
import React from "react";

const Ciscenje = () => {
  return (
    <div
      id="ciscenje"
      className="pb-[30px] px-2 container lg:pb-[100px]  mx-auto lg:px-10 text-center"
    >
      <h2 className="text-[34px] lg:text-[50px] lg:py-[80px] text-center  text-primary">
        Čišćenje
      </h2>
      <div className="lg:flex gap-20 items-center">
        <Image
          src="/ciscenje.jpg"
          width={750}
          height={600}
          alt="ciscenje"
          className="rounded-3xl"
        />
        <div className="lg:text-left">
          <p className=" lg:text-[28px]">
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
