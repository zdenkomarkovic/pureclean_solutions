import Image from "next/image";
import React from "react";

const GeneralnoCiscenje = () => {
  return (
    <div className=" bg-gray-200 px-2 pb-[30px] lg:pb-[50px]  mx-auto lg:px-10 text-center">
      <div className="container mx-auto">
        <h2 className="text-[34px] lg:text-[50px] py-[30px] lg:pt-[90px] text-center text-primary">
          Generalno čišćenje
        </h2>
        <div className="lg:flex gap-20 items-center">
          <div className="pb-[30px] lg:pb-0 lg:text-left">
            <p className="text-[18px] lg:text-[28px]">
              Generalno čišćenje podrazumeva temeljnu brigu o svakom kutku vašeg
              prostora. Naš tim čisti sve površine, uključujući podove, prozore,
              kuhinjske elemente, kupatila, i teško dostupna mesta. Detaljno
              uklanjamo prašinu, mrlje i nečistoće kako bismo osigurali da vaš
              prostor blista i bude u potpunosti osvežen. Prepustite nam posao,
              a mi ćemo se pobrinuti za savršenu čistoću!
            </p>
          </div>
          <Image
            src="/generalnociscenje.jpg"
            width={750}
            height={600}
            alt="generalno ciscenje"
            className="rounded-3xl  "
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralnoCiscenje;
