import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Link } from "react-router-dom";
import Image1 from "../assets/image1.jpeg";
import Bg from "../assets/HB.jpg";
import Soft from "../assets/Soft.jpg";
import Talent from "../assets/Talent.jpg";

function Home() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    setTimeout(() => {
      if (locoScroll.current) locoScroll.current.update();
    }, 1500);

    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} className="font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[100vh] md:h-[100vh] flex items-center justify-center overflow-hidden px-4 py-8 md:px-0 md:py-0"
        data-scroll-section
      >
        <img
          src={Bg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <div className="absolute top-0 left-0 w-full h-full z-0"></div>
        <div className="relative z-10 text-center px-4">
          <div
            className="flex flex-row md:flex-row justify-center items-center"
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
            className="mt-4 text-sm md:text-xl font-semibold text-blue-500"
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
        className="w-full md:h-[100vh] flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-0 md:py-0"
        data-scroll-section
      >
        <div className="w-full h-[100vh] md:w-[50vw] h-auto flex flex-col justify-center gap-6">
          <p
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-black text-center text-xl md:text-4xl"
          >
            Design-led software experiences.
          </p>
          <h1
            style={{ fontFamily: "'DM Serif Text', serif" }}
            className="text-black text-center text-4xl md:text-7xl leading-tight"
          >
            Real-world talent development programs.
          </h1>
          <p
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-black text-center text-xl md:text-4xl"
          >
            Empowering businesses and{" "}
            <span className="font-bold text-[rgb(1,152,178)]">individuals</span>{" "}
            to grow.
          </p>
        </div>
        <div className="w-full hidden md:block md:w-[40vw] mt-10 md:mt-0">
          <img
            className="w-full h-[50vh] object-cover md:h-[100vh]"
            src={Image1}
            alt="SoftWantage visual"
          />
        </div>
      </section>

      {/* Software Section */}
      <section
        className="w-full md:h-[100vh] flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-0 md:py-0"
        data-scroll-section
      >
        <div className="w-full md:w-[40vw] mt-10 md:mt-0">
          <img
            className="w-full h-[50vh] object-cover md:h-auto"
            src={Soft}
            alt="SoftWantage visual"
          />
        </div>
        <div className="w-full md:w-[50vw] h-auto flex flex-col justify-center gap-6">
          <p
            style={{ fontFamily: "'DM Serif Text', serif" }}
            className="text-black text-center text-4xl md:text-7xl"
          >
            Software Solutions Group
          </p>
          <h1
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-black text-center text-xl md:text-2xl leading-tight"
          >
            We Don’t Just Build Software—We Shape Possibilities
          </h1>
          <p
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-black text-center text-base md:text-xl"
          >
            We transform outdated systems into modern powerhouses, craft smooth
            and stunning web and mobile experiences, and turn complex data into
            clear, actionable insights. With design that connects and technology
            that grows with you, we don’t just deliver software—we create
            digital solutions that move your business forward.
          </p>
          <Link to="/about" className="flex justify-center">
            <svg
              className="o-ui-arrow hover:-rotate-45 transform-translate duration-400 mb-6 w-10 h-10 md:w-16 md:h-16"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.10162 3.10156L62.9999 62.9999"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M63 1.00001L63 63L0.999989 63"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* Talent Development Section */}
      <section
        className="w-full md:h-[100vh] flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-0 md:py-0"
        data-scroll-section
      >
        <div className="w-full md:w-[50vw] h-auto flex flex-col justify-center gap-6">
          <p
            style={{ fontFamily: "'DM Serif Text', serif" }}
            className="text-black text-center text-4xl md:text-7xl"
          >
            Talent Development Group
          </p>
          <h1
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-black text-center text-xl md:text-2xl leading-tight"
          >
            Crafting Talent. Cultivating Futures
          </h1>
          <p
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-black text-center text-base md:text-xl"
          >
            We turn potential into performance through hands-on training, live
            challenges, and guided mentorship. Where academia ends, our journey
            begins— shaping tomorrow’s tech leaders with real-world experience
            and practical skills.
          </p>
          <Link to="/talent-development" className="flex justify-center">
            <svg
              className="o-ui-arrow hover:-rotate-45 transform-translate duration-400 mb-6 w-10 h-10 md:w-16 md:h-16"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.10162 3.10156L62.9999 62.9999"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M63 1.00001L63 63L0.999989 63"
                stroke="gray"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="w-full md:w-[40vw] mt-10 md:mt-0">
          <img
            className="w-full h-[50vh] object-cover md:h-auto"
            src={Talent}
            alt="Talent visual"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
