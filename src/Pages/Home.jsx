import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Image1 from "../assets/image1.jpeg";
import Bg from "../assets/HB.jpg";

function Home() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Refresh after a short delay to ensure all content is loaded
    setTimeout(() => {
      if (locoScroll.current) locoScroll.current.update();
    }, 1500); // increased delay for better sync with media loads

    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} className="font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[50vh] md:h-[90vh] flex items-center justify-center overflow-hidden"
        data-scroll-section
      >
        {/* Background Image */}
        <img
          src={Bg}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <div
            className="flex flex-col md:flex-row justify-center items-center"
            data-scroll
            data-scroll-speed="6"
          >
            <span
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
              className="text-5xl md:text-9xl font-bold text-[rgb(1,152,178)]"
            >
              Soft
            </span>
            <span
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
              className="text-5xl md:text-9xl font-bold text-[rgb(3,75,173)]"
            >
              Wantage
            </span>
          </div>

          <p
            className="mt-4 md:mt-0 text-sm md:text-xl font-semibold text-blue-500"
            data-scroll
            data-scroll-speed="5"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
          >
            We Build Software | We Shape Talent
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section
        className="h-auto w-full flex flex-col md:flex-row items-center justify-between text-white text-2xl md:text-5xl px-4 md:px-0"
        data-scroll-section
      >
        {/* Text Section */}
        <div className="w-full md:w-[50vw] h-auto md:h-[100vh] flex flex-col justify-evenly md:pl-10 gap-6">
          <p
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-black text-center text-xl md:text-4xl"
          >
            Design-led software experiences.
          </p>
          <h1
            style={{ fontFamily: "'DM Serif Text', serif" }}
            className="text-black text-center text-2xl md:text-7xl leading-tight"
          >
            Real-world talent development programs.
          </h1>
          <p
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-black text-center text-xl md:text-4xl"
          >
            Empowering businesses and{" "}
            <span className="font-bold  text-[rgb(1,152,178)]">
              individuals
            </span>{" "}
            to grow.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[40vw] hidden md:block h-auto mt-10 md:mt-0">
          <img
            className="w-full md:h-[100vh]"
            src={Image1}
            alt="SoftWantage visual"
          />
        </div>
      </section>

      {/* Third Section */}
      <section
        className="w-screen min-h-[100vh] bg-red-600 flex items-center justify-center"
        data-scroll-section
      >
        <div className="text-white text-4xl font-bold">hi</div>
      </section>
    </div>
  );
}

export default Home;
