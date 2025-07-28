import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Career from "./Pages/Career";
import TalentDevelopment from "./Pages/Talentdevlopment";
import SoftwareSolution from "./Pages/Softwaresolution";
import Contact from "./Pages/Contact";
import Header from "./Pages/Header.jsx";
import Footer from "./Pages/Footer.jsx";

function App() {
  return (
    <Router>
      {/* ✅ Header component Routes ke bahar hona chahiye */}
      <Header />

      {/* ✅ Page routes */}
      <main>
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
