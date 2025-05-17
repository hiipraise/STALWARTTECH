import React, { useRef } from "react";
import ItSolutions from "../../components/itsolutions/itsolutions";
import {itsolutionsData} from "../../data/stalwart";

const MainItsolutions = () => {
  const scrollRef = useRef(null);
  return (
    <div className="flex flex-col gap-10">
      <div className="px-[5vw] md:px-[20vw] flex flex-col gap-3">
        <p className="text-center text-[#EEEEFF] text-2xl md:text-3xl">
          IT Solutions
        </p>
        <p className="font-orbitron text-center bg-gradient-to-r from-[#A3E2BB] to-[#EEEEFF] bg-clip-text text-transparent text-xl md:text-4xl">
          Excellence Exemplified: Most Productive IT Service Provider for
          Companies, Businesses & Individual
        </p>
      </div>
      <div className="relative">
        <div
          className="flex gap-4 px-[5vw] pl-[5vw] justify-start lg:justify-center items-center overflow-x-auto md:overflow-x-auto lg:overflow-x-hidden scroll-smooth snap-x md:snap-none"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          ref={scrollRef}
        >
          {itsolutionsData.map((product) => (
            <div key={product.id} className="snap-center shrink-0">
              <ItSolutions
                key={product.id}
                svg={product.svg}
                headtext={product.headtext}
                detail={product.detail}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainItsolutions;
