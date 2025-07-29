import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../Pages/Footer.jsx";
import VID from "../assets/About.mp4";

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
        className="min-h-screen flex flex-col justify-center gap-10 md:gap-40 items-center "
      >
        <div className="flex mt-20 flex-col items-center">
          <video
            className="w-[90vw] md:w-[40vw] rounded-full"
            autoPlay
            muted
            loop
            playsInline
            src={VID}
          ></video>
          <h1
            className="mt-10 md:text-9xl text-5xl font-semibold"
            style={{
              fontFamily: "'Roboto Condensed', sans-serif",
            }}
          >
            About us
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-10 text-[#0b7363]">
          <div className="">
            <h3
              className="md:mb-4 font-semibold text-3xl text-center"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Technology meets Talent
            </h3>
            <p className="text-lg">
              Founded by passionate professionals, SoftWantage helps SMBs
              embrace digital transformation while empowering future-ready
              professionals. We act as a bridge between innovation and
              capability.
            </p>
          </div>

          <div className="">
            <h3 className="md:mb-4 font-semibold text-3xl text-center">
              Mission-driven Innovation
            </h3>
            <p className="text-lg">
              Our mission is to empower businesses and individuals with secure,
              scalable software solutions and transformative talent development.
              We combine real-world training, mentorship, and digital
              craftsmanship to drive growth.
            </p>
          </div>

          <div className="">
            <h3 className="md:mb-4 font-semibold text-3xl text-center">
              Core Values at the Center
            </h3>
            <p className="text-lg">
              We believe in innovation with purpose, integrity and trust,
              excellence in delivery, and empowering people at every stage.
              These values guide how we work and what we build.
            </p>
          </div>

          <div className="">
            <h3 className="md:mb-4 font-semibold text-3xl text-center">
              A Vision for a Smarter Future
            </h3>
            <p className="text-lg">
              Our vision is to become a trusted global partner in digital
              transformation—delivering impactful solutions and shaping skilled
              professionals for a sustainable, tech-driven world.
            </p>
          </div>
        </div>
      </section>
      <section data-scroll-section className="bg-black text-white">
        <Footer />
      </section>
    </div>
  );
};

export default About;
