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
      <section
        className="min-h-screen w-full flex justify-center items-start bg-green-100"
        data-scroll-section
      >
        <div
          style={{ backgroundImage: `url(${Homeimage})` }}
          className="md:w-[100vw] bg-red-600 md:h-[90vh]"
        >
          hi
        </div>
      </section>
    </div>
  );
}

export default Home;
