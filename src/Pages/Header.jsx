import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full w-[90vw] md:w-[50vw] h-[5vh] md:h-[10vh] z-50 px-4 shadow-lg flex items-center justify-between md:justify-center">
      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-10 text-black font-semibold text-sm md:text-base">
        <Link to="/">Home</Link>
        <Link className="hover:border-b-2" to="/about">
          About
        </Link>
        <Link className="hover:border-b-2" to="/career">
          Career
        </Link>
        <Link className="hover:border-b-2" to="/talent-development">
          Talent
        </Link>
        <Link className="hover:border-b-2" to="/software-solution">
          Software
        </Link>
        <Link className="hover:border-b-2" to="/contact">
          Contact
        </Link>
      </nav>

      {/* Hamburger Menu Icon (Mobile Only) */}
      <div
        className="md:hidden text-black text-xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-[100%] left-0 w-full bg-white/10 backdrop-blur-md flex flex-col items-center gap-4 py-4 font-semibold text-black shadow-lg rounded-b-xl transform transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        } origin-top`}
      >
        <Link onClick={toggleMenu} to="/">
          Home
        </Link>
        <Link onClick={toggleMenu} to="/about">
          About
        </Link>
        <Link onClick={toggleMenu} to="/career">
          Career
        </Link>
        <Link onClick={toggleMenu} to="/talent-development">
          Talent
        </Link>
        <Link onClick={toggleMenu} to="/software-solution">
          Software
        </Link>
        <Link onClick={toggleMenu} to="/contact">
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Header;
