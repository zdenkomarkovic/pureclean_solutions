import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const CiscenjeNis = () => {
  return (
    <div className=" bg-black ">
      <div className=" container pb-[50px] lg:pb-[120px] text-center mx-auto">
        <h2 className="text-[37px] py-[25px] lg:text-[78px] lg:py-[60px] text-center  text-primary">
          Čišćenje Niš
        </h2>
        <p className="text-[20px] mb-20 text-white  lg:text-[30px]">
          Pozovite{" "}
          <span className="text-primary font-bold">Pure Clean Solutions</span> i
          zakazite profesionalno čišćenje prostora već danas! Naša agencija za
          čišćenje nudi usluge koje su prilagođene vašim potrebama, bilo da se
          radi o stambenim ili poslovnim prostorima. Uz pažnju prema detaljima i
          korišćenje visokokvalitetnih sredstava za čišćenje, garantujemo
          savršenu čistoću i osveženje vašeg prostora. Prepustite brigu o
          higijeni nama, a vi uživajte u savršeno čistom i urednom okruženju.
          Kontaktirajte nas i uverite se zašto smo među najpouzdanijim
          agencijama za čišćenje u vašem gradu. Vaše zadovoljstvo je naša
          najveća motivacija!
        </p>
        <div className="">
          <div className="flex flex-col lg:flex-row mx-auto justify-center gap-3 lg:gap-10 items-center">
            <a href="tel:+381631210359">
              <button className="px-8  py-[7px] flex gap-5 items-center border-b-[1px] mx-auto  border-primary text-white text-[20px]">
                <FaPhone className="text-[25px] lg:text-[35px] text-primary" />{" "}
                +381 63 1210359
              </button>
            </a>
            <a href="viber://contact?number=%2B381631210359">
              <button className="px-8 py-[7px] flex gap-5 items-center border-b-[1px] mx-auto  border-primary text-white text-[20px]">
                <FaViber className="text-[28px] lg:text-[35px] p-1 bg-purple-600 text-white rounded-xl rounde" />{" "}
                +381 63 1210359
              </button>
            </a>
            <a href="https://wa.me/381631210359">
              <button className="px-8 py-[7px] flex gap-5 items-center border-b-[1px] mx-auto border-primary text-white text-[20px]">
                <FaWhatsappSquare className="text-[30px] lg:text-[35px] rounded-2xl text-green-700 " />{" "}
                +381 63 1210359
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CiscenjeNis;
