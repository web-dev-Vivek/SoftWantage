import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../Pages/Footer.jsx";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TalentDevelopment = () => {
  const scrollRef = useRef(null); // Locomotive container
  const locoScroll = useRef(null); // Store Locomotive instance

  useEffect(() => {
    // Initialize Locomotive Scroll
    locoScroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Connect Locomotive to ScrollTrigger
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

    // Refresh ScrollTrigger on Locomotive scroll
    locoScroll.current.on("scroll", ScrollTrigger.update);

    // Handle refresh correctly
    ScrollTrigger.addEventListener("refresh", () => {
      locoScroll.current.update();
    });

    // Trigger initial refresh
    ScrollTrigger.refresh();

    // Clean up on unmount
    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
      ScrollTrigger.removeEventListener("refresh", () => {
        if (locoScroll.current) locoScroll.current.update();
      });
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="min-h-screen bg-white"
    >
      {/* Talent Development Section */}
      <section
        id="talent-development"
        data-scroll-section
        className="min-h-screen flex justify-center items-center bg-pink-200"
      >
        <h2 className="text-4xl" data-scroll data-scroll-speed="1">
          Talent Development Section
        </h2>
      </section>

      {/* Footer (inside scroll section if it should animate too) */}
      <section data-scroll-section>
        <Footer />
      </section>
    </div>
  );
};

export default TalentDevelopment;
