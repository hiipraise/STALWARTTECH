import React, { useRef } from "react";
import IconScroller from "../../components/iconscroll/iconscroller";
import BlurBg from "../../assets/icons/blurbg";
import { itsolutionsData } from "../../data/stalwart";
import ItSolutions from "../../components/itsolutions/itsolutions";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  const scrollRef = useRef(null);

  return (
    <main className="">
      <Navbar />
      <div>
        <div className="hidden md:block absolute left-0 translate-y-60">
          <BlurBg />
        </div>
        <div className="hidden md:block absolute left-0">
          <BlurBg />
        </div>
      </div>
      <div>
        <div className="hidden md:block absolute right-0 rotate-180 translate-y-56">
          <BlurBg />
        </div>
        <div className="hidden md:block absolute right-0 rotate-180">
          <BlurBg />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-16 mt-16">
        <div className="flex flex-col gap-8 items-center px-[4vw] md:px-[8vw]">
          <h1 className="text-3xl md:text-6xl text-center font-bold bg-gradient-to-r from-[#A3E2BB] to-[#EEEEFF] bg-clip-text text-transparent md:">
            From Software to AI, embedded systems & IoT Solution, WE TRIVE!
          </h1>
          <p className="text-[#EEEEFF] md:text-xl text-center">
            Welcome to Stalwart, where cutting-edge technology meets
            user-friendly solutions crafted by Results-Driven Team. Join us in
            shaping a future where innovation is accessible to all.
          </p>
          <div className="flex items-center justify-center gap-[3vmin]">
            <button className="bg-[#A3E2BB] border border-[#A3E2BB] font-medium rounded-full py-2 px-4 text-[#19192b] hover:shadow-[0_0.4rem_0_0_#000]">
              Book a Call
            </button>
            <button className="relative overflow-hidden px-4 py-2 border border-[#78f6cb] text-[#78f6cb] rounded-full before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:bg-[#78f6cb20] before:z-[-1] before:transition-[height] before:duration-300 hover:before:h-full">
              Get a Quote
            </button>
          </div>
        </div>
        <div>
          <IconScroller />
        </div>
        <div className="flex flex-col gap-10">
          <div className="px-[5vw] md:px-[20vw] flex flex-col gap-3">
            <p className="text-center text-[#EEEEFF] text-2xl md:text-3xl">
              IT Solutions
            </p>
            <p className="text-center bg-gradient-to-r from-[#A3E2BB] to-[#EEEEFF] bg-clip-text text-transparent md:text-xl">
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
      </div>
    </main>
  );
};

export default Home;
