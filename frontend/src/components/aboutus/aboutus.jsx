import React from "react";
import ImgAnime from "./imganime";

const AboutUs = () => {
  return (
    <div className="bg-[rgba(25,25,43,20%)] w-full overflow-hidden space-y-14 backdrop-blur-2xl p-2">
      <div className="px-[3vw] md:px-[22vw] flex flex-col gap-3">
        <h1 className="text-center text-[#EEEEFF] text-2xl md:text-3xl">
          About Us
        </h1>
        <p className="uppercase font-orbitron text-center bg-gradient-to-r from-[#A3E2BB] to-[#EEEEFF] bg-clip-text text-transparent text-xl md:text-4xl">
          build for innovation: driven by process
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-16">
        <div>
          <ImgAnime />
        </div>
        <div className="space-y-14">
          <div className="space-y-5">
            <p className="capitalize font-bold text-white text-lg font-orbitron">
              our core value
            </p>
            <p className="text-base text-[rgba(255,255,255,85%)] font-semibold">
              We don’t just build tech—we build trust, impact, and long-term
              partnerships. Our work is guided by principles that ensure
              quality, transparency, and innovation at every step:
            </p>
            <ul className="text-[rgba(255,255,255,0.85)] list-disc text-sm">
              <li>
                Healthcare & MedTech - Energy & Utilities - Automotive &
                Mobility - Consumer Electronics - Manufacturing & Industrial
                Automation - Agriculture & AgriTech
              </li>
              <li> Logistics & Transportation</li>
              <li>Retail & E-commerce</li>
              <li> Finance & FinTech</li>
              <li> EdTech & Learning Platforms</li>
            </ul>
          </div>
          <div className="space-y-5">
            <p className="capitalize font-bold text-white text-lg font-orbitron">
              our methodology
            </p>
            <p className="text-base text-[rgba(255,255,255,85%)] font-semibold">
              Our methodology is more than a workflow—it's a mindset. By
              blending engineering rigor, design thinking, and cutting-edge
              innovation, we create solutions that are not just technically
              sound, but future-proof, scalable, and human-centric. We work
              across a diverse range of industries, solving real-world
              challenges with customized technology solutions:
            </p>
            <ul className="text-[rgba(255,255,255,0.85)] list-disc text-sm">
              <li> Healthcare & MedTech </li>
              <li> Energy & Utilities</li>
              <li> Automotive & Mobility</li>
              <li> Consumer Electronics</li>
              <li> Manufacturing & Industrial Automation</li>
              <li> Agriculture & AgriTech</li>
              <li> Logistics & Transportation</li>
              <li> Retail & E-commerce</li>
              <li> Finance & FinTech</li>
              <li> EdTech & Learning Platforms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
