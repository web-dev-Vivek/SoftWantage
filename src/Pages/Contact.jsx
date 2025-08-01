import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../Pages/Footer.jsx";

const Contact = () => {
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
        id="contact"
        data-scroll-section
        className="min-h-screen flex justify-center items-center bg-yellow-200"
      >
        <h2 className="text-4xl" data-scroll data-scroll-speed="1">
          Contact Section
        </h2>
      </section>
      <section data-scroll-section className="bg-black text-white">
        <Footer />
      </section>
    </div>
  );
};

export default Contact;
