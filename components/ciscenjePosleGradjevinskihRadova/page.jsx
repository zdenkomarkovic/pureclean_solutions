import Image from "next/image";
import React from "react";

const CiscenjePosleGradjevinskihRadova = () => {
  return (
    <div
      id="ciscenjePosleGradjevinskihRadova"
      className=" relative pb-[30px] px-2 container lg:pb-[100px]  mx-auto lg:px-10 text-center"
    >
      <h2 className="absolute leading-tight left-0 right-0 text-[34px] py-[5px] lg:relative lg:text-[50px] lg:leading-normal lg:py-[80px] text-center  text-primary z-20">
        Čišćenje posle građevinskih radova
      </h2>
      <div className=" relative lg:flex gap-20 items-center">
        <div className="absolute bg-black opacity-50 w-full h-[95px] rounded-t-3xl lg:hidden"></div>
        <Image
          src="/gradjevinsko.jpg"
          width={750}
          height={600}
          alt="ciscenje"
          className="rounded-3xl"
        />
        <div className="lg:text-left">
          <p className="lg:text-[28px]">
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
