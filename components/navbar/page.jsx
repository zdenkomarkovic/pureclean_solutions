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
    <header className="bg-green-100 sticky left-0 right-0 top-0 p-2 uppercase">
      <nav className="container mx-auto px-10 flex justify-between items-center z-50 ">
        <Image
          src="/pureclean_logo.jpg"
          width={45}
          height={45}
          alt="pureclean_solutions_logo"
        />
        <div className="relative flex gap-20 z-20 ">
          <div
            onClick={toggleDropdownMenu}
            onMouseEnter={() => setDropdownMenu(false)}
            onMouseLeave={() => setDropdownMenu(true)}
          >
            <button className="flex items-center cursor-pointer uppercase">
              Usluge{" "}
              <SlArrowDown
                className={`ml-2 ${dropdownMenu && "-rotate-90"} `}
              />
            </button>
            <div
              className={`flex flex-col ${
                dropdownMenu && "hidden"
              } absolute pt-5 gap-2  z-[100] text-white`}
            >
              <Link href="#ciscenje">Redovno Ciscenje</Link>
              <Link href="#ciscenje">Generalno ciscenje</Link>
              <Link href="#ciscenje">Ciscenje posle gradjevinskih radova</Link>
              <Link href="#ciscenje">Dubinsko pranje</Link>
            </div>
          </div>
          <Link href="#hero">O nama</Link>
        </div>
        <div className="flex gap-10 items-center">
          <a href="tel:+381659742000">
            <button className="px-5 py-2 flex gap-3 items-center rounded-full bg-green-100 mx-auto">
              <FaPhone className="text-[35px]" /> +381 65 9742000
            </button>
          </a>
          <Link href="#kontakt">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
