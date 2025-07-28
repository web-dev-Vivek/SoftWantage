import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Image1 from "../assets/image1.jpeg";
import Bg from "../assets/HB.jpg";
import Soft from "../assets/Soft.jpg";
import Talent from "../assets/Talent.jpg";
import Footer from "../Pages/Footer.jsx";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const scrollRef = useRef(null);
  const locoScroll = useRef(null);

  useEffect(() => {
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Connect Locomotive Scroll to GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.current.scrollTo(value, 0, 0)
          : locoScroll.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    locoScroll.current.on("scroll", ScrollTrigger.update);

    ScrollTrigger.addEventListener("refresh", () =>
      locoScroll.current.update()
    );
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
      ScrollTrigger.removeEventListener("refresh", () =>
        locoScroll.current.update()
      );
    };
  }, []);

  // GSAP animation for option boxes
  useGSAP(() => {
    const boxes = gsap.utils.toArray(".option-box");

    boxes.forEach((box) => {
      gsap.fromTo(
        box,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power4.out",
          staggered: 0.2,
          scrollTrigger: {
            trigger: box,
            scroller: scrollRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: 2,
          },
        }
      );
    });
  });

  return (
    <div data-scroll-container ref={scrollRef} className="font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden px-4 py-8"
        data-scroll-section
      >
        <img
          src={Bg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <div className="relative z-10 text-center px-4">
          <div
            className="flex justify-center items-center"
            data-scroll
            data-scroll-speed="6"
          >
            <span
              className="text-5xl md:text-9xl font-bold text-[rgb(1,152,178)]"
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
            >
              Soft
            </span>
            <span
              className="text-5xl md:text-9xl font-bold text-[rgb(3,75,173)]"
              style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
            >
              Wantage
            </span>
          </div>
          <p
            className="mt-4 text-sm md:text-xl font-semibold text-blue-500"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
            data-scroll
            data-scroll-speed="5"
          >
            We Build Software | We Shape Talent
          </p>
        </div>
      </section>

      {/* Software Experience Section */}
      <section
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 py-8"
        data-scroll-section
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          <p
            className="text-black text-center text-xl md:text-4xl"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Design-led software experiences.
          </p>
          <h1
            className="text-black text-center text-4xl md:text-7xl leading-tight"
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            Real-world talent development programs.
          </h1>
          <p
            className="text-black text-center text-xl md:text-4xl"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Empowering businesses and{" "}
            <span className="font-bold text-[rgb(1,152,178)]">individuals</span>{" "}
            to grow.
          </p>
        </div>
        <div className="hidden md:block w-full md:w-[40vw] mt-10 md:mt-0">
          <img
            className="w-full h-[50vh] md:h-[100vh] object-cover"
            src={Image1}
            alt="SoftWantage visual"
          />
        </div>
      </section>

      {/* Software Solutions Section */}
      <section
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 py-8"
        data-scroll-section
      >
        <div className="w-full md:w-[40vw] mt-10 md:mt-0">
          <img
            className="w-full h-[50vh] object-cover md:h-auto"
            src={Soft}
            alt=""
          />
        </div>
        <div className="w-full md:w-[50vw] flex flex-col justify-center gap-6">
          <p
            className="text-black text-center text-4xl md:text-7xl"
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            Software Solutions Group
          </p>
          <h1
            className="text-black text-center text-xl md:text-2xl leading-tight"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            We Don’t Just Build Software—We Shape Possibilities
          </h1>
          <p
            className="text-black text-center text-base md:text-xl"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            We transform outdated systems into modern powerhouses, craft smooth
            and stunning web and mobile experiences, and turn complex data into
            clear, actionable insights.
          </p>
          <Link to="/about" className="flex justify-center">
            <svg
              className="o-ui-arrow hover:-rotate-45 transform-translate duration-400 mb-6 w-10 h-10 md:w-16 md:h-16"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.1 3.1L63 63" stroke="gray" strokeWidth="2" />
              <path d="M63 1V63H1" stroke="gray" strokeWidth="2" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Talent Development Section */}
      <section
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 py-8"
        data-scroll-section
      >
        <div className="w-full md:w-[50vw] flex flex-col justify-center gap-6">
          <p
            className="text-black text-center text-4xl md:text-7xl"
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            Talent Development Group
          </p>
          <h1
            className="text-black text-center text-xl md:text-2xl leading-tight"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Crafting Talent. Cultivating Futures
          </h1>
          <p
            className="text-black text-center text-base md:text-xl"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            We turn potential into performance through hands-on training, live
            challenges, and guided mentorship.
          </p>
          <Link to="/talent-development" className="flex justify-center">
            <svg
              className="o-ui-arrow hover:-rotate-45 transform-translate duration-400 mb-6 w-10 h-10 md:w-16 md:h-16"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.1 3.1L63 63" stroke="gray" strokeWidth="2" />
              <path d="M63 1V63H1" stroke="gray" strokeWidth="2" />
            </svg>
          </Link>
        </div>
        <div className="w-full md:w-[40vw] mt-10 md:mt-0">
          <img
            className="w-full h-[50vh] object-cover md:h-auto"
            src={Talent}
            alt=""
          />
        </div>
      </section>

      {/* Animated Grid Section */}
      <section
        className="w-full min-h-screen flex flex-col items-center justify-evenly px-4 py-8"
        data-scroll-section
      >
        <div id="option_container" className="w-full max-w-screen-xl">
          <div className="option-box w-full mb-4 h-[20vh] md:h-[40vh] bg-black text-center">
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="option-box h-[20vh] md:h-[40vh] bg-red-600 text-center">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="option-box h-[20vh] md:h-[40vh] bg-green-600 text-center">
              <img src="" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="option-box w-full md:w-full h-[20vh] md:h-[40vh] bg-yellow-600 text-center">
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section data-scroll-section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
