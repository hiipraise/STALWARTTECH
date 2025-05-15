import React from "react";

const ItSolutions = ({ svg: SvgComponent, headtext, detail }) => {
  return (
    <div className="">
      <div className="bg-[#060606] p-4 rounded-xl h-96 w-72">
        <div>{<SvgComponent />}</div>
        <h4 className="bg-gradient-to-r from-[rgba(255, 255, 255, 1)] to-[rgba(255, 255, 255, 0.4)] bg-clip-text text-transparent">
          {headtext}
        </h4>
        <hr className="bg-gradient-to-r from-[#A3E2BB] to-[#EEEEFF] bg-clip-text text-transparent w-3/5" />
        <p className="text-white mt-10">{detail}</p>
      </div>
    </div>
  );
};

export default ItSolutions;
