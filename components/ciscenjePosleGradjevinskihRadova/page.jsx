import Image from "next/image";
import React from "react";

const CiscenjePosleGradjevinskihRadova = () => {
  return (
    <div
      id="ciscenjePosleGradjevinskihRadova"
      className=" container pb-[100px]  mx-auto px-10 text-center"
    >
      <h2 className="text-[50px] text-center  py-[80px] text-primary">
        Čišćenje posle građevinskih radova
      </h2>
      <div className="flex gap-20 items-center">
        <Image
          src="/gradjevinsko.jpg"
          width={750}
          height={600}
          alt="ciscenje"
          className="rounded-3xl"
        />
        <div className="text-left">
          <p className="text-[28px]">
            Završili ste renoviranje ili građevinske radove? Prepustite nama
            izazov uklanjanja prašine, ostataka materijala i tvrdokornih
            nečistoća! Naš tim pažljivo čisti sve površine, uključujući podove,
            stolariju, prozore i sanitarije, kako bismo vaš prostor doveli u
            savršeno stanje. Sa PureClean Solutions, vaš prostor će biti spreman
            za upotrebu brže nego što očekujete!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CiscenjePosleGradjevinskihRadova;
