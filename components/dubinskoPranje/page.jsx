import Image from "next/image";
import React from "react";

const DubinskoPranje = () => {
  return (
    <div
      id="dubinskoPranje"
      className="pb-[100px] bg-gray-200 mx-auto px-10 text-center"
    >
      <div className="container mx-auto">
        <h2 className="text-[50px] text-center py-[80px] text-primary">
          Dubinsko Pranje
        </h2>
        <div className="flex gap-20 items-center">
          <div className="text-left">
            <p className="text-[28px]">
              Oživite nameštaj i osvežite svoj prostor uz naše usluge dubinskog
              pranja! Uklanjamo duboko ukorenjenu prljavštinu, mrlje i alergene
              iz tapaciranog nameštaja, tepiha i dušeka. Koristimo profesionalne
              tehnike i sredstva koja su sigurna za vaš dom i porodicu. Sa
              PureClean Solutions, svaki kutak vašeg prostora dobija novu
              svežinu i higijensku čistoću!
            </p>
          </div>
          <Image
            src="/dubinsko.jpg"
            width={750}
            height={600}
            alt="dubinsko pranje"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DubinskoPranje;
