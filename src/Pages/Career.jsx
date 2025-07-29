import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../Pages/Footer.jsx";

const Career = () => {
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
        id="career"
        data-scroll-section
        className="min-h-screen flex flex-col justify-start items-center bg-purple-200"
      >
        <div
          className="text-8xl font-bold md:mt-30 text-blue-500"
          style={{ fontFamily: "'DM Serif Text', serif" }}
        >
          Career
        </div>
        <div className="w-screen flex flex-col md:mt-30 justify-center items-center ">
          <h1
            className="text-6xl mb-5 "
            style={{ fontFamily: "'DM Serif Text', serif" }}
          >
            We are hiring
          </h1>
          <p className="text-2xl">
            Please send your detailed resumes at{"  "}
            <a
              className="text-blue-600"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@softwantage.com"
            >
              support@softwantage.com{" "}
            </a>
            for various openings
          </p>
        </div>
      </section>
      <section data-scroll-section className="bg-black text-white">
        <Footer />
      </section>
    </div>
  );
};

export default Career;
