"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AnimationCard = ({ title, image, bgColor, bgHeight }) => {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        if (rect.top < window.innerHeight * 0.8 && !hasAnimated) {
          setHasAnimated(true);
        } else if (rect.top > window.innerHeight && hasAnimated) {
          setHasAnimated(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div className={`px-2 py-4   mx-auto  text-center lg:w-[490px] ${bgColor}`}>
      <div ref={containerRef} className="relative ">
        <h2
          className={` z-20 absolute left-0 right-0 text-[34px] lg:text-[40px] py-[10px] font-bold lg:py-[20px] text-primary transform transition-all duration-1000 ease-in-out ${
            hasAnimated ? "scale-100 opacity-100" : "scale-50 opacity-10"
          } `}
        >
          {title}
        </h2>
        <div
          className={`transform transition-transform duration-1000 ease-in-out ${
            hasAnimated
              ? "translate-y-0 opacity-50"
              : "translate-y-20 opacity-0"
          } absolute bg-black opacity-50 w-full ${bgHeight} rounded-t-3xl  z-10`}
        ></div>
        <Image
          src={image}
          width={750}
          height={600}
          alt={title}
          className={` rounded-3xl transform transition-transform duration-1000 ease-in-out ${
            hasAnimated
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          } shadow-xl `}
        />
      </div>
    </div>
  );
};

export default AnimationCard;
