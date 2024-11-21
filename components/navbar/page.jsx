"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(true);

  const toggleDropdownMenu = () => {
    setDropdownMenu((prev) => !prev);
  };

  return (
    <header className="bg-black bg-opacity-40 fixed left-0 right-0 top-0 pt- uppercase text-white">
      <nav className="container mx-auto px-20 flex justify-between items-center z-50 ">
        <div className="relative flex gap-20 z-20 items-center ">
          <a href="tel:+381631210359">
            <button className="px-5 py-1 flex gap-3 items-center border-2 rounded-full bg-black mx-auto font-bold border-primary primary text-[20px]">
              <FaPhone className="text-[30px] text-primary " /> +381 63 1210359
            </button>
          </a>
          <div
            onClick={toggleDropdownMenu}
            onMouseEnter={() => setDropdownMenu(false)}
            onMouseLeave={() => setDropdownMenu(true)}
          >
            <button className="flex items-center cursor-pointer uppercase font-bold p-5">
              Usluge{" "}
              <SlArrowDown
                className={`ml-2 ${dropdownMenu && "-rotate-90"} font-bold `}
              />
            </button>
            <div
              className={`flex flex-col ${
                dropdownMenu && "hidden"
              } absolute   z-[100] text-white font-bold bg-black bg-opacity-40 text-nowrap  rounded-b-xl`}
            >
              <Link href="#ciscenje" className="p-3">
                Redovno čišćenje
              </Link>
              <Link href="#generalnoCiscenje" className="p-3">
                Generalno čišćenje
              </Link>
              <Link href="#ciscenjePosleGradjevinskihRadova" className="p-3">
                čišćenje posle građevinskih radova
              </Link>
              <Link href="#dubinskoPranje" className="p-3">
                Dubinsko pranje
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-10 items-center font-bold">
          <Link href="#kontakt">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
