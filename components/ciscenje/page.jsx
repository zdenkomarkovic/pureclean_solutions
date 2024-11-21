import Image from "next/image";
import React from "react";

const Ciscenje = () => {
  return (
    <div
      id="ciscenje"
      className=" relative py-[25px] px-2 container lg:py-0 lg:static lg:pb-[100px]  mx-auto lg:px-10 text-center"
    >
      <h2 className="absolute left-0 right-0 text-[34px] text-white  lg:static lg:text-[50px] lg:py-[80px] text-center  lg:text-primary z-20">
        Čišćenje
      </h2>
      <div className=" relative lg:static lg:flex gap-20 items-center">
        <div className="absolute bg-black opacity-50 w-full h-[50px] rounded-t-3xl lg:hidden"></div>
        <Image
          src="/ciscenje.jpg"
          width={750}
          height={600}
          alt="ciscenje"
          className="rounded-3xl"
        />
        <div className="lg:text-left">
          <p className="lg:text-[28px]">
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
