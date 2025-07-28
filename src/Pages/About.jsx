import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../Pages/Footer.jsx";

const About = () => {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <section
        id="about"
        data-scroll-section
        className="min-h-screen flex justify-center items-center bg-blue-200"
      >
        <h2 className="text-4xl" data-scroll data-scroll-speed="1">
          About Section
        </h2>
      </section>
      <Footer />
    </div>
  );
};

export default About;
