import React, { useRef } from "react";
import IconScroller from "../../components/iconscroll/iconscroller";
import { itsolutionsData } from "../../data/stalwart";
import ItSolutions from "../../components/itsolutions/itsolutions";
import Navbar from "../../components/navbar/navbar";
import Services from "../../components/services/services";
import ColorBlurbg from "../../components/blurbg/colorblurbg";

const Home = () => {
  const scrollRef = useRef(null);

  return (
    // remove pb-10 later on
    <main className="pb-10">
      <Navbar />
      <ColorBlurbg />
      <div className="flex flex-col justify-center gap-16 mt-16 z-40">
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
        <div className="bg-[rgba(25,25,43,20%)] w-full overflow-hidden space-y-10 backdrop-blur-2xl p-2">
          <div className="flex justify-center flex-col items-center px-[5vw]">
            <h1 className="text-center text-[#EEEEFF] text-2xl md:text-3xl">
              Our Services
            </h1>
            <p className="text-center bg-gradient-to-r from-[#A3E2BB] to-[#EEEEFF] bg-clip-text text-transparent md:text-xl">
              CRAFTING EXCELLENCE, TAILORED FOR YOU: EXPLORE OUR SPECIALIZED
              SERVICES.
            </p>
          </div>
          <div className="w-full max-w-full px-[3vw] space-y-5">
            <Services
              number={"01"}
              title={"Expertise Services"}
              description={
                "Custom blockchain solutions built for enterprise needs with smart contract functionality to revolutionize your business processes."
              }
            />
            <Services
              number={"02"}
              title={"Expertise Services"}
              description={
                "Native and cross-platform mobile applications that deliver exceptional user experience across iOS and Android devices."
              }
            />
            <Services
              number={"03"}
              title={"Process"}
              description={
                "Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent systems for your business."
              }
            />
            <Services
              number={"04"}
              title={"Mobile App Development"}
              description={
                "Creating responsive, intuitive, and engaging user interfaces with modern frameworks and best practices in web development."
              }
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
