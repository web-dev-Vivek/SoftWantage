import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Homeimage from "../assets/HB.jpg";

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
        className="min-h-full w-full flex justify-center items-start"
        data-scroll-section
      >
        {/* Background Image with overlay content */}
        <div
          style={{
            backgroundImage: `url(${Homeimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="
            w-full h-[100vh] flex flex-col justify-center items-center px-6
            md:h-[90vh] md:px-0
          "
        >
          {/* Title Text */}
          <div
            className="text-center flex flex-row"
            data-scroll
            data-scroll-speed="6"
          >
            <span
              className="block text-5xl font-bold md:text-9xl"
              style={{ color: "rgb(1, 152, 178)" }}
            >
              Soft
            </span>
            <span
              className="block text-5xl font-bold md:text-9xl"
              style={{ color: "rgb(3, 75, 173)" }}
            >
              Wantage
            </span>
          </div>

          {/* Tagline */}
          <p
            className="mt-4 text-sm font-semibold text-blue-600 md:text-xl"
            data-scroll
            data-scroll-speed="6"
          >
            We Build Software | We Shape Talent
          </p>
        </div>
      </section>

      {/* Second Section – scroll test */}
      <section
        className="h-[100vh] w-full flex items-center justify-center text-white text-3xl md:text-5xl bg-blue-500"
        data-scroll-section
      >
        Hello 👋
      </section>
    </div>
  );
}

export default Home;
