import Image from "next/image";
import React from "react";

const DubinskoPranje = () => {
  return (
    <div
      id="dubinskoPranje"
      className=" bg-gray-200 px-2 py-4 container lg:pb-[100px]  mx-auto lg:px-10 text-center"
    >
      <div className="container mx-auto">
        <div className="relative lg:flex gap-20 items-center">
          <div className="absolute bg-black opacity-50 w-full h-[65px] rounded-t-3xl lg:hidden"></div>
          <h2 className=" absolute left-0 right-0 text-[34px] lg:text-[50px] py-[10px] lg:py-[80px] text-center text-primary">
            Dubinsko pranje
          </h2>
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
    // <div
    //   id="dubinskoPranje"
    //   className=" bg-gray-200 px-2 pb-[30px] lg:pb-[100px]  mx-auto lg:px-10 text-center"
    // >
    //   <div className="container mx-auto">
    //     <h2 className="text-[34px] lg:text-[50px] py-[30px] lg:py-[80px] text-center  text-primary">
    //       Dubinsko pranje
    //     </h2>
    //     <div className="lg:flex gap-20 items-center">
    //       <div className="pb-[30px] lg:pb-0 lg:text-left">
    //         <p className="text-[18px] lg:text-[28px]">
    //           Oživite nameštaj i osvežite svoj prostor uz naše usluge dubinskog
    //           pranja! Uklanjamo duboko ukorenjenu prljavštinu, mrlje i alergene
    //           iz tapaciranog nameštaja, tepiha i dušeka. Koristimo profesionalne
    //           tehnike i sredstva koja su sigurna za vaš dom i porodicu. Sa
    //           PureClean Solutions, svaki kutak vašeg prostora dobija novu
    //           svežinu i higijensku čistoću!
    //         </p>
    //       </div>
    //       <Image
    //         src="/dubinsko.jpg"
    //         width={750}
    //         height={600}
    //         alt="dubinsko pranje"
    //         className="rounded-3xl"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default DubinskoPranje;
