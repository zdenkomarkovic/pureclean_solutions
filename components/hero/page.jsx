import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className=" relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')", zIndex: -1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
        <div className="relative z-20 container mx-auto px-10 pt-20 lg:pt-40 ">
          <h1 className="w-[60%] lg:w-[100%] pt ml-auto text-[38px] lg:text-[80px] text-left lg:text-right text-primary  font-bold">
            Pure Clean Solutions
          </h1>
          <div className="w-[60%] lg:w-[700px] mt-10 lg:mt-20 ml-auto text-left lg:text-center font-bold">
            <h3 className="text-[17px] text-white lg:text-[40px]">
              Duboko posveceni svom poslu, izuzetno odgovorni.
            </h3>
            <p className="text-[14px] mt-3 text-white  lg:text-[30px]">
              Specijalizovani za ciscenje poslovnih objekata, kancelarija i
              zgrada. Ali rado prihvatamo sve vrste poslova
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
