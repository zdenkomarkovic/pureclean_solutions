import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-green-100 sticky left-0 right-0 top-0 p-3">
      <nav className="container mx-auto px-10 flex justify-between items-center ">
        <Image
          src="/pureclean_logo.jpg"
          width={50}
          height={50}
          alt="pureclean_solutions_logo"
        />
        <Link href="#hero">O nama</Link>
        <Link href="#ciscenje">Ciscenje</Link>
        <Link href="#palamudjenje">Palamudjenje</Link>
        Navbar
      </nav>
    </header>
  );
};

export default Navbar;
