import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Kontakt = () => {
  return (
    <div id="kontakt" className=" py-[80px]  text-center text-green-700">
      <h2 className="text-[50px]">Kontakt</h2>
      <p className="text-[28px]">Pozovite nas klikom na</p>
      <div className="flex flex-col gap-3 pt-5 ">
        <a href="tel:+381631210359">
          <button className="px-5 py-2 flex gap-3 items-center rounded-full bg-green-100 mx-auto">
            <FaPhone className="text-[35px]" /> +381 63 1210359
          </button>
        </a>
        <a href="viber://chat?number=%2B381631210359">
          <button className="px-5 py-2 flex gap-3 items-center rounded-full bg-green-100 mx-auto">
            <FaViber className="text-[35px] p-1 bg-purple-600 text-white rounded-xl rounde" />{" "}
            +381 63 1210359
          </button>
        </a>
        <a href="https://wa.me/381631210359">
          <button className="px-5 py-2 flex gap-3 items-center rounded-full bg-green-100 mx-auto">
            <FaWhatsappSquare className="text-[35px] rounded-xl" /> +381 63
            1210359
          </button>
        </a>
        <div className="flex pt-5 gap-14 text-[40px] text-center mx-auto ">
          <a
            href="https://www.instagram.com/pureclean_solutions_nis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="p-1 bg-red-400 rounded-xl text-white" />
          </a>
          <a
            href="https://www.facebook.com/share/14anRHH1Uf/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-blue-500" />
          </a>
        </div>
      </div>
      <p className="pt-16">
        © 2024 PureClean Solutions. Designed by ManikamDev.Solutions
      </p>
    </div>
  );
};

export default Kontakt;
