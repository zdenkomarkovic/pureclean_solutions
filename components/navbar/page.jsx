"use client";

import Link from "next/link";
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { FaPhone } from "react-icons/fa6";
import { pageData } from "../../constants/index.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(true);

  const toggleDropdownMenu = () => {
    setDropdownMenu((prev) => !prev);
  };

  return (
    <header className="bg-black bg-opacity-50 fixed left-0 right-0 top-0  uppercase text-white z-50">
      <nav className="lg:hidden mx-auto py-2 justify-between items-center z-100 ">
        <div className="relative flex justify-between z-20 items-center ">
          <div onClick={toggleDropdownMenu}>
            {dropdownMenu ? (
              <RxHamburgerMenu className="text-white w-[50px] h-auto pl-5" />
            ) : (
              <AiOutlineClose className="text-white w-[50px] h-auto pl-5" />
            )}
            <div
              className={`flex flex-col ${
                dropdownMenu && "hidden"
              } absolute mt-[8px]  z-[100] text-white w-full font-bold bg-black bg-opacity-70 text-nowrap  rounded-b-xl`}
            >
              <Link href={"/"} className="px-5 py-1 ">
                Početna
              </Link>
              {pageData.map((page, i) => {
                return (
                  <Link key={i} href={page.route} className="px-5 py-1 ">
                    {page.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <a href="tel:+381631210359">
            <button className="px-[8px] py-[2px] flex gap-1 items-center border-2 rounded-full bg-black mx-auto font-bold border-primary primary text-[15px]">
              <FaPhone className="text-[20px] text-primary " /> +381 63 1210359
            </button>
          </a>
          <Link
            href="/#kontakt"
            className="pr-5"
            onClick={() => setDropdownMenu(true)}
          >
            Kontakt
          </Link>
        </div>
      </nav>
      <nav className="hidden lg:flex container mx-auto px-20 justify-between items-center z-100 ">
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
              {pageData.map((page, i) => {
                return (
                  <Link key={i} href={page.route} className="p-3">
                    {page.title}
                  </Link>
                );
              })}
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
