import React from "react";

const ItSolutions = ({ svg: SvgComponent, headtext, detail }) => {
  return (
    <div className="">
      <div className="bg-[#060606] p-4 rounded-xl h-[400px] w-72 space-y-5 hover:border hover:border-white">
        <div>{<SvgComponent />}</div>
        <h4 className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent text-2xl font-semibold">
          {headtext}
        </h4>
        <hr className="bg-gradient-to-r from-[#A3E2BB] to-[#EEEEFF] bg-clip-text text-transparent w-3/5" />
        <p className="text-white">{detail}</p>
      </div>
    </div>
  );
};

export default ItSolutions;
