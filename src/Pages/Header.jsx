import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold">MySite</h1>
      <nav className="flex space-x-6">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
        <Link to="/talent-development">Talent Development</Link>
        <Link to="/software-solution">Software Solution</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
