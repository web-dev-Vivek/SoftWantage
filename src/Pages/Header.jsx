import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full w-[90vw] md:w-[50vw] h-[10vh] z-50 flex justify-center items-center shadow-lg">
      <nav className="flex flex-wrap gap-4 md:gap-6 text-black font-semibold text-sm md:text-base">
        <Link className="" to="/">
          Home
        </Link>
        <Link className="border-l-1 pl-5" to="/about">
          About
        </Link>
        <Link className="border-l-1 pl-5" to="/career">
          Career
        </Link>
        <Link className="border-l-1 pl-5" to="/talent-development">
          Talent
        </Link>
        <Link className="border-l-1 pl-5" to="/software-solution">
          Software
        </Link>
        <Link className="border-l-1 pl-5" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
