"use client";

import React, { useEffect, useState } from "react";

const TypingEffect = ({ text, speed = 10 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 className="relative flex flex-col pl-[150px] lg:pl-0 lg:w-[100%] ml-auto text-[38px] lg:text-[80px] text-left lg:text-right text-primary font-bold transition-opacity duration-700">
      {displayedText}
      <span className=" absolute left-0 top-[150px] animate-colorChange text-center text-[30px] lg:text-[80px]">
        Čišćenje prepustite nama, jer smo mi experti u svom poslu
      </span>
    </h1>
  );
};

const Hero = () => {
  return (
    <div
      id="hero"
      className=" relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')", zIndex: -1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
        <div className="relative z-20 container mx-auto px-2 lg:px-10 pt-20 lg:pt-30 ">
          {/* <h1 className="w-[55%] lg:w-[100%] ml-auto text-[38px] lg:text-[80px] text-left lg:text-right text-primary font-bold">
            Pure Clean Solutions
          </h1> */}
          <TypingEffect text="Pure Clean Solutions" speed={50} />
          <div className="w-[65%] lg:w-[700px] mt-[200px] lg:mt-[300px] ml-auto text-center font-bold">
            <h3 className="text-[20px] text-white lg:text-[40px] opacity-0 animate-fade-in">
              Čišćenje Niš
            </h3>
            <p className="text-[17px] mt-3 text-white  lg:text-[30px] opacity-0 animate-fade-in2">
              Specijalizovani za čišćenje poslovnih objekata, kancelarija i
              zgrada. Ali rado prihvatamo sve vrste poslova
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
