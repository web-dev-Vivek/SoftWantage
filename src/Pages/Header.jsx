import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full w-[90vw] md:w-[50vw] h-[5vh] md:h-[10vh] z-50 flex justify-center items-center shadow-lg">
      <nav className="flex flex-wrap gap-3 p-2 md:gap-10 text-black font-semibold text-sm md:text-base">
        <Link className="" to="/">
          Home
        </Link>
        <Link className=" hover:border-b-1" to="/about">
          About
        </Link>
        <Link className=" hover:border-b-1" to="/career">
          Career
        </Link>
        <Link className=" hover:border-b-1" to="/talent-development">
          Talent
        </Link>
        <Link className=" hover:border-b-1" to="/software-solution">
          Software
        </Link>
        <Link className=" hover:border-b-1" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
