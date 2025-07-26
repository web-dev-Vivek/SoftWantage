import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SoftwareSolution = () => {
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
      <section id="software-solution" data-scroll-section className="min-h-screen flex justify-center items-center bg-teal-200">
        <h2 className="text-4xl" data-scroll data-scroll-speed="1">Software Solution Section</h2>
      </section>
    </div>
  );
};

export default SoftwareSolution;
