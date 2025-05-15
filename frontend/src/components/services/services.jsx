import React from "react";
import Arrow from "../../assets/icons/circlerightarrowsvg";
import mobile from "../../assets/images/mobileapp.jpg";
import ai from "../../assets/images/ai.jpg";
import developer from "../../assets/images/dedicateddeveloper.jpg";
import frontend from "../../assets/images/frontend.jpg";

const images = [
  { src: mobile, label: "Artificial Intelligence" },
  { src: ai, label: "Frontend Development" },
  { src: developer, label: "Mobile App Development" },
  { src: frontend, label: "Web Development" },
];

const Services = ({ number, title, description }) => {
  return (
    <div className="w-full max-w-full">
      <div className="flex flex-col gap-[3vmin]">
        <div className="flex w-full items-center justify-center space-x-4 md:justify-between">
          <div className="w-full flex gap-3 items-center">
            <h1 className="text-2xl font-normal text-white">{number}</h1>
            <h1 className="text-xl font-medium bg-gradient-to-r from-[rgb(255,255,255)] to-[#9C9C9C] bg-clip-text text-transparent">
              {title}
            </h1>
          </div>
          <div className="cursor-pointer">
            <Arrow />
          </div>
        </div>

        <div className="flex items-center border-l-2 border-[#9C9C9C] pl-4 text-wrap whitespace-break-spaces  ">
          <h1 className="text-lg font-normal text-[#9C9C9C]">{description}</h1>
        </div>

        <div className="w-full overflow-x-auto snap-x scroll-smooth md:overflow-visible md:snap-none">
          <div className="flex gap-4 pb-2 pt-2">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-64 snap-start rounded-lg overflow-hidden md:flex-1 md:w-auto"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-48 object-cover"
                />
                <h2 className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-40 p-4">
                  {img.label}
                </h2>
              </div>
            ))}
          </div>
        </div>
        <hr className="flex opacity-25" />
      </div>
    </div>
  );
};

export default Services;
