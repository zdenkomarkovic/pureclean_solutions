import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaViber } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Kontakt = () => {
  return (
    <div
      id="kontakt"
      className=" container pb-[20px] lg:pb-[40px] text-center mx-auto "
    >
      <h2 className="text-[34px] py-[15px] lg:text-[50px] lg:py-[60px] text-center  text-primary">
        Kontakt
      </h2>
      <div className="">
        <div className="flex flex-col lg:flex-row mx-auto justify-center gap-3 lg:gap-4">
          <a href="tel:+381631210359">
            <button className="px-3 lg:px-5 py-[7px] flex gap-4 items-center border-[1px] rounded-full bg-black mx-auto font-bold border-primary primary lg:text-[20px]">
              <FaPhone className="text-[20px] lg:text-[30px] text-primary" />{" "}
              +381 63 1210359
            </button>
          </a>
          <a href="viber://chat?number=%2B381631210359">
            <button className="px-3 lg:px-5 py-[7px] flex gap-3 items-center border-[1px] rounded-full bg-black mx-auto font-bold border-primary primary lg:text-[20px]">
              <FaViber className="text-[28px] lg:text-[35px] p-1 bg-purple-600 text-white rounded-xl rounde" />{" "}
              +381 63 1210359
            </button>
          </a>
          <a href="https://wa.me/381631210359">
            <button className="px-3 lg:px-5 py-[7px] flex gap-3 items-center border-[1px] rounded-full bg-black mx-auto font-bold border-primary primary lg:text-[20px]">
              <FaWhatsappSquare className="text-[26px] lg:text-[35px] rounded-lg text-green-700 " />{" "}
              +381 63 1210359
            </button>
          </a>
        </div>
        <div className="flex pt-4 lg:pt-12 gap-10 lg:gap-20 text-[33px] lg:text-[40px] justify-center ">
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
      <p className="pt-8 lg:pt-12 text-primary">
        © 2024 PureClean Solutions. Designed by ManikamDev.Solutions
      </p>
    </div>
  );
};

export default Kontakt;
