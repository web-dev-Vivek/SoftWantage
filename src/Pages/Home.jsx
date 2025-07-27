import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import BgVideo from "../assets/bgv.mp4";
import Image1 from "../assets/image1.jpeg";

function Home() {
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
    <div data-scroll-container ref={scrollRef} className="font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[100vh] md:h-[90vh] flex items-center justify-center overflow-hidden"
        data-scroll-section
      >
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={BgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (optional for dark filter) */}
        <div className="absolute top-0 left-0 w-full h-full z-0"></div>

        {/* Content on top of video */}
        <div className="relative z-10 text-center px-4">
          <div
            className="flex flex-col md:flex-row justify-center items-center"
            data-scroll
            data-scroll-speed="6"
          >
            <span className="text-5xl md:text-9xl font-bold text-[rgb(1,152,178)]">
              Soft
            </span>
            <span className="text-5xl md:text-9xl font-bold text-[rgb(3,75,173)]">
              Wantage
            </span>
          </div>

          <p
            className="mt-4 text-sm md:text-xl font-semibold text-blue-500"
            data-scroll
            data-scroll-speed="5"
          >
            We Build Software | We Shape Talent
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section
        className="h-auto w-full flex flex-col md:flex-row items-center justify-between text-white text-2xl md:text-5xl px-4 md:px-0 py-10"
        data-scroll-section
      >
        {/* Text Section */}
        <div className="w-full md:w-[50vw] h-auto md:h-[100vh] flex flex-col justify-evenly md:pl-10 gap-6">
          <p className="text-black text-center text-xl md:text-4xl">
            Design-led software experiences.
          </p>
          <h1 className="text-black text-center text-2xl md:text-7xl leading-tight">
            Real-world talent development programs.
          </h1>
          <p className="text-black text-center text-xl md:text-4xl">
            Empowering businesses and individuals to grow.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[40vw] hidden md:block h-auto md:h-[100vh] mt-10 md:mt-0">
          <img
            className="w-full h-auto object-cover"
            src={Image1}
            alt="SoftWantage visual"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
