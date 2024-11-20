import Image from "next/image";
import React from "react";

const Ciscenje = () => {
  return (
    <div
      id="ciscenje"
      className=" container pb-[100px]  mx-auto px-10  border-b-2 text-center"
    >
      <h2 className="text-[50px] text-center py-[100px] text-primary">
        Ciscenje
      </h2>
      <div className="flex justify-between">
        <Image
          src="/20241120_145442.jpg"
          width={670}
          height={600}
          alt="ciscenje"
          className="rounded-3xl"
        />
        <div className="text-left pt-5 border-2 rounded-3xl p-5 w-[670px]">
          <p className="text-[28px]">
            Nase ciscenje obuyhvata dghdfhbh;kj svdvvogbfbubhv vfkg tcvfivu
            tvfvc cvffbg rtcbvbf cvbfv s cvc v cvdbsfdvcbvf cnvgb sgdcb
          </p>
          <p className="text-[28px] pt-8">
            Nase ciscenje obuyhvata dghdfhbh;kj svdvvogbfbubhv vfkg tcvfivu
            tvfvc cvffbg rtcbvbf cvbfv s cvc v cvdbsfdvcbvf cnvgb sgdcb rtvbffbv
            vcbgv vfbbvbtc vf v cbfvcx v dfvfgdfpd vfdbv vbfsdbvc
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ciscenje;
