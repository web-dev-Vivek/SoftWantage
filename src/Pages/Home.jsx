import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

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
      <section
        className="min-h-screen flex justify-center items-center bg-green-100"
        data-scroll-section
      >
        <h1 className="text-5xl">Welcome to Home</h1>
      </section>
      <section
        className="min-h-screen flex justify-center items-center bg-green-100"
        data-scroll-section
      >
        <h1 className="text-5xl">Welcome to Home</h1>
      </section>
      <section
        className="min-h-screen flex justify-center items-center bg-green-100"
        data-scroll-section
      >
        <h1 className="text-5xl">Welcome to Home</h1>
      </section>
      <section
        className="min-h-screen flex justify-center items-center bg-green-100"
        data-scroll-section
      >
        <h1 className="text-5xl">Welcome to Home</h1>
      </section>
    </div>
  );
}

export default Home;
