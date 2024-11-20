import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"> </div>
      <div className="relative z-20 container mx-auto px-10 ">
        <h1 className="text-[80px] text-right text-white pt-28 font-bold">
          Pure Clean Solutions
        </h1>
        <div className=" w-[700px] mt-20 ml-auto text-center font-bold">
          <h3 className="text-white text-[40px]">
            Duboko posveceni svom poslu, izuzetno odgovorni.
          </h3>
          <p className="text-white text-[30px]">
            Specijalizovani za ciscenje poslovnih objekata, kancelarija i
            zgrada. Ali rado prihvatamo sve vrste poslova
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
