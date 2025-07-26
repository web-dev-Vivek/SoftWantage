import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Career from "./Pages/Career";
import TalentDevelopment from "./Pages/Talentdevlopment";
import SoftwareSolution from "./Pages/Softwaresolution";
import Contact from "./Pages/Contact";

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 bg-white shadow-md p-4 flex justify-between">
    <h1 className="text-xl font-bold">MySite</h1>
    <nav className="flex space-x-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/career">Career</Link>
      <Link to="/talent-development">Talent Development</Link>
      <Link to="/software-solution">Software Solution</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/talent-development" element={<TalentDevelopment />} />
          <Route path="/software-solution" element={<SoftwareSolution />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
