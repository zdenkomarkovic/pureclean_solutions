import Image from "next/image";
import React from "react";

const GeneralnoCiscenje = () => {
  return (
    <div
      id="generalnoCiscenje"
      className="  pb-[100px] bg-gray-200 mx-auto px-10 text-center"
    >
      <div className="container mx-auto">
        <h2 className="text-[50px] text-center py-[80px] text-primary">
          Generalno čišćenje
        </h2>
        <div className="flex gap-20 items-center">
          <div className="text-left">
            <p className="text-[28px]">
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
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralnoCiscenje;
